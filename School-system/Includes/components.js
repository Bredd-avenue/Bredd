class topHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
      header { background: grey;}
    </style>
    
    <header>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Admission</a>
    </header>
    `;
  }
}

customElements.define('main-header', topHeader)

class SchoolFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .main-footer {
          background: #202124;
          color: #ffffff;
          padding: 40px 20px;
          font-family: sans-serif;
          margin-top: 50px;
        }
        .footer-content {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }
        .footer-section h3 {
          color: #4285f4;
          margin-bottom: 15px;
          font-size: 1.2rem;
        }
        .footer-section p, .footer-section a {
          color: #bdc1c6;
          text-decoration: none;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          border-top: 1px solid #3c4043;
          padding-top: 20px;
          font-size: 0.8rem;
        }
      </style>

      <footer class="main-footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>About Our School</h3>
            <p>Providing quality education and digital excellence since 2024.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <a href="admission.html">Admissions</a><br>
            <a href="portal.html">Student Portal</a><br>
            <a href="contact.html">Contact Us</a>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: info@school.edu</p>
            <p>Phone: +234 800 000 0000</p>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 Modern School Web App. Built with ❤️ for the Project.
        </div>
      </footer>
    `;
  }
}

customElements.define('main-footer', SchoolFooter);