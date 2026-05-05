function Recover() {
  const [playing, setPlaying] = React.useState(false);
  const VIDEO_ID = 'ItwYkRaxXN4';
  const steps = [
    {
      title: 'Tente entrar em contato amigavelmente com a plataforma',
      paras: [
        'O Mercado Livre tem, por hábito, remover todo o acesso de contas suspensas à plataforma, de forma que se torna praticamente impossível ter acesso ao suporte.',
        'De toda forma, caso consiga alguma forma de contato, descreva o seu caso com maior riqueza de detalhes possível.'
      ]
    },
    {
      title: 'Reúna provas de que tentou resolver amigavelmente',
      paras: [
        'Armazene “prints”, números de protocolo e quaisquer outras provas de que você buscou a resolução diretamente com a plataforma e não obteve sucesso.',
        'Recolha provas de que a alegação do Mercado Livre não é verdadeira (caso saiba o motivo da suspensão). Por exemplo: se alegam que você vende réplicas, mostre imagens provando que não vende.'
      ]
    },
    {
      title: 'Busque plataformas de proteção ao consumidor',
      paras: [
        'Tente solução em portais de defesa do consumidor como Reclame Aqui e Consumidor.gov.',
        'Ainda que o Mercado Livre não te responda ou resolva o seu problema, você acumula mais uma prova de que está buscando solução amigavelmente.'
      ]
    },
    {
      title: 'Entre com uma ação judicial',
      paras: [
        'Uma vez esgotadas todas as vias extrajudiciais de solução, busque ajuda de um advogado da sua confiança e que tenha experiência com marketplaces.',
        'Apresente a ele toda a documentação que você reuniu nos passos anteriores.'
      ]
    },
  ];
  return (
    <section className="section recover">
      <div className="wrap">
        <h2 className="section-title">Como recuperar sua conta suspensa?</h2>
        <div className="video-wrap">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&playsinline=1&modestbranding=1`}
              title="Como recuperar conta no Mercado Livre"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <button className="video-poster" onClick={() => setPlaying(true)} aria-label="Reproduzir vídeo">
              <img src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`} alt="" onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`; }} />
              <span className="video-play">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </span>
              <span className="video-label">Assista: como recuperar sua conta</span>
            </button>
          )}
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{i+1}</div>
              <h3>{s.title}</h3>
              {s.paras.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a href="#contato" className="cta">Receba orientação especializada <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
window.Recover = Recover;
