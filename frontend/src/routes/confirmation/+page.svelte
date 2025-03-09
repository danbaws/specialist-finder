<script>
    import { goto } from "$app/navigation";
  </script>
  
  <div class="confirmation-container">
    <div class="confirmation-card">
      <div class="success-icon">✓</div>
      <h1>Rezervare confirmată!</h1>
      <p>Am primit cererea ta de rezervare. Un profesionist te va contacta în curând pentru a confirma întâlnirea.</p>
      
      <div class="next-steps">
        <h2>Pașii următori</h2>
        <ol>
          <li>Vei primi un SMS de confirmare în următoarele minute</li>
          <li>Profesionistul te va contacta pentru a discuta detaliile</li>
          <li>Problema ta va fi rezolvată la data stabilită</li>
        </ol>
      </div>
      
      <button class="home-button" on:click={() => goto("/")}>Înapoi la pagina principală</button>
    </div>
  </div>
  
  <style>
    .confirmation-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
    }
    
    .confirmation-card {
      background-color: white;
      padding: 3rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 600px;
    }
    
    .success-icon {
      width: 80px;
      height: 80px;
      background-color: #2ecc71;
      color: white;
      font-size: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin: 0 auto 2rem;
    }
    
    h1 {
      margin-bottom: 1rem;
      color: #333;
    }
    
    .next-steps {
      text-align: left;
      margin: 2rem 0;
      background-color: #f9f9f9;
      padding: 1.5rem;
      border-radius: 8px;
    }
    
    ol {
      margin-left: 1.5rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
    
    .home-button {
      background-color: #4a6fa5;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      margin-top: 1rem;
    }
  </style>