<script>
	import "../app.css";
	import Navbar from "../lib/components/Navbar.svelte";
	import Footer from "../lib/components/Footer.svelte";
  </script>
  
  <div class="app-container">
	<Navbar />
	<main>
	  <slot />
	</main>
	<Footer />
  </div>
  
  <style>
	.app-container {
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
	  font-family: 'Roboto', sans-serif;
	}
	
	main {
	  flex: 1;
	  padding: 20px;
	  max-width: 1200px;
	  margin: 0 auto;
	  width: 100%;
	}
  </style>