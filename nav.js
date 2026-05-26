function renderNav(activePage) {
  const pages = [
    { label: 'Research Areas', href: 'research_areas.html' },
    { label: 'People', href: 'people.html' },
    { label: 'Publications', href: 'publications.html' },
    { label: 'Projects', href: 'projects.html' },
    { label: 'Academic Programs', href: 'academic_programs.html' },
    { label: 'Events', href: 'events.html' },
    { label: 'News', href: 'news.html' },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="nav">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-mark"><span>TI</span></div>
        <div>
          <div class="nav-title">KBK Teknologi Informasi</div>
          <div class="nav-sub">Universitas Gadjah Mada</div>
        </div>
      </a>
      <div class="nav-links">
        ${links}
        <a href="contact.html" class="nav-cta" style="background:#185FA5;color:#fff;border-radius:6px;padding:7px 16px;font-weight:700;">Contact</a>
      </div>
    </nav>`;
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-left">© 2025 KBK Teknologi Informasi · Universitas Gadjah Mada</div>
          <div class="footer-links">
            <a href="#">SINTA</a>
            <a href="#">Scopus</a>
            <a href="academic_programs.html">Academic Programs</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </div>
    </footer>`;
}