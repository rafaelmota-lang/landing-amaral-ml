// Round-robin: alterna entre os dois consultores a cada submissão
const LEAD_ROUTING = [
  { name: 'Pedro Amaral', email: 'pedrobamaral@yahoo.com.br', whatsapp: '5511972021019' },
  { name: 'Rafael Mota', email: 'rafael.mota@conversaojuridica.com.br', whatsapp: '5511912611616' },
];

function getNextConsultant() {
  const key = 'amaral_lead_round_robin';
  const next = (parseInt(localStorage.getItem(key) || '0', 10) + 1) % LEAD_ROUTING.length;
  localStorage.setItem(key, String(next));
  return LEAD_ROUTING[next];
}

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [routedTo, setRoutedTo] = React.useState(null);
  const [data, setData] = React.useState({
    nome: '',
    email: '',
    telefone: '',
    perfil: '',
    situacao: '',
    mensagem: ''
  });
  const handle = (k) => (e) => setData(d => ({ ...d, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const consultant = getNextConsultant();
    setRoutedTo(consultant);
    setSubmitted(true);

    // Em produção: POSTar para o backend que dispara e-mails para
    // pedrobamaral@yahoo.com.br e rafael.mota@conversaojuridica.com.br,
    // e redireciona para o WhatsApp do consultant escolhido.
    const msg = encodeURIComponent(
      `Olá, ${consultant.name}! Meu nome é ${data.nome}. ` +
      `Sou ${data.perfil || 'usuário'} no Mercado Livre. ` +
      `Situação: ${data.situacao || 'não informada'}. ` +
      (data.mensagem ? `Detalhes: ${data.mensagem}` : '')
    );
    setTimeout(() => {
      window.open(`https://wa.me/${consultant.whatsapp}?text=${msg}`, '_blank');
    }, 1200);
  };

  return (
    <section className="section form-section" id="contato">
      <div className="wrap">
        <div className="form-grid">
          <div>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Atendimento gratuito</span>
            <h2 style={{ marginTop: 12 }}>Conte o seu caso e receba uma análise inicial sem compromisso</h2>
            <p className="lead">Preencha o formulário e nossa equipe entrará em contato em até 24 horas úteis para entender a sua situação e indicar o melhor caminho.</p>
            <div className="form-points">
              <div className="form-point"><span className="check"><Icons.Check /></span>Avaliação inicial gratuita do seu caso</div>
              <div className="form-point"><span className="check"><Icons.Check /></span>Atendimento 100% remoto, em todo o Brasil</div>
              <div className="form-point"><span className="check"><Icons.Check /></span>Equipe especializada em marketplaces</div>
              <div className="form-point"><span className="check"><Icons.Check /></span>Mais de 13 mil clientes atendidos</div>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="form-success">
                <div className="ok"><Icons.Check /></div>
                <h3>Mensagem recebida!</h3>
                <p>
                  Você será redirecionado para o WhatsApp de <strong>{routedTo?.name}</strong>,
                  da nossa equipe. Caso não abra automaticamente, clique no botão abaixo.
                </p>
                <a
                  href={`https://wa.me/${routedTo?.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="cta"
                  style={{ marginTop: 20 }}
                >
                  Abrir WhatsApp <Icons.Arrow />
                </a>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3>Fale com um especialista</h3>
                <p className="sub">Preencha os campos abaixo. É rápido e gratuito.</p>
                <div className="form-row">
                  <label>Nome completo</label>
                  <input required type="text" value={data.nome} onChange={handle('nome')} placeholder="Como devemos te chamar" />
                </div>
                <div className="form-row two">
                  <div>
                    <label>E-mail</label>
                    <input required type="email" value={data.email} onChange={handle('email')} placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label>WhatsApp</label>
                    <input required type="tel" value={data.telefone} onChange={handle('telefone')} placeholder="(11) 90000-0000" />
                  </div>
                </div>
                <div className="form-row">
                  <label>Você é…</label>
                  <select required value={data.perfil} onChange={handle('perfil')}>
                    <option value="">Selecione…</option>
                    <option>Vendedor</option>
                    <option>Comprador</option>
                    <option>Entregador</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="form-row">
                  <label>Situação atual</label>
                  <select required value={data.situacao} onChange={handle('situacao')}>
                    <option value="">Selecione…</option>
                    <option>Conta suspensa há menos de 30 dias</option>
                    <option>Conta suspensa há mais de 30 dias</option>
                    <option>Saldo retido pela plataforma</option>
                    <option>Estou para ser suspenso / em análise</option>
                    <option>Outra situação</option>
                  </select>
                </div>
                <div className="form-row">
                  <label>Conte um pouco sobre o seu caso (opcional)</label>
                  <textarea value={data.mensagem} onChange={handle('mensagem')} placeholder="Descreva quando aconteceu, qual o motivo informado, valor retido, etc." />
                </div>
                <button type="submit" className="cta">
                  Enviar e falar no WhatsApp <Icons.Arrow />
                </button>
                <p className="privacy">
                  Ao enviar, você concorda com o tratamento dos seus dados conforme a LGPD. Não compartilhamos suas informações.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
window.ContactForm = ContactForm;
