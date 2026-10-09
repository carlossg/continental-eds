/**
 * hero — Continental replica module block
 * Schema: stardust/rollout/coverage/blocks.json (hero)
 * @ew-exempt all — template-slotted replica section with EW node-slotting
 * @param {Element} block The block element
 */
export default async function decorate(block) {
  try {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      const { renderContinentalSection } = await import('../../scripts/page-templates.js');
      renderContinentalSection(block);
      return;
    }
  } catch (e) {
    // Offline about:blank harness: preserve all authored [data-prose-index] and [data-image-index] nodes in place
  }
  block.dataset.continentalDecorated = 'true';
}
