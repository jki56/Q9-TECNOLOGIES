class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                
                .header-scrolled {
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .nav-link {
                    position: relative;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #f26722;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-out;
                }
                
                .mobile-menu.open {
                    max-height: 500px;
                }
                
                @media (min-width: 1024px) {
                    .mobile-menu {
                        max-height: none !important;
                    }
                }
            </style>
            <header class="header-scrolled">
                <div class="container mx-auto px-6 py-4">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex items-center glow-effect">
                            <div class="w-10 h-10 bg-novatec-orange rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 transform transition-transform duration-300 hover:rotate-12">
                                <span class="animate-pulse">N</span>
                            </div>
                            <span class="text-xl font-bold text-novatec-graphite bg-clip-text text-transparent bg-gradient-to-r from-novatec-orange to-novatec-dark">
                                Novatec
                            </span>
                        </a>
<div class="hidden lg:flex items-center space-x-8">
                            <a href="#" class="nav-link text-novatec-graphite font-medium">Home</a>
                            <a href="#about" class="nav-link text-novatec-graphite font-medium">Sobre</a>
                            <a href="#services" class="nav-link text-novatec-graphite font-medium">Serviços</a>
                            <a href="#portfolio" class="nav-link text-novatec-graphite font-medium">Portfólio</a>
                            <a href="#contact" class="nav-link text-novatec-graphite font-medium">Contato</a>
                            <a href="#contact" class="btn-primary px-6 py-2">Orçamento</a>
                        </div>
                        
                        <button class="lg:hidden focus:outline-none" id="mobile-menu-button">
                            <i data-feather="menu" class="w-6 h-6 text-novatec-graphite"></i>
                        </button>
                    </div>
                    
                    <div class="mobile-menu lg:hidden" id="mobile-menu">
                        <div class="pt-4 pb-2 space-y-3">
                            <a href="#" class="block py-2 text-novatec-graphite font-medium">Home</a>
                            <a href="#about" class="block py-2 text-novatec-graphite font-medium">Sobre</a>
                            <a href="#services" class="block py-2 text-novatec-graphite font-medium">Serviços</a>
                            <a href="#portfolio" class="block py-2 text-novatec-graphite font-medium">Portfólio</a>
                            <a href="#contact" class="block py-2 text-novatec-graphite font-medium">Contato</a>
                            <a href="#contact" class="btn-primary block w-full text-center py-3 mt-3">Orçamento</a>
                        </div>
                    </div>
                </div>
            </header>
            <script>
                feather.replace();
                
                document.addEventListener('DOMContentLoaded', function() {
                    const header = document.querySelector('.header-scrolled');
                    const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
                    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
                    
                    // Scroll effect
                    window.addEventListener('scroll', function() {
                        if (window.scrollY > 50) {
                            header.classList.add('bg-white', 'shadow-md');
                            header.classList.remove('bg-transparent');
                        } else {
                            header.classList.remove('bg-white', 'shadow-md');
                            header.classList.add('bg-transparent');
                        }
                    });
                    
                    // Mobile menu toggle
                    mobileMenuButton.addEventListener('click', function() {
                        mobileMenu.classList.toggle('open');
                        const icon = mobileMenuButton.querySelector('i');
                        if (mobileMenu.classList.contains('open')) {
                            feather.icons['x'].replace(icon);
                        } else {
                            feather.icons['menu'].replace(icon);
                        }
                    });
                });
            </script>
        `;
    }
}

customElements.define('custom-header', CustomHeader);