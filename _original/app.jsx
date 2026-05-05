function App() {
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  const headlines = {
    original: 'O Mercado Livre suspendeu sua conta? Retome suas vendas com o auxílio de um advogado <span class="accent">especializado em marketplaces</span>.',
    direct: 'Conta suspensa no <span class="accent">Mercado Livre</span>? Recupere suas vendas com quem entende do assunto.',
    urgent: 'Sua loja parou. <span class="accent">Seu saldo está retido.</span> Nós sabemos como reverter isso.',
  };
  const subheads = {
    original: 'Somos especialistas em assistência jurídica para vendedores do Mercado Livre: saiba como recorrer se a plataforma suspendeu suas vendas ou está bloqueando o seu saldo.',
    direct: 'Mais de 13 mil vendedores já recuperaram suas contas com o nosso escritório. Atuamos em todo o Brasil, de forma 100% remota e com avaliação inicial gratuita.',
    urgent: 'Cada dia parado é prejuízo. Fale agora com um advogado especialista em marketplaces e descubra em minutos como recuperar a sua conta e o seu saldo.',
  };
  const ctas = {
    original: 'Fale com um especialista em Mercado Livre',
    direct: 'Quero recuperar minha conta agora',
    urgent: 'Análise gratuita do meu caso',
  };

  return (
    <>
      <Hero
        headline={headlines[tweaks.headlineVariant] || headlines.original}
        subhead={subheads[tweaks.subheadVariant] || subheads.original}
        ctaLabel={ctas[tweaks.ctaVariant] || ctas.original}
      />
      <Banner />
      <Reasons />
      <Results />
      <Recover />
      <Lawyer />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero · Variações de copy">
          <TweakRadio
            label="Headline"
            value={tweaks.headlineVariant}
            onChange={(v) => setTweak('headlineVariant', v)}
            options={[
              { value: 'original', label: 'Original' },
              { value: 'direct', label: 'Direta' },
              { value: 'urgent', label: 'Urgência' },
            ]}
          />
          <TweakRadio
            label="Subtítulo"
            value={tweaks.subheadVariant}
            onChange={(v) => setTweak('subheadVariant', v)}
            options={[
              { value: 'original', label: 'Original' },
              { value: 'direct', label: 'Prova social' },
              { value: 'urgent', label: 'Urgência' },
            ]}
          />
          <TweakRadio
            label="CTA principal"
            value={tweaks.ctaVariant}
            onChange={(v) => setTweak('ctaVariant', v)}
            options={[
              { value: 'original', label: 'Original' },
              { value: 'direct', label: 'Direto' },
              { value: 'urgent', label: 'Urgência' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
