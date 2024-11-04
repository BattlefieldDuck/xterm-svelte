<script lang="ts">
	import '../app.css';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children?.()}
<Footer />
