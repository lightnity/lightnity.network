<script>
	import '$lib/styles/style.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="bg-gradient-to-t from-primary-light to-secondary-light dark:bg-gradient-to-b dark:from-primary-dark dark:to-secondary-dark">
	<Header />
	<slot />
	<footer>Hello, I'm the footer.</footer>
</div>
