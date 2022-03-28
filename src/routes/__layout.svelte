<script>
	import '$lib/styles/style.css';
	import Header from '$lib/components/Header.svelte';
	let y;
    import { fade, fly } from 'svelte/transition';
</script>

<svelte:window bind:scrollY={y} />

<div
	in:fly={{ y: -50, duration: 250, delay: 300 }}
	out:fly={{ y: -50, duration: 250 }}
	class="bg-gradient-to-t from-primary-light to-secondary-light dark:bg-gradient-to-b dark:from-primary-dark dark:to-secondary-dark"
>
	<Header />
	<slot />
	<footer>Hello, I'm the footer.</footer>
</div>
