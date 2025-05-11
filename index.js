<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zypra - Bot Discord pour OneBlock Hyping</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #58e2a4;
            --secondary: #212529;
            --accent: #58e2a4;
            --text: #ffffff;
            --dark: #151819;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        
        body {
            background-color: var(--secondary);
            color: var(--text);
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Navbar */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            position: relative;
            z-index: 1000;
        }
        
        .logo {
            display: flex;
            align-items: center;
        }
        
        .logo img {
            height: 40px;
            margin-right: 10px;
        }
        
        .nav-links {
            display: flex;
            gap: 30px;
        }
        
        .nav-links a {
            color: var(--text);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--primary);
        }
        
        .auth-buttons {
            display: flex;
            gap: 15px;
        }
        
        .btn {
            padding: 10px 20px;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .btn-primary {
            background-color: var(--primary);
            color: var(--dark);
            border: none;
        }
        
        .btn-primary:hover {
            background-color: #46c58e;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(88, 226, 164, 0.3);
        }
        
        .btn-outline {
            background-color: transparent;
            color: var(--text);
            border: 2px solid var(--primary);
        }
        
        .btn-outline:hover {
            background-color: var(--primary);
            color: var(--dark);
            transform: translateY(-2px);
        }
        
        .mobile-menu {
            display: none;
            font-size: 24px;
            cursor: pointer;
        }
        
        /* Hero Section */
        .hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: calc(100vh - 80px);
            position: relative;
            overflow: hidden;
        }
        
        .hero-content {
            max-width: 600px;
            position: relative;
            z-index: 10;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
        }
        
        .hero p {
            font-size: 1.1rem;
            margin-bottom: 30px;
            line-height: 1.6;
            color: #cccccc;
        }
        
        .hero-img {
            position: relative;
            z-index: 10;
        }
        
        .hero-img img {
            max-width: 100%;
            height: auto;
            animation: float 3s ease-in-out infinite;
        }
        
        .glow {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: rgba(88, 226, 164, 0.2);
            filter: blur(80px);
            z-index: 1;
        }
        
        .glow-1 {
            top: 10%;
            right: 15%;
        }
        
        .glow-2 {
            bottom: 10%;
            left: 10%;
        }
        
        /* Features Section */
        .features {
            padding: 100px 0;
            position: relative;
            background-color: var(--dark);
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            position: relative;
            display: inline-block;
        }
        
        .section-title h2::after {
            content: '';
            position: absolute;
            width: 60%;
            height: 4px;
            background-color: var(--primary);
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }
        
        .feature-card {
            background-color: var(--secondary);
            border-radius: 15px;
            padding: 30px;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
            overflow: hidden;
            z-index: 10;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background-color: var(--primary);
            transition: width 0.3s;
        }
        
        .feature-card:hover::before {
            width: 100%;
            opacity: 0.1;
            z-index: -1;
        }
        
        .feature-icon {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
        }
        
        .feature-card p {
            color: #cccccc;
            line-height: 1.6;
        }
        
        /* CTA Section */
        .cta {
            padding: 80px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .cta-content {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }
        
        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        
        .cta p {
            font-size: 1.1rem;
            margin-bottom: 30px;
            color: #cccccc;
        }
        
        .buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            padding: 50px 0 20px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-logo img {
            height: 40px;
            margin-bottom: 15px;
        }
        
        .footer-logo p {
            color: #cccccc;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
        }
        
        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #2c3035;
            color: var(--text);
            transition: all 0.3s;
        }
        
        .social-links a:hover {
            background-color: var(--primary);
            color: var(--dark);
            transform: translateY(-5px);
        }
        
        .footer-links h4 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }
        
        .footer-links h4::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 3px;
            background-color: var(--primary);
            bottom: 0;
            left: 0;
        }
        
        .footer-links ul {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 10px;
        }
        
        .footer-links a {
            color: #cccccc;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: var(--primary);
        }
        
        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #2c3035;
            color: #cccccc;
        }
        
        /* Animations */
        @keyframes float {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-15px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        
        /* Modal styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }
        
        .modal-content {
            background-color: var(--secondary);
            border-radius: 15px;
            max-width: 400px;
            width: 100%;
            padding: 30px;
            position: relative;
            animation: modalFade 0.3s;
        }
        
        .close-modal {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 1.5rem;
            color: #cccccc;
            cursor: pointer;
            transition: color 0.3s;
        }
        
        .close-modal:hover {
            color: var(--primary);
        }
        
        @keyframes modalFade {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
            .hero {
                flex-direction: column;
                text-align: center;
                padding: 50px 0;
            }
            
            .hero-content {
                margin-bottom: 50px;
            }
            
            .hero h1 {
                font-size: 2.8rem;
            }
            
            .hero-img {
                max-width: 80%;
                margin: 0 auto;
            }
        }
        
        @media (max-width: 768px) {
            .nav-links, .auth-buttons {
                display: none;
            }
            
            .mobile-menu {
                display: block;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .section-title h2 {
                font-size: 2rem;
            }
        }
        
        /* Mobile Menu Styles */
        .mobile-nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: var(--dark);
            z-index: 2000;
            padding: 80px 30px 30px;
            transition: right 0.3s;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
        }
        
        .mobile-nav.active {
            right: 0;
        }
        
        .close-menu {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 24px;
            color: var(--text);
            cursor: pointer;
        }
        
        .mobile-links {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .mobile-links a {
            color: var(--text);
            text-decoration: none;
            font-size: 1.2rem;
            transition: color 0.3s;
        }
        
        .mobile-links a:hover {
            color: var(--primary);
        }
        
        .mobile-auth {
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1500;
            display: none;
        }
        
        /* Loading spinner */
        .loader {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary);
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Loading Spinner -->
    <div class="loader" id="loader">
        <div class="spinner"></div>
    </div>

    <!-- Mobile Navigation -->
    <div class="overlay" id="overlay"></div>
    <div class="mobile-nav" id="mobileNav">
        <div class="close-menu" id="closeMenu">
            <i class="fas fa-times"></i>
        </div>
        <div class="mobile-links">
            <a href="#features">Fonctionnalités</a>
            <a href="#cta">Commencer</a>
            <a href="#">Documentation</a>
        </div>
        <div class="mobile-auth">
            <a href="#" class="btn btn-primary" id="mobileLoginBtn">
                <i class="fab fa-discord"></i> Connexion
            </a>
            <a href="https://discord.com/oauth2/authorize?client_id=1371038242304032899" target="_blank" class="btn btn-outline">
                <i class="fas fa-plus-circle"></i> Ajouter à Discord
            </a>
        </div>
    </div>

    <!-- Navbar -->
    <div class="container">
        <nav class="navbar">
            <div class="logo">
                <img src="https://res.cloudinary.com/dor9octmp/image/upload/v1746951211/Z_texte_sans_fond_fiw03s.png" alt="Zypra Logo">
            </div>
            <div class="nav-links">
                <a href="#features">Fonctionnalités</a>
                <a href="#cta">Commencer</a>
                <a href="#">Documentation</a>
            </div>
            <div class="auth-buttons">
                <a href="#" class="btn btn-outline" id="loginBtn">
                    <i class="fab fa-discord"></i> Connexion
                </a>
                <a href="https://discord.com/oauth2/authorize?client_id=1371038242304032899" target="_blank" class="btn btn-primary">
                    <i class="fas fa-plus-circle"></i> Ajouter à Discord
                </a>
            </div>
            <div class="mobile-menu" id="mobileMenu">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </div>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Simplifiez la gestion de votre <span style="color: var(--primary);">OneBlock</span> sur Discord</h1>
                <p>Zypra est un bot Discord conçu pour les OB du serveur Minecraft OneBlock Hyping. Configurez rapidement vos salons, gérez les autorisations et intégrez un système de vérification de pseudo Minecraft inter-serveur.</p>
                <div class="buttons">
                    <a href="#" class="btn btn-primary" id="heroLoginBtn">
                        <i class="fab fa-discord"></i> Se connecter avec Discord
                    </a>
                    <a href="#features" class="btn btn-outline">
                        <i class="fas fa-info-circle"></i> En savoir plus
                    </a>
                </div>
            </div>
            <div class="hero-img">
                <img src="https://res.cloudinary.com/dor9octmp/image/upload/v1746951212/Logo_Zypra_vay3id.png" alt="Zypra Bot">
            </div>
        </div>
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <div class="section-title">
                <h2>Fonctionnalités</h2>
                <p>Découvrez ce que Zypra peut faire pour votre serveur OneBlock</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3>Configuration Rapide</h3>
                    <p>Configurez automatiquement des salons texte, image et commandes sans passer des heures dans les paramètres Discord.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-user-check"></i>
                    </div>
                    <h3>Vérification Minecraft</h3>
                    <p>Système de comptes vérifiés par pseudo Minecraft fonctionnant sur tous les serveurs où Zypra est présent.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Gestion des OB</h3>
                    <p>Outils spécialement conçus pour les OneBlock Hyping, permettant de gérer jusqu'à 9 joueurs par île.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-sliders-h"></i>
                    </div>
                    <h3>Entièrement Personnalisable</h3>
                    <p>Activez ou désactivez les fonctionnalités selon vos besoins grâce à un tableau de bord intuitif.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h3>Performance Optimisée</h3>
                    <p>Bot léger et rapide qui ne ralentira pas votre serveur Discord même avec de nombreuses fonctionnalités actives.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Mises à jour régulières</h3>
                    <p>Nouvelles fonctionnalités et améliorations ajoutées régulièrement pour répondre aux besoins de la communauté.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta" id="cta">
        <div class="container">
            <div class="cta-content">
                <h2>Prêt à améliorer votre serveur OneBlock ?</h2>
                <p>Ajoutez Zypra à votre serveur Discord dès maintenant et profitez de toutes ses fonctionnalités.</p>
                <div class="buttons">
                    <a href="https://discord.com/oauth2/authorize?client_id=1371038242304032899" target="_blank" class="btn btn-primary">
                        <i class="fas fa-plus-circle"></i> Ajouter à Discord
                    </a>
                    <a href="#" class="btn btn-outline" id="ctaLoginBtn">
                        <i class="fab fa-discord"></i> Se connecter au Dashboard
                    </a>
                </div>
            </div>
        </div>
        <div class="glow glow-1"></div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="https://res.cloudinary.com/dor9octmp/image/upload/v1746951211/Z_texte_sans_fond_fiw03s.png" alt="Zypra Logo">
                    <p>Le bot Discord parfait pour gérer votre OB sur le serveur Minecraft OneBlock Hyping.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-discord"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4>Liens rapides</h4>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#features">Fonctionnalités</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Ressources</h4>
                    <ul>
                        <li><a href="#">Guide de démarrage</a></li>
                        <li><a href="#">Commandes</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Statut du bot</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Légal</h4>
                    <ul>
                        <li><a href="#">Conditions d'utilisation</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">DMCA</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Zypra Bot. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <!-- Discord Auth Script -->
    <script>
        // Configuration de l'authentification Discord
        const CLIENT_ID = '1371038242304032899';
        const REDIRECT_URI = window.location.origin + '/dashboard.html'; // Redirection vers le dashboard
        const SCOPE = 'identify guilds';
        
        // Fonction pour générer une chaîne aléatoire pour le state OAuth2
        function generateRandomString() {
            const array = new Uint32Array(28);
            window.crypto.getRandomValues(array);
            return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
        }
        
        // Fonction pour démarrer le processus d'authentification Discord
        function startAuth() {
            // Afficher le spinner de chargement
            document.getElementById('loader').style.display = 'flex';
            
            // Générer un state aléatoire et le stocker dans localStorage
            const state = generateRandomString();
            localStorage.setItem('discord_oauth_state', state);
            
            // Construire l'URL d'authentification Discord
            const authUrl = `https://discord.com/api/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&state=${state}&scope=${SCOPE}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&prompt=consent`;
            
            // Rediriger vers l'URL d'authentification Discord
            window.location.href = authUrl;
        }
        
        // Vérifier si nous revenons d'une authentification Discord (fragment d'URL)
        function checkAuth() {
            const fragment = new URLSearchParams(window.location.hash.slice(1));
            const [accessToken, tokenType, state] = [
                fragment.get('access_token'),
                fragment.get('token_type'),
                fragment.get('state')
            ];
            
            // Vérifier si nous avons un token et si l'état correspond
            if (accessToken) {
                const storedState = localStorage.getItem('discord_oauth_state');
                
                if (state !== storedState) {
                    // Si l'état ne correspond pas, afficher une erreur
                    alert('Erreur: L\'état ne correspond pas. Veuillez réessayer.');
                    return;
                }
                
                // Stocker le token d'accès pour une utilisation ultérieure
                localStorage.setItem('discord_access_token', accessToken);
                localStorage.setItem('discord_token_type', tokenType);
                
                // Nettoyer l'URL
                history.replaceState(null, null, ' ');
                
                // Rediriger vers le dashboard
                window.location.href = REDIRECT_URI;
            }
        }
        
        // Ajouter des écouteurs d'événements aux boutons de connexion
        document.addEventListener('DOMContentLoaded', function() {
            // Vérifier l'authentification au chargement de la page
            checkAuth();
            
            // Ajouter des écouteurs d'événements à tous les boutons de connexion
            const loginButtons = [
                document.getElementById('loginBtn'),
                document.getElementById('mobileLoginBtn'),
                document.getElementById('heroLoginBtn'),
                document.getElementById('ctaLoginBtn')
            ];
            
            loginButtons.forEach(button => {
                if (button) {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        startAuth();
                    });
                }
            });
            
            // Menu mobile
            const mobileMenu = document.getElementById('mobileMenu');
            const closeMenu = document.getElementById('closeMenu');
            const mobileNav = document.getElementById('mobileNav');
            const overlay = document.getElementById('overlay');
            
            mobileMenu.addEventListener('click', function() {
                mobileNav.classList.add('active');
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
            
            closeMenu.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                overlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            overlay.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                overlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
    </script>
</body>
</html>
