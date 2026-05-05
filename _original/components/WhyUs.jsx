function WhyUs() {
  const cards = [
    {
      stat: '+',
      label: 'Especialização',
      title: 'Entendemos de marketplaces',
      text: 'Conhecemos as particularidades dos processos contra o Mercado Livre, sabemos a linguagem e as táticas que a defesa da plataforma utiliza e sabemos os melhores caminhos.',
      icon: <Icons.Handshake />,
    },
    {
      stat: '13k+',
      label: 'Clientes atendidos',
      title: 'Mais de 13 mil clientes atendidos',
      text: 'Nossa equipe não vai se espantar com o seu caso e saberá exatamente o que fazer. São mais de 13 mil clientes atendidos em todo o Brasil.',
      icon: <Icons.Users />,
    },
    {
      stat: '5,0',
      label: 'Nota Google',
      title: 'Nota máxima no Google',
      text: 'Nosso escritório tem nota 5,0 nas avaliações do Google, com 594 avaliações verificadas. Você pode conferir o perfil oficial antes mesmo de falar conosco.',
      icon: <Icons.Star />,
    },
  ];
  return (
    <section className="section why-us">
      <div className="wrap">
        <h2 className="section-title">Precisa de um advogado especializado em marketplaces?<br/><span style={{color: 'var(--orange-dark)'}}>Saiba por que escolher a Amaral</span></h2>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div className="why-card" key={i}>
              <div className="corner"></div>
              <div className="stat">{c.stat}</div>
              <div className="stat-label">{c.label}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a href="#contato" className="cta">Comece agora <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
window.WhyUs = WhyUs;
