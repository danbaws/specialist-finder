<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let services: { id: number; name: string; price: string; image: string }[] = [];
    let loading = true;
    let error: string | null = null;
    let selectedType = "";
    
    onMount(async () => {
      selectedType = $page.url.searchParams.get("type") || "mechanic";
      
      try {
        if (selectedType === "mechanic") {
          services = [
            { id: 1, name: "Reparatie motor", price: "De la 750 lei", image: "/images/engine.jpg" },
            { id: 2, name: "Schimbare anvelope", price: "De la 400 lei", image: "/images/tires.jpg" },
            { id: 3, name: "Diagnostic complet", price: "De la 300 lei", image: "xxx" },
            { id: 4, name: "Revizie", price: "De la 600 lei", image: "xxx" }
          ];
        } else {
          services = [
            { id: 5, name: "Instalatii electrice", price: "De la 600 lei", image: "xxx" },
            { id: 6, name: "Reparatii urgente", price: "De la 500 lei", image: "xxx" },
            { id: 7, name: "Aducere la standarde", price: "De la 1000 lei", image: "xxx" },
            { id: 8, name: "Diagnostic tablou electric", price: "De la 400 lei", image: "xxx" }
          ];
        }
        loading = false;
      } catch (err) {
        error = "Eroare la incarcarea serviciilor";
        loading = false;
      }
    });
    
    function selectService(serviceId: number) {
      goto(`/booking/${selectedType}?service=${serviceId}`);
    }
  </script>
  
  <div class="services-container">
    <h1>Alege serviciul tau {selectedType === "mechanic" ? "mecanic" : "electric"}</h1>
    
    {#if loading}
      <div class="loading">Se încarca serviciile...</div>
    {:else if error}
      <div class="error">{error}</div>
    {:else}
      <div class="services-grid">
        {#each services as service}
          <button type="button" class="service-item" on:click={() => selectService(service.id)} aria-label={`Select ${service.name}`}>
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p class="price">{service.price}</p>
          </button>
        {/each}
      </div>
    {/if}
    
    <button class="back-button" on:click={() => goto("/")}>Înapoi</button>
  </div>
  
  <style>
    .services-container {
      padding: 20px;
    }
    
    h1 {
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }
    
    .service-item {
      background-color: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.2s;
      text-align: center;
    }
    
    .service-item:hover {
      transform: translateY(-5px);
    }
    
    .service-item img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin: 0 auto 1rem;
      border-radius: 8px;
    }
    
    .price {
      color: #4a6fa5;
      font-weight: bold;
    }
    
    .back-button {
      margin-top: 2rem;
      background-color: #f0f0f0;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .loading, .error {
      text-align: center;
      margin: 3rem 0;
    }
    
    .error {
      color: #e74c3c;
    }
  </style>
