class FloatingElements extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .floating-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
          z-index: 0;
          animation: float 15s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(50px, 50px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      </style>
      <div class="floating-element" style="width: 300px; height: 300px; background: #f26722; top: 20%; left: 10%; animation-delay: 0s;"></div>
      <div class="floating-element" style="width: 400px; height: 400px; background: #2a2a2a; top: 60%; left: 70%; animation-delay: 5s;"></div>
      <div class="floating-element" style="width: 200px; height: 200px; background: #1a1a1a; top: 30%; left: 80%; animation-delay: 10s;"></div>
    `;
  }
}

customElements.define('floating-elements', FloatingElements);