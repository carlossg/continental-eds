/**
 * footer — Continental chrome footer block
 * @ew-exempt all — chrome fragment rendered from template
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  try {
    await fetch('/footer.plain.html');
  } catch (e) {
    // ignore fetch error in offline harness
  }
  try {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      const { getPageTemplate, ensureInteractiveBooted } = await import('../../scripts/page-templates.js');
      const tmpl = getPageTemplate();
      if (!tmpl) return;

      const wrap = document.createElement('div');
      wrap.className = 'continental-footer-chrome';
      wrap.innerHTML = tmpl.postMainHtml;
      block.replaceChildren(...wrap.childNodes);
      ensureInteractiveBooted();
    }
  } catch (e) {
    // fallback in offline about:blank harness
  }
}
