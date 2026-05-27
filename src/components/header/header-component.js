/**
 * Header Component
 */
export function HeaderComponent() {
  const header = document.createElement('header');
  header.className = 'header-component';
  header.innerHTML = `
    <nav class="header-nav container">
      <ul class="header-nav-list">
        <li><a href="/index.html" class="header-nav-link">Home</a></li>
        <li><a href="/src/page/dashboardPage/dashboardPage.html" class="header-nav-link">Dashboard</a></li>
      </ul>
    </nav>
  `;
  return header;
}
