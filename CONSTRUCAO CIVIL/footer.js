class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    background-color: #1a1a1a;
                    color: white;
                }
                
                .footer-link {
                    transition: all 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #f26722;
                    transform: translateX(4px);
                }
                
                .social-icon {
                    transition: all 0.3s ease;
                }
                
                .social-icon:hover {
                    color: #f26722;
                    transform: translateY(-3px);
                }
            </style>
            <footer class="py-16">
                <div class="container mx-auto px-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <div class="flex items-center mb-6">
                                <div class="w-10 h-10 bg-novatec-orange rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                                    N
                                </div>
                                <span class="text-xl font-bold text-white">Novatec</span>
                            </div>
                            <p class="text-gray-400 mb-6">
                                Transformando ideias em soluções digitais inovadoras para impulsionar seu negócio.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon text-gray-400 hover:text-novatec-orange">
                                    <i data-feather="facebook"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-novatec-orange">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-novatec-orange">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-novatec-orange">
                                    <i data-feather="linkedin"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-bold text-white mb-6">Links Rápidos</h3>
                            <ul class="space-y-3">
                                <li><a href="#" class="footer-link text-gray-400">Home</a></li>
                                <li><a href="#about" class="footer-link text-gray-400">Sobre Nós</a></li>
                                <li><a href="#services" class="footer-link text-gray-400">Serviços</a></li>
                                <li><a href="#portfolio" class="footer-link text-gray-400">Portfólio</a></li>
                                <li><a href="#contact" class="footer-link text-gray-400">Contato</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-bold text-white mb-6">Serviços</h3>
                            <ul class="space-y-3">
                                <li><a href="#" class="footer-link text-gray-400">Aplicativos Mobile</a></li>
                                <li><a href="#" class="footer-link text-gray-400">Desenvolvimento Web</a></li>
                                <li><a href="#" class="footer-link text-gray-400">UI/UX Design</a></li>
                                <li><a href="#" class="footer-link text-gray-400">Marketing Digital</a></li>
                                <li><a href="#" class="footer-link text-gray-400">Consultoria TI</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-bold text-white mb-6">Contactos</h3>
                            <ul class="space-y-3 text-gray-400">
                                <li class="flex items-start">
                                    <i data-feather="map-pin" class="w-5 h-5 mr-3 mt-1 text-novatec-orange"></i>
                                    <span>Luanda, Angola</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="mail" class="w-5 h-5 mr-3 mt-1 text-novatec-orange"></i>
                                    <span>info@novatec.ao</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="phone" class="w-5 h-5 mr-3 mt-1 text-novatec-orange"></i>
                                    <span>+244 123 456 789</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-800 mt-12 pt-8">
                        <div class="flex flex-col md:flex-row justify-between items-center">
                            <p class="text-gray-400