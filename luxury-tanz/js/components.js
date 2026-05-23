/* ============================================
   LUXURY TANZ – Shared Components
   ============================================ */

function getBasePath() {
  // Returns correct relative path depending on whether we're in /pages/ subfolder
  const inPages = window.location.pathname.includes('/pages/');
  return inPages ? '../' : '';
}

function renderNav() {
  const base = getBasePath();
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <a href="${base}index.html" class="nav-logo">LUXURY <span>TANZ</span></a>
    <ul class="nav-links">
      <li><a href="${base}index.html">Home</a></li>
      <li><a href="${base}pages/products.html">Products</a></li>
      <li><a href="${base}pages/creams.html">Creams</a></li>
      <li><a href="${base}pages/drops.html">Drops</a></li>
      <li><a href="${base}pages/about.html">About</a></li>
      <li><a href="${base}pages/contact.html">Contact</a></li>
    </ul>
    <a href="${base}pages/products.html" class="nav-cta">Shop Now</a>
    <button class="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  // Mobile nav overlay
  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.innerHTML = `
    <a href="${base}index.html">Home</a>
    <a href="${base}pages/products.html">Products</a>
    <a href="${base}pages/creams.html">Creams</a>
    <a href="${base}pages/drops.html">Drops</a>
    <a href="${base}pages/about.html">About</a>
    <a href="${base}pages/contact.html">Contact</a>
    <a href="${base}pages/products.html" class="btn btn-primary mobile-nav-cta">Shop Now</a>
  `;
  document.body.insertBefore(mobileNav, nav.nextSibling);
}

function renderFooter() {
  const base = getBasePath();
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-top">
      <div>
        <a href="${base}index.html" class="footer-logo">LUXURY <span>TANZ</span></a>
        <p class="footer-brand-text">Premium beauty and tanning essentials crafted for confidence, glow, and everyday luxury. Your most radiant self starts here.</p>
        <div class="footer-socials">
          <a href="https://instagram.com/luxurytanz" target="_blank" rel="noopener" class="social-btn" title="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://tiktok.com/@luxurytanz" target="_blank" rel="noopener" class="social-btn" title="TikTok">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
          </a>
          <a href="mailto:hello@luxurytanz.com" class="social-btn" title="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Quick Links</div>
        <div class="footer-links">
          <a href="${base}index.html">Home</a>
          <a href="${base}pages/about.html">About Us</a>
          <a href="${base}pages/products.html">All Products</a>
          <a href="${base}pages/contact.html">Contact</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Products</div>
        <div class="footer-links">
          <a href="${base}pages/products.html">All Products</a>
          <a href="${base}pages/creams.html">Tanning Creams</a>
          <a href="${base}pages/drops.html">Glow Drops</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <div class="footer-links">
          <a href="https://instagram.com/luxurytanz" target="_blank" rel="noopener">@luxurytanz</a>
          <a href="mailto:hello@luxurytanz.com">hello@luxurytanz.com</a>
        </div>
        <br>
        <div class="footer-col-title">Follow Us</div>
        <div class="footer-links">
          <a href="https://instagram.com/luxurytanz" target="_blank" rel="noopener">Instagram</a>
          <a href="https://tiktok.com/@luxurytanz" target="_blank" rel="noopener">TikTok</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2024 Luxury Tanz. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Delivery Info</a>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// Auto-render on load
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
