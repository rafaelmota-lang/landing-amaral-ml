function Reasons() {
  const cards = [
    {
      icon: <Icons.FileLine />,
      title: 'Violação nos Termos de Uso',
      text: 'Anunciar produtos proibidos ou usar linguagem imprópria pode resultar em suspensão.',
    },
    {
      icon: <Icons.Lock />,
      title: 'Problemas de Segurança',
      text: 'Acontece quando a plataforma suspeita que houve atividades de hackers na sua conta.',
    },
    {
      icon: <Icons.Cube />,
      title: 'Interpretação do algoritmo',
      text: 'O algoritmo muitas vezes interpreta informações de forma errada, o que causa suspensões injustas sem dar nenhuma oportunidade de defesa.',
    },
  ];
  return (
    <section className="section reasons">
      <div className="wrap">
        <h2 className="section-title">Por que sua conta foi suspensa<br/><span style={{color: 'var(--orange-dark)'}}>(e o que um advogado pode fazer a respeito)</span></h2>
        <div className="reason-grid">
          {cards.map((c, i) => (
            <div className="reason-card" key={i}>
              <div className="num">0{i+1}</div>
              <div className="ic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <p className="pre-cta">Sente que sofreu uma suspensão injusta?</p>
        <div className="cta-block" style={{marginTop: 0}}>
          <a href="#contato" className="cta">Converse sobre o seu caso <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
window.Reasons = Reasons;
