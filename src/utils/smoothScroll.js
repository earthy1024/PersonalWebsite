/**
 * Smooth scroll utility for navigating to page sections.
 * Relies on CSS `scroll-padding-top: var(--navbar-height)` set on the
 * html element in global.css to account for the sticky navbar offset.
 */

/**
 * Scrolls the viewport smoothly to the element with the given section ID.
 * If the element does not exist, the function does nothing.
 *
 * @param {string} sectionId - The ID of the target section element.
 */
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }
  element.scrollIntoView({ behavior: 'smooth' });
}
