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
  original: 'O Mercado Livre suspendeu sua conta? Retome suas vendas com o auxílio de um advogado <span class="accent">especializado em marketplaces</span>.',
  direct: 'Conta suspensa no <span class="accent">Mercado Livre</span>? Recupere suas vendas com quem entende do assunto.',
  urgent: 'Sua loja parou. <span class="accent">Seu saldo está retido.</span> Nós sabemos como reverter isso.',
};
const SUBHEADS = {
  original: 'Somos especialistas em assistência jurídica para vendedores do Mercado Livre: saiba como recorrer se a plataforma suspendeu suas vendas ou está bloqueando o seu saldo.',
  direct: 'Mais de 13 mil vendedores já recuperaram suas contas com o nosso escritório. Atuamos em todo o Brasil, de forma 100% remota e com avaliação inicial gratuita.',
  urgent: 'Cada dia parado é prejuízo. Fale agora com um advogado especialista em marketplaces e descubra em minutos como recuperar a sua conta e o seu saldo.',
};
const CTAS = {
  original: 'Fale com um especialista em Mercado Livre',
  direct: 'Quero recuperar minha conta agora',
  urgent: 'Análise gratuita do meu caso',
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
