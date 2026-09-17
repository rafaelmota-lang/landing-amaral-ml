// Roteamento de WhatsApp da LP do Mercado Livre.
//
// ANTES (ate 2026-09-01): os 6 CTAs iam para uma pagina de captura do Leadster
// e um formulario nativo sorteava entre dois numeros. Os DOIS estavam
// ARQUIVADOS e DESCONECTADOS no Digisac (5511972021019 e 5511912611616), ou
// seja, 100% de quem preenchia o formulario caia no vazio. Conferido via
// GET /services em 2026-09-01.
//
// AGORA, por decisao do dono: sem formulario e sem pagina de captura. Todo CTA
// vai direto para o WhatsApp, num unico numero, o do canal "Amaral e Bohrer
// Advogados - Mercado Livre" do Fluxo Juridico.
//
// ATENCAO: o SDK do Leadster continua no index.html e o chat flutuante segue
// capturando lead por fora deste arquivo. Para onde ele roteia nao foi possivel
// verificar por API (o fluxo e uma SPA). Se a intencao e mesmo um unico
// destino, isso precisa ser conferido no painel do Leadster.

export const WHATSAPP_POOL = [
  // Marketplace usa o canal proprio, separado do de redes sociais.
  { numero: '5511926471049', peso: 1 }, // FJ "Canal Mercado Livre"

  // ---------------------------------------------------------------------
  // HISTORICO - ler antes de acrescentar numero.
  //
  // 2026-09-17: volta para o canal de marketplace. A separacao e por
  //   PRODUTO: marketplace (ML e Shopee) neste numero; redes sociais
  //   (LP do Instagram) nos canais 8630 e 8173. Nao misturar.
  // 2026-09-16: tinha ido para o 8630 junto com as outras, revertido.
  // 2026-09-01: saiam 5511972021019 e 5511912611616, ambos ARQUIVADOS e
  //   DESCONECTADOS no Digisac; 100% de quem preenchia o formulario caia
  //   no vazio.
  //
  // ANTES DE INCLUIR OU REATIVAR QUALQUER UM: conferir que esta conectado,
  // nao arquivado E nao banido. Em 2026-09-16 a API do FJ reportou
  // "connected" para um numero ja banido: o painel nao denuncia banimento.
  // ---------------------------------------------------------------------
];

// ---------------------------------------------------------------------------
// NOTA: o numero desta LP vive no Fluxo Juridico, nao no Digisac.
// A distribuicao entre atendentes e feita na fila do proprio FJ; a LP so
// escolhe a porta de entrada. O coletor digisac-meta-capi nao cobre esse lado.
// ---------------------------------------------------------------------------

import { ORIGENS, detectarOrigem } from './origem.js';

export const ASSUNTO = 'Quero recuperar minha conta do Mercado Livre';

// Mensagem do HTML pre-renderizado da raiz. As paginas /google/ e /meta/ e o
// sorteio real montam a mensagem no cliente, via montarLink().
export const MENSAGEM_INICIAL = `${ORIGENS.site.tag} - ${ASSUNTO}`;

const CHAVE_STICKY = 'ab_ml_wpp_v4';

export function escolherNumero() {
  try {
    const salvo = localStorage.getItem(CHAVE_STICKY);
    const jaEscolhido = WHATSAPP_POOL.find((p) => p.numero === salvo);
    if (jaEscolhido) return jaEscolhido;
  } catch (e) {}

  const total = WHATSAPP_POOL.reduce((s, p) => s + p.peso, 0);
  let r = Math.random() * total;
  const escolhido = WHATSAPP_POOL.find((p) => (r -= p.peso) < 0) || WHATSAPP_POOL[0];

  try { localStorage.setItem(CHAVE_STICKY, escolhido.numero); } catch (e) {}
  return escolhido;
}

export function montarMensagem(extra) {
  const origem = detectarOrigem();
  const tag = (ORIGENS[origem] || ORIGENS.site).tag;
  return `${tag} - ${extra || ASSUNTO}`;
}

export function montarLink(numero, extra) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(montarMensagem(extra))}`;
}

// Link padrao do HTML pre-renderizado (o prerender roda sem localStorage).
// E FUNCAO, nao const: a mensagem depende da origem, e a origem so e conhecida
// na hora do render. Como const, seria congelada no import e as tres paginas
// sairiam com a mesma tag.
export function linkPadrao() {
  return montarLink(WHATSAPP_POOL[0].numero);
}
