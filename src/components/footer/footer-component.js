/**
 * Footer Component
 * Pure JavaScript (Vanilla JS)
 */
export function FooterComponent() {
  const footer = document.getElementById('footer');
  footer.className = 'footer-component';
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} Statistics App. All rights reserved.</p>
  `;
  return footer;
}
