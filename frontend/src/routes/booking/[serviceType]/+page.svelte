<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { createBooking } from "$lib/api";
    
    export let data: { serviceType: string };
    
    let serviceType = data.serviceType;
    let serviceId: number;
    let formData = {
      name: "",
      phone: "",
      address: "",
      problemDescription: "",
      date: "",
      time: ""
    };
    
    let isSubmitting = false;
    let today = new Date().toISOString().split('T')[0];
    
    onMount(() => {
      const serviceIdParam = $page.url.searchParams.get("service");
      serviceId = serviceIdParam ? parseInt(serviceIdParam, 10) : 0;
    });
    
    async function handleSubmit() {
      isSubmitting = true;
      
      try {
        const bookingData = {
          serviceId,
          serviceType,
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          problemDescription: formData.problemDescription,
          date: formData.date,
          time: formData.time
        };
        
        const result = await createBooking(bookingData);
        console.log('Rezervare creata:', result);
        
        isSubmitting = false;
        goto("/confirmation");
      } catch (error) {
        console.error('Eroare la crearea rezervarii:', error);
        isSubmitting = false;
        alert('A aparut o eroare la procesarea rezervarii. Va rugam sa incercati din nou.');
      }
    }
  </script>
  
  <div class="booking-container">
    <h1>Rezerva {serviceType === "mechanic" ? "mecanic" : "electrician"}</h1>
    
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="name">Nume complet</label>
        <input 
          type="text" 
          id="name" 
          bind:value={formData.name} 
          required
          placeholder="Numele și prenumele tau"
        />
      </div>
      
      <div class="form-group">
        <label for="phone">Numar de telefon</label>
        <input 
          type="tel" 
          id="phone" 
          bind:value={formData.phone} 
          required
          placeholder="Numărul tau de telefon"
        />
      </div>
      
      <div class="form-group">
        <label for="address">Adresa</label>
        <input 
          type="text" 
          id="address" 
          bind:value={formData.address} 
          required
          placeholder="Adresa ta completa"
        />
      </div>
      
      <div class="form-group">
        <label for="problemDescription">Descrierea problemei</label>
        <textarea 
          id="problemDescription" 
          bind:value={formData.problemDescription} 
          required
          placeholder="Descrie problema ta in cateva cuvinte"
          rows="4"
        ></textarea>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="date">Data</label>
          <input 
            type="date" 
            id="date" 
            bind:value={formData.date} 
            min={today}
            required
          />
        </div>
        
        <div class="form-group">
          <label for="time">Ora</label>
          <select id="time" bind:value={formData.time} required>
            <option value="">Alege o ora</option>
            <option value="morning">Dimineata (8-12)</option>
            <option value="afternoon">Dupa-amiaza (13-17)</option>
            <option value="evening">Seara (17-20)</option>
          </select>
        </div>
      </div>
      
      <div class="form-actions">
        <button type="button" class="back-button" on:click={() => goto(`/services?type=${serviceType}`)}>Înapoi</button>
        <button type="submit" class="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Se proceseaza...' : 'Rezerva acum'}
        </button>
      </div>
    </form>
  </div>
  
  <style>
    .booking-container {
      max-width: 600px;
      margin: 0 auto;
    }
    
    h1 {
      margin-bottom: 2rem;
      text-align: center;
    }
    
    form {
      background-color: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-row {
      display: flex;
      gap: 1rem;
    }
    
    .form-row .form-group {
      flex: 1;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    input, textarea, select {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
    
    textarea {
      resize: vertical;
    }
    
    .form-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
    }
    
    .back-button {
      background-color: #f0f0f0;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .submit-button {
      background-color: #4a6fa5;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
    }
    
    .submit-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  </style>
