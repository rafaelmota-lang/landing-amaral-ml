function Banner() {
  const items = [
    {
      icon: <Icons.Contract />,
      text: <><strong>O Mercado Livre suspende contas que não violaram os Termos de Uso.</strong> Talvez você não saiba, mas, muitas vezes, o Mercado Livre suspende a conta de um vendedor sem que ele tenha violado nenhuma regra nos Termos de Uso da plataforma.</>
    },
    {
      icon: <Icons.Robot />,
      text: <><strong>O algoritmo de suspensão é 100% automatizado e comete injustiças.</strong> Quem interpreta o seu comportamento na plataforma é um sistema autônomo, que pode aplicar punições por “entender” erroneamente que você cometeu uma infração.</>
    },
    {
      icon: <Icons.Speed />,
      text: <><strong>Mesmo contas com boa reputação e sem reclamações podem ser suspensas.</strong> O algoritmo pode não levar em consideração o seu histórico de vendedor confiável e bloquear as suas vendas mesmo assim.</>
    },
    {
      icon: <Icons.Box />,
      text: <>Se o Mercado Livre <strong>não informou de forma clara o motivo da sua suspensão</strong>, você tem boas chances de recuperar sua conta.</>
    },
  ];
  return (
    <section className="orange-band">
      <div className="wrap">
        <h2>Bloqueios indevidos acontecem todos os dias com vendedores do Mercado Livre, mas você pode recorrer</h2>
        <div className="orange-list">
          {items.map((it, i) => (
            <div className="orange-item" key={i}>
              <div className="ic">{it.icon}</div>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a href="#contato" className="cta">Fale com um especialista em Mercado Livre <Icons.Arrow /></a>
          <StarsRow light />
        </div>
      </div>
    </section>
  );
}
window.Banner = Banner;
