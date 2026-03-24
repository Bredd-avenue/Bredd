class topHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    section.header {
      padding: 15px 5px;
      background-color: #FFF;
      backdrop-filter: blur(2px);
      width: 100%;
      position: fixed;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid black;
    }
    section.header h3 {
      vertical-align: center;
    }
    nav {
      display: none;
      background-color: #FFF;
      position: absolute;
      right: 0;
      height: 100vh;
      width: 65%;
      border-top-left-radius: 10px;
      top: 0;
      transition: .5s display;
    }
    ul {
      margin-top: 20px;
      padding: 0;
      width: 100%;
    }
    li {
      list-style-type: none;
      display: inline-block;
      width: 100%;
      display: inline-block;
      margin: 0;
      padding: 10px;
    }
    li a {
      text-decoration: none;
      color: #5F6368;
      font-weight: bolder;
      padding: 10px;
      display: inline-block;
      width: 100%;
      font-family: Poppins;
      border-radius: 6px;
    }
    nav ul li a.login {
      color: #FFF;
      background-color: #0063BD;
    }
    nav.active {
      display: block;
    }
    .menu-icon {
     display: block;
     position: relative;
     z-index: 3;
     font-size: 32px;
     padding: 1px 6px;
    }
  </style>
  
<section class="header">
 
    <h3><span class="material-symbols-rounded icon">school</span>EduGrade</h3>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Admission</a></li>
      <li><a href="#" class="login">Login</a></li>
    </ul>
  </nav>
  <span class="material-symbols-rounded menu-icon" >menu</span>
</section>
    `;
    const navLinks = document.querySelector("nav");
    const menu = document.querySelector(".menu-icon");
    menu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menu.textContent = navLinks.classList.contains('active') ? 'close' : 'menu';
      })
  }
  
}

customElements.define('main-header', topHeader)

class SchoolFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .main-footer {
          background: #FFF;
          color: #5F6368;
          padding: 40px 20px;
          font-family: Poppins;
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
          color: #081226;
          margin-bottom: 15px;
          font-size: 1.2rem;
          vertical-align: center;
        }
        .footer-section p, .footer-section a {
          color: #5F6368;
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
            <h3><span class="material-symbols-rounded">school</span>Education</h3>
            <p>Leading the way in digital school management and result tracking for a transparent and effective educational experience.</p>
            <div><span class="material-symbols-rounded" style="color: inherit; padding: 8px; border-radius: 5px; background-color: #E8F0FE;">share</span> <span class="material-symbols-rounded">at</span>
            </div>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <a href="admission.html">Admissions</a><br>
            <a href="about.html">About institution</a><br>
            <a href="contact.html">Contact Us</a>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <p><span class="material-symbols-rounded">email</span>Email: info@school.edu</p>
            <p>Phone: +234 800 000 0000</p>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 Bredd-Avenue Management System. Built with ❤️ powered by Bredd.
        </div>
      </footer>
    `;
  }
}

customElements.define('main-footer', SchoolFooter);