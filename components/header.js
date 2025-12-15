// Header Component
class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="main-header">
                <nav class="container mx-auto px-6 py-4">
                    <div class="flex items-center justify-between">
                        <!-- Logo -->
                        <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                                <svg class="w-8 h-8 text-primary" viewBox="0 0 100 100">
                                    <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" stroke="currentColor" stroke-width="8" fill="none"/>
                                </svg>
                            </div>
                            <div>
                                <h1 class="text-xl font-bold text-white">CIVETCH ANGOLA</h1>
                            </div>
                        </div>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden lg:flex items-center space-x-8">
                            <a href="#about" class="text-white/90 hover:text-secondary transition-colors font-medium">Sobre</a>
                            <a href="#services" class="text-white/90 hover:text-secondary transition-colors font-medium">Serviços</a>
                            <a href="#projects" class="text-white/90 hover:text-secondary transition-colors font-medium">Projetos</a>
                            <a href="#team" class="text-white/90 hover:text-secondary transition-colors font-medium">Equipa</a>
                            <a href="#contact" class="bg-secondary hover:bg-secondary/90 text-primary px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                                Contacto
                            </a>
                        </div>
                        
                        <!-- Mobile Menu Button -->
                        <button class="lg:hidden text-white p-2" id="mobile-menu-btn">
                            <i data-feather="menu" class="w-6 h-6"></i>
                        </button>
                    </div>
                    
                    <!-- Mobile Navigation -->
                    <div class="lg:hidden mt-4 pb-4 border-t border-white/20 hidden" id="mobile-menu">
                        <div class="flex flex-col space-y-4 mt-4">
                            <a href="#about" class="text-white/90 hover:text-secondary transition-colors font-medium">Sobre</a>
                            <a href="#services" class="text-white/90 hover:text-secondary transition-colors font-medium">Serviços</a>
                            <a href="#projects" class="text-white/90 hover:text-secondary transition-colors font-medium">Projetos</a>
                            <a href="#team" class="text-white/90 hover:text-secondary transition-colors font-medium">Equipa</a>
                            <a href="#contact" class="bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center">
                                Contacto
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        `;
        
        this.initializeHeader();
    }
    
    initializeHeader() {
        const header = document.getElementById('main-header');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Mobile menu toggle
        mobileMenuBtn?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('data-feather', 'menu');
            } else {
                icon.setAttribute('data-feather', 'x');
            }
            feather.replace();
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-primary/95', 'backdrop-blur-md', 'shadow-lg');
            } else {
                header.classList.remove('bg-primary/95', 'backdrop-blur-md', 'shadow-lg');
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu?.querySelectorAll('a');
        mobileLinks?.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });
    }
}

customElements.define('custom-header', CustomHeader);