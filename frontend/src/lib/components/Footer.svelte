<footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>ServicePro</h3>
        <p>Gaseste rapid un profesionist calificat pentru nevoile tale mecanice si electrice.</p>
      </div>
      
      <div class="footer-section">
        <h3>Link-uri rapide</h3>
        <ul>
          <li><a href="/">Acasa</a></li>
          <li><a href="/services?type=mechanic">Mecanici</a></li>
          <li><a href="/services?type=electrician">Electricieni</a></li>
        </ul>
      </div>
      
      <div class="footer-section" id="contact">
        <h3>Contact</h3>
        <p>📱 0123 456 789</p>
        <p>✉️ contact@servicepro.com</p>
        <p>🏢 Strada Exemplu 123, Bucuresti</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 ServicePro. Toate drepturile rezervate.</p>
    </div>
  </footer>
  
  <style>
    footer {
      background-color: #2c3e50;
      color: white;
      padding: 3rem 2rem 1rem;
      margin-top: 4rem;
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .footer-section {
      flex: 1;
      margin-right: 2rem;
    }
    
    .footer-section:last-child {
      margin-right: 0;
    }
    
    h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    ul {
      list-style: none;
      padding: 0;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
    
    a {
      color: #ecf0f1;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      margin-top: 2rem;
      border-top: 1px solid #34495e;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
      }
      
      .footer-section {
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  </style>