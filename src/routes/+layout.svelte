<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	const navLinks = [
		{ href: '/projects', label: 'Projekte' },
		{ href: '/didactic', label: 'Didaktik' },
		{ href: '/patterns', label: 'Muster' },
		{ href: '/templates', label: 'Vorlagen' },
		{ href: '/about', label: 'Info' },
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-50 font-inter">
	<header class="sticky top-0 z-10 w-full bg-white shadow-sm">
		<!--div class="container mx-auto max-w-6xl px-4 py-4 md:py-5">
			<a href="/" class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
				Informatik-Didaktik-Hub
			</a>
			<p class="text-sm text-gray-600">
				Projekte, Konzepte und Patterns für den Unterricht
			</p>
		</div-->

		<nav aria-label="Hauptnavigation" class="border-b border-gray-200 bg-white">
			<div class="container mx-auto max-w-6xl px-4">
				<ul class="flex space-x-2 overflow-x-auto whitespace-nowrap -mb-px md:overflow-visible">

					{#each navLinks as link (link.href)}
						{@const isActive = link.href === '/about'
							? $page.url.pathname === link.href
							: $page.url.pathname.startsWith(link.href)
						}

						<li class="flex-shrink-0">
							<a href={link.href}
								 class="inline-block border-b-2 py-3 px-4 text-base font-medium transition-colors duration-150"

							class:text-blue-600={isActive}
							class:border-blue-600={isActive}

							class:text-gray-600={!isActive}
							class:border-transparent={!isActive}
							class:hover:border-gray-300={!isActive}
							class:hover:text-gray-800={!isActive}
							>
							{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</header>

	<main class="container mx-auto w-full max-w-6xl flex-grow p-4 md:p-6">
		<slot />
	</main>

	<footer class="mt-16 w-full bg-gray-100 p-6 text-center text-sm text-gray-500 border-t">
		© {new Date().getFullYear()} TH Köln. Coding Culture Oberberg.
	</footer>

</div>