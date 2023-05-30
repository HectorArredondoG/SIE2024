<script>

	import Router from 'svelte-spa-router'
	import routes from './routes'
	import Footer from './Componentes/Footer.svelte';
	import Header from './Componentes/Header.svelte';
	import { link } from 'svelte-spa-router'
 
</script>

<main>
	<Header/>
	<Router { routes }/>
	<Footer />
	
</main>

<style>



</style>
