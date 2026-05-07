/**
 * DashboardPage
 * Pure JavaScript (Vanilla JS)
 */
import { HeaderComponent } from '../../components/header/header-component.js';
import { FooterComponent } from '../../components/footer/footer-component.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const main = document.getElementById('main');
  const footer = document.getElementById('footer');

  header.appendChild(HeaderComponent());
  footer.appendChild(FooterComponent());
});
