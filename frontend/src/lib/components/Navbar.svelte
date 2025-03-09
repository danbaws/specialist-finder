<script>
    import { page } from "$app/stores";
  </script>
  
  <nav>
    <div class="logo">
      <a href="/">ServicePro</a>
    </div>
    <div class="nav-links">
      <a href="/" class:active={$page.url.pathname === "/"}>Acasa</a>
      <a href="#cum-functioneaza">Cum functioneaza</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="phone-contact">
      <span class="phone-icon">📱</span>
      <span class="phone-number">0123 456 789</span>
    </div>
  </nav>
  
  <style>
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .logo a {
      font-size: 1.5rem;
      font-weight: bold;
      color: #4a6fa5;
      text-decoration: none;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    
    .nav-links a {
      color: #333;
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .nav-links a:hover, .nav-links a.active {
      color: #4a6fa5;
    }
    
    .phone-contact {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .phone-number {
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }
      
      .nav-links {
        width: 100%;
        justify-content: center;
      }
    }
  </style>