/**
 * Header Component
 */
export function HeaderComponent() {
  const header = document.getElementById('header');
  header.className = 'header-component';
  header.innerHTML = `
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  `;
  return header;
}
