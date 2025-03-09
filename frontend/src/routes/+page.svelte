<script>
    import { goto } from "$app/navigation";
    
    const serviceTypes = [
      { 
        id: "mechanic", 
        title: "Mecanic", 
        icon: "🔧", 
        description: "Reparatii si intretinere auto" 
      },
      { 
        id: "electrician", 
        title: "Electrician", 
        icon: "⚡", 
        description: "Instalatii si reparatii electrice" 
      }
    ];
    
    /**
     * @param {string} serviceType
     */
    function selectService(serviceType) {
      goto(`/services?type=${serviceType}`);
    }
  </script>
  
  <div class="home-container">
    <h1>Ai nevoie de un profesionist rapid?</h1>
    <p class="subtitle">Gaseste usor un mecanic sau electrician calificat in zona ta</p>
    
    <div class="service-selection">
      {#each serviceTypes as service}
        <button class="service-card" on:click={() => selectService(service.id)}>
          <div class="service-icon">{service.icon}</div>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </button>
      {/each}
    </div>
    
    <div class="how-it-works" id="cum-functioneaza">
      <h2>Cum functioneaza?</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <p>Alege tipul de serviciu de care ai nevoie</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <p>Descrie problema ta si alege o data</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <p>Un profesionist te va contacta rapid</p>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .home-container {
      text-align: center;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 3rem;
    }
    
    .service-selection {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin: 3rem 0;
    }
    
    .service-card {
      background-color: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      width: 230px;
    }
    
    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    
    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .how-it-works {
      margin-top: 4rem;
    }
    
    .steps {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .step {
      max-width: 200px;
    }
    
    .step-number {
      background-color: #005ae0;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-weight: bold;
    }
  </style>