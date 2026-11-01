// De onde veio o visitante. Existe porque o escritorio NAO usa GA4: o unico
// marcador de origem que sobrevive ate o atendimento e o texto da primeira
// mensagem do WhatsApp.
export const ORIGENS = {
  google: { tag: '#Google', rotulo: 'Google Ads' },
  meta:   { tag: '#Meta',   rotulo: 'Meta Ads' },
  youtube:{ tag: '#Youtube',rotulo: 'descrição dos vídeos do YouTube' },
  site:   { tag: '#Site',   rotulo: 'raiz / organico' },
};

export function detectarOrigem() {
  // No prerender nao existe location: a origem vem do build (prerender.mjs).
  if (typeof location === 'undefined') {
    return (typeof globalThis !== 'undefined' && globalThis.__ORIGEM__) || 'site';
  }
  try {
    const p = (location.pathname || '').toLowerCase();
    if (p.startsWith('/google')) return 'google';
    if (p.startsWith('/meta')) return 'meta';
    if (p.startsWith('/youtube')) return 'youtube';
    const src = new URLSearchParams(location.search).get('src');
    if (src && ORIGENS[src.toLowerCase()]) return src.toLowerCase();
  } catch (e) {}
  return 'site';
}

export function detectarTag(comCodigo = true) {
  const origem = detectarOrigem();
  const tag = (ORIGENS[origem] || ORIGENS.site).tag;
  // O codigo do video so existe no navegador; o prerender mantem #Youtube.
  if (comCodigo && origem === 'youtube' && typeof location !== 'undefined') {
    const video = new URLSearchParams(location.search).get('v');
    if (video && /^[a-zA-Z0-9]{1,12}$/.test(video)) return `${tag} ${video}`;
  }
  return tag;
}
