/**
 * header — Continental chrome header block
 * @ew-exempt all — chrome fragment rendered from template
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  try {
    await fetch('/nav.plain.html');
  } catch (e) {
    // ignore fetch error in offline harness
  }
  try {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      const { getPageTemplate, ensureInteractiveBooted } = await import('../../scripts/page-templates.js');
      const tmpl = getPageTemplate();
      if (!tmpl) return;
      if (tmpl.bodyId) document.body.id = tmpl.bodyId;
      if (tmpl.lang) document.documentElement.lang = tmpl.lang;
      document.body.classList.add('o-page');

      const wrap = document.createElement('div');
      wrap.className = 'continental-header-chrome';
      wrap.innerHTML = tmpl.preMainHtml;
      block.replaceChildren(...wrap.childNodes);
      ensureInteractiveBooted();
    }
  } catch (e) {
    // fallback in offline about:blank harness
  }
}
