class AnimatedNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(11, 35, 64, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          font-family: 'Poppins', sans-serif;
          letter-spacing: -1px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .logo::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #D9A84B;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        
        .logo:hover {
          color: #D9A84B;
        }
        
        .logo:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        nav ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        nav li {
          position: relative;
          overflow: hidden;
        }
        
        nav a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          position: relative;
          display: block;
        }
        
        nav a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #D9A84B;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        
        nav a:hover {
          color: #D9A84B;
        }
        
        nav a:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .active {
          color: #D9A84B;
        }
        
        .active::before {
          transform: scaleX(1) !important;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          nav ul {
            display: none;
          }
        }
      </style>
      
      <header class="container">
        <a href="/" class="logo">Q9 TECHNOLOGIES</a>
        <nav>
          <ul>
            <li><a href="/" class="active">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('animated-navbar', AnimatedNavbar);