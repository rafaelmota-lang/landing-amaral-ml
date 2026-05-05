function FAQ() {
  const [open, setOpen] = React.useState(0);
  const faqs = [
    {
      q: 'Quanto tempo demora para recuperar uma conta suspensa?',
      a: 'Cada caso é único. Em medidas judiciais com pedido liminar, é possível obter a reativação em poucas semanas. Casos mais complexos podem levar mais tempo, mas a maioria dos nossos clientes obtém resultado em 30 a 90 dias.'
    },
    {
      q: 'Atendem clientes em todo o Brasil?',
      a: 'Sim. Atuamos em todo o território nacional de forma 100% remota. Toda a documentação é enviada digitalmente e as audiências, quando necessárias, são realizadas online.'
    },
    {
      q: 'E se o Mercado Livre tiver retido o meu saldo?',
      a: 'Além da reativação da conta, podemos pedir judicialmente a liberação imediata do saldo retido, com correção monetária. Em muitos casos, é possível também pleitear danos morais pelas vendas perdidas.'
    },
    {
      q: 'Preciso ter certeza de que não cometi nenhuma infração?',
      a: 'Não. Mesmo em casos onde houve dúvida do vendedor, conseguimos avaliar a proporcionalidade da punição aplicada pela plataforma. Frequentemente as suspensões são desproporcionais às infrações alegadas.'
    },
    {
      q: 'Como funciona o pagamento dos honorários?',
      a: 'Trabalhamos com modelos transparentes, ajustados ao perfil do seu caso. Na primeira conversa, apresentamos o orçamento de forma clara e sem pegadinhas.'
    },
  ];
  return (
    <section className="section faq">
      <div className="wrap">
        <div style={{textAlign: 'center', marginBottom: 16}}>
          <span className="eyebrow">Perguntas frequentes</span>
        </div>
        <h2 className="section-title">Tire suas dúvidas antes de começar</h2>
        <div className="faq-list" style={{marginTop: 48}}>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i} data-open={open === i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <p style={{paddingTop: 4}}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
