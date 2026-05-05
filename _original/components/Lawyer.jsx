function Lawyer() {
  return (
    <section className="section lawyer">
      <div className="wrap">
        <h2 className="section-title">Quem vai te ajudar a recuperar sua conta</h2>
        <div className="lawyer-card">
          <div className="lawyer-photo">
            <img src="assets/rafael-mota.png" alt="Rafael Mota - Advogado especialista" />
          </div>
          <div className="lawyer-info">
            <div className="role">Advogado especialista</div>
            <h3>Rafael Mota</h3>
            <p className="bio">Formado em Direito pelo Centro Universitário Estácio do Ceará, é um estrategista digital apaixonado pelo direito e novas tecnologias. Atua como professor e advogado especialista na defesa do trabalhador e do consumidor frente às tecnologias modernas.</p>
            <div className="oab">OAB/CE 36.237</div>
            <div>
              <a href="#contato" className="cta">Fale com o especialista <Icons.Arrow /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Lawyer = Lawyer;
