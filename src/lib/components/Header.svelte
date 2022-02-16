<!-- Header.svelte -->
<script>
	import Lightnity from '$static/lightnity.svg';
	import logoUrl from '$static/logo.svg?url';
	import Icon from '@iconify/svelte';
</script>

<header class="sticky top-0 z-50 flex items-center h-20">
	<img class="ml-4 md:ml-8 lg:ml-16 h-10" src={logoUrl} alt="logo" />
	<div class="ml-3">
		<Lightnity class="fill-black dark:fill-white h-6" />
	</div>

	<div class="grow" />
	<div class="md:invisible mr-3"><Icon icon="mdi-light:home" /></div>
	<ul class="invisible md:visible flex">
		<li class="mr-6">
			<a
				sveltekit:prefetch
				class="text-black hover:text-primary-light dark:text-white dark:hover:text-primary-dark"
				href="/blog"
			>
				Learn
			</a>
		</li>
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
