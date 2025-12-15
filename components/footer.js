// Footer Component
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-primary text-white relative overflow-hidden">
                <!-- Background decoration -->
                <div class="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-48 -translate-x-48"></div>
                <div class="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 translate-x-32"></div>
                
                <div class="container mx-auto px-6 relative z-10">
                    <!-- Main Footer Content -->
                    <div class="py-16">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <!-- Company Info -->
                            <div class="lg:col-span-2">
                                <div class="flex items-center space-x-3 mb-6">
                                    <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                                        <svg class="w-8 h-8 text-primary" viewBox="0 0 100 100">
                                            <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" stroke="currentColor" stroke-width="8" fill="none"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold">Q9 TECHNOLOGIES</h3>
                                        <p class="text-secondary text-sm">Soluções Tecnológicas</p>
                                    </div>
                                </div>
                                <p class="text-white/80 mb-6 leading-relaxed max-w-md">
                                    Especialistas em desenvolvimento de websites, aplicativos mobile e soluções de IA para WhatsApp Business. 
                                    Transformamos ideias em realidade digital.
                                </p>
                                <div class="flex space-x-4">
                                    <a href="mailto:contato@q9tech.ao" class="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-full transition-all duration-300">
                                        <i data-feather="mail" class="w-5 h-5"></i>
                                    </a>
                                    <a href="#" class="bg-white/10 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-all duration-300">
                                        <i data-feather="linkedin" class="w-5 h-5"></i>
                                    </a>
                                    <a href="https://wa.me/244957590205" class="bg-white/10 hover:bg-green-500 hover:text-white p-3 rounded-full transition-all duration-300">
                                        <i data-feather="message-circle" class="w-5 h-5"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Quick Links -->
                            <div>
                                <h4 class="text-lg font-semibold mb-6 text-secondary">Links Rápidos</h4>
                                <ul class="space-y-3">
                                    <li><a href="#about" class="text-white/80 hover:text-secondary transition-colors">Sobre Nós</a></li>
                                    <li><a href="#services" class="text-white/80 hover:text-secondary transition-colors">Serviços</a></li>
                                    <li><a href="#projects" class="text-white/80 hover:text-secondary transition-colors">Projetos</a></li>
                                    <li><a href="#team" class="text-white/80 hover:text-secondary transition-colors">Nossa Equipa</a></li>
                                    <li><a href="#contact" class="text-white/80 hover:text-secondary transition-colors">Contacto</a></li>
                                    <li><a href="#" class="text-white/80 hover:text-secondary transition-colors">Carreiras</a></li>
                                </ul>
                            </div>
                            
                            <!-- Contact Info -->
                            <div>
                                <h4 class="text-lg font-semibold mb-6 text-secondary">Contacto</h4>
                                <div class="space-y-4">
                                    <div class="flex items-start space-x-3">
                                        <i data-feather="map-pin" class="w-5 h-5 text-secondary mt-1 flex-shrink-0"></i>
                                        <div>
                                            <p class="text-white/80 text-sm">Luanda, Angola</p>
                                            <p class="text-white/80 text-sm">Atendimento Online</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <i data-feather="phone" class="w-5 h-5 text-secondary flex-shrink-0"></i>
                                        <a href="tel:+244957590205" class="text-white/80 hover:text-secondary transition-colors text-sm">
                                            +244 957 590 205
                                        </a>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <i data-feather="mail" class="w-5 h-5 text-secondary flex-shrink-0"></i>
                                        <a href="mailto:contato@q9tech.ao" class="text-white/80 hover:text-secondary transition-colors text-sm">
                                            contato@q9tech.ao
                                        </a>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <i data-feather="clock" class="w-5 h-5 text-secondary flex-shrink-0"></i>
                                        <div class="text-white/80 text-sm">
                                            <p>Seg-Sex: 8:00-18:00</p>
                                            <p>Sáb: 9:00-14:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Newsletter Section -->
                    <div class="py-8 border-t border-white/20">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h4 class="text-xl font-semibold mb-2">Newsletter</h4>
                                <p class="text-white/80">Receba dicas de tecnologia e novidades sobre nossos serviços.</p>
                            </div>
                            <div>
                                <form class="flex flex-col sm:flex-row gap-3">
                                    <input 
                                        type="email" 
                                        placeholder="Seu email" 
                                        class="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                                    >
                                    <button 
                                        type="submit" 
                                        class="bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
                                    >
                                        Subscrever
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bottom Footer -->
                    <div class="py-6 border-t border-white/20">
                        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div class="text-white/60 text-sm">
                                © ${new Date().getFullYear()} Q9 Technologies Angola. Todos os direitos reservados.
                            </div>
                            <div class="flex space-x-6 text-sm">
                                <a href="#" class="text-white/60 hover:text-secondary transition-colors">Política de Privacidade</a>
                                <a href="#" class="text-white/60 hover:text-secondary transition-colors">Termos de Uso</a>
                                <a href="#" class="text-white/60 hover:text-secondary transition-colors">Cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
        
        this.initializeFooter();
    }
    
    initializeFooter() {
        // Newsletter form handling
        const newsletterForm = this.querySelector('form');
        newsletterForm?.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulate newsletter subscription
                alert('Obrigado por se subscrever! Receberá nossas atualizações em breve.');
                this.reset();
            }
        });
        
        // Smooth scroll for footer links
        const footerLinks = this.querySelectorAll('a[href^="#"]');
        footerLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

customElements.define('custom-footer', CustomFooter);