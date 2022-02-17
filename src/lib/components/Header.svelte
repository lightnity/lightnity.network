<!-- Header.svelte -->
<script>
	import Lightnity from '$static/lightnity.svg';
	import logoUrl from '$static/logo.svg?url';
	import Icon from '@iconify/svelte';
	import { fade, fly } from 'svelte/transition';

	let active = false;
</script>

<header class="sticky top-0 z-50 flex items-center h-20">
	<img class="ml-4 md:ml-8 lg:ml-16 h-10" src={logoUrl} alt="logo" />
	<div class="ml-3">
		<Lightnity class="fill-black dark:fill-white h-6" />
	</div>

	<div class="grow" />

	<div class="md:hidden mr-3">
		{#if active == false}
			<button class:active class="text-black dark:text-white" on:click={() => (active = !active)}
				><Icon icon="charm:menu-hamburger" width="24" height="24" /></button
			>
		{:else}
			<button class="text-black dark:text-white" on:click={() => (active = !active)}
				><Icon icon="eva:close-fill" width="28" height="28" /></button
			>
		{/if}
	</div>

	<ul class="hidden md:flex">
		<li class="mr-6">
			<a
				sveltekit:prefetch
				class="text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="/blog"
			>
				Docs
			</a>
		</li>
		<li class="mr-6">
			<a
				sveltekit:prefetch
				class="text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="/blog"
			>
				FAQ
			</a>
		</li>
		<li class="mr-10">
			<a
				sveltekit:prefetch
				class="text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="/blog"
			>
				Blog
			</a>
		</li>
		<li class="mr-6">
			<a
				sveltekit:prefetch
				class="text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="https://github.com/lightnity"
			>
				<Icon icon="akar-icons:github-fill" width="24" height="24" />
			</a>
		</li>
		<li class="mr-6">
			<a
				sveltekit:prefetch
				class="text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="https://discord.gg/afBXZdEHeh"
			>
				<Icon icon="akar-icons:chat-dots" width="24" height="24" />
			</a>
		</li>
		<li class="mr-10 lg:mr-20">
			<a
				sveltekit:prefetch
				class="text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="https://twitter.com/lightnityn"
			>
				<Icon icon="akar-icons:twitter-fill" width="24" height="24" />
			</a>
		</li>
	</ul>
</header>

{#if active}
	<div in:fade out:fade class="w-screen flex justify-end">
		<div class="grow flex flex-wrap justify-center content-center">
			<a
				sveltekit:prefetch
				class="py-2 mr-8 text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="https://github.com/lightnity"
			>
				<Icon icon="akar-icons:github-fill" width="40" height="40" />
			</a>
			<a
				sveltekit:prefetch
				class="py-2 mr-8 text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="https://discord.gg/afBXZdEHeh"
			>
				<Icon icon="akar-icons:chat-dots" width="40" height="40" />
			</a>
			<a
				sveltekit:prefetch
				class="py-2 mr-8 text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="https://twitter.com/lightnityn"
			>
				<Icon icon="akar-icons:twitter-fill" width="40" height="40" />
			</a>
		</div>
		<div class="flex flex-col items-end">
			<a
				sveltekit:prefetch
				class="py-2 mr-8 text-3xl text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="/blog"
			>
				Docs
			</a>
			<a
				sveltekit:prefetch
				class="py-2 mr-8 text-3xl text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="/blog"
			>
				FAQ
			</a>
			<a
				sveltekit:prefetch
				class="py-2 mr-8 text-3xl text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="/blog"
			>
				Blog
			</a>
		</div>
	</div>
{/if}
