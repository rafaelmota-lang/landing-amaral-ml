import { lazy, Suspense, useState } from 'react';
import { Hero } from './components/Hero.jsx';
import { Banner } from './components/Banner.jsx';
import { Reasons } from './components/Reasons.jsx';
import { Results } from './components/Results.jsx';
import { Recover } from './components/Recover.jsx';
import { Lawyer } from './components/Lawyer.jsx';
import { WhyUs } from './components/WhyUs.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { FAQ } from './components/FAQ.jsx';
import { ContactForm } from './components/Form.jsx';
import { Footer } from './components/Footer.jsx';

const TWEAKS_ENABLED = typeof __TWEAKS__ !== 'undefined' && __TWEAKS__;

const TweaksRuntime = TWEAKS_ENABLED
  ? lazy(() => import('./components/tweaks/TweaksRuntime.jsx'))
  : null;

const HEADLINES = {
  original: 'Teve a conta suspensa em um marketplace? Conte com o auxílio de um advogado <span class="accent">especializado em marketplaces</span>.',
  direct: 'Conta de vendedor suspensa? <span class="accent">Entenda seus direitos</span> com quem é especialista em marketplaces.',
  urgent: 'Sua loja parou. <span class="accent">Seu saldo está retido.</span> Você pode recorrer judicialmente.',
};
const SUBHEADS = {
  original: 'Escritório de advocacia independente, especializado em assistência jurídica a vendedores de marketplaces como o Mercado Livre: saiba como recorrer se a plataforma suspendeu suas vendas ou bloqueou o seu saldo.',
  direct: 'Mais de 10 mil clientes já contaram com o nosso escritório. Atuamos em todo o Brasil, de forma 100% remota.',
  urgent: 'Cada dia parado é prejuízo. Fale agora com um advogado especialista em marketplaces e entenda os caminhos jurídicos para o seu caso.',
};
const CTAS = {
  original: 'Fale com um advogado especialista',
  direct: 'Quero falar sobre o meu caso',
  urgent: 'Quero entender meus direitos',
};

const DEFAULTS = (typeof window !== 'undefined' && window.TWEAK_DEFAULTS) || {
  headlineVariant: 'urgent',
  ctaVariant: 'original',
  subheadVariant: 'urgent',
};

export function App() {
  const [tweaks, setTweaks] = useState(DEFAULTS);
  const setTweak = (key, value) => setTweaks((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <Hero
        headline={HEADLINES[tweaks.headlineVariant] || HEADLINES.original}
        subhead={SUBHEADS[tweaks.subheadVariant] || SUBHEADS.original}
        ctaLabel={CTAS[tweaks.ctaVariant] || CTAS.original}
      />
      <main id="content">
        <Banner />
        <Reasons />
        <Results />
        <Recover />
        <Lawyer />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />

      {TWEAKS_ENABLED && TweaksRuntime && (
        <Suspense fallback={null}>
          <TweaksRuntime tweaks={tweaks} setTweak={setTweak} />
        </Suspense>
      )}
    </>
  );
}
