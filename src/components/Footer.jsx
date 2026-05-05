export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">
              <span className="mark" aria-hidden="true">A</span>
              <span>Amaral &amp; Bohrer Advogados</span>
            </div>
            <p>Escritório especializado na defesa de vendedores em marketplaces. Atuamos em todo o Brasil de forma remota.</p>
          </div>
          <div className="foot-col">
            <h3>Contato</h3>
            <ul>
              <li>contato@amaraladvogados.app</li>
              <li>(11) 99682-4517</li>
              <li><a href="#contato">Formulário de atendimento</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h3>Áreas de atuação</h3>
            <ul>
              <li>Mercado Livre</li>
              <li>Shopee</li>
              <li>Amazon Seller</li>
              <li>Magazine Luiza</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Amaral &amp; Bohrer Advogados. Todos os direitos reservados.</span>
          <span>OAB/CE 36.237</span>
        </div>
        <p className="foot-disclaimer">
          Este site não faz parte do Google nem do Facebook ou do Facebook Inc. Além disso, não oferecemos nenhum tipo de serviço oficial do governo, NÃO praticamos fraude, não somos uma empresa que vende criptoativos ou qualquer outro serviço.
        </p>
      </div>
    </footer>
  );
}
