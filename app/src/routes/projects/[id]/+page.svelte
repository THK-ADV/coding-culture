<script lang="ts">
	import type { PageData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { base } from '$app/paths';
	import {
		ArrowLeft,
		Ruler,
		Users,
		Clock,
		Code,
		Puzzle,
		BookOpen,
		Tag,
		type Icon
	} from 'lucide-svelte';

	export let data: PageData;

	type MetadataProps = {
		icon: typeof Icon; // Typisierung für Lucide Svelte Komponenten
		title: string;
		value: string;
	};

	function MetadataItem({ icon: Icon, title, value }: MetadataProps) {
		return (
			`<div class="flex flex-col space-y-1">
        <div class="flex items-center text-gray-500 dark:text-gray-400">
          <svelte:component this={Icon} class="h-4 w-4 mr-2" />
          <span class="font-medium">${title}</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-gray-100">${value}</p>
      </div>`
		);
	}

	function formatComplexity(level: number): string {
		switch (level) {
			case 1: return 'Einfach';
			case 2: return 'Mittel';
			case 3: return 'Schwer';
			default: return 'Unbekannt';
		}
	}

	function formatDuration(min: number, max: number): string {
		if (min === max) return `${min} Min`;
		return `${min} – ${max} Min`;
	}
</script>

<svelte:head>
	<title>{data.project && data.project.name ? data.project.name + ' | Projektdetails' : 'Projekt'}</title>
</svelte:head>

{#if data.project}
	{@const project = data.project}

	<main class="mx-auto max-w-4xl p-4 py-8 md:p-6 md:py-12 space-y-8">

		<div class="mb-4">
			<a href="{base}/projects" class="text-blue-600 hover:text-blue-800 flex items-center transition-colors">
				<ArrowLeft class="mr-2 h-4 w-4" />
				Zurück zur Projektübersicht
			</a>
		</div>

		<div>
			<h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 mb-2">
				{project.name}
			</h1>
			<p class="text-lg text-gray-600 dark:text-gray-400">
				{project.description}
			</p>
		</div>

		<Separator />

		<section>
			<h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
				Eckdaten
			</h2>

			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">

				<div class="flex flex-col space-y-1">
					<div class="flex items-center text-gray-500 dark:text-gray-400">
						<svelte:component this={Puzzle} class="h-4 w-4 mr-2" />
						<span class="font-medium">Typ</span>
					</div>
					<p class="font-semibold text-gray-900 dark:text-gray-100">{project.type}</p>
				</div>

				<div class="flex flex-col space-y-1">
					<div class="flex items-center text-gray-500 dark:text-gray-400">
						<svelte:component this={Ruler} class="h-4 w-4 mr-2" />
						<span class="font-medium">Produkt</span>
					</div>
					<p class="font-semibold text-gray-900 dark:text-gray-100">{project.product}</p>
				</div>

				<div class="flex flex-col space-y-1">
					<div class="flex items-center text-gray-500 dark:text-gray-400">
						<svelte:component this={Code} class="h-4 w-4 mr-2" />
						<span class="font-medium">Komplexität</span>
					</div>
					<p class="font-semibold text-gray-900 dark:text-gray-100">{formatComplexity(project.complexity)}</p>
				</div>

				<div class="flex flex-col space-y-1">
					<div class="flex items-center text-gray-500 dark:text-gray-400">
						<svelte:component this={Clock} class="h-4 w-4 mr-2" />
						<span class="font-medium">Dauer</span>
					</div>
					<p class="font-semibold text-gray-900 dark:text-gray-100">{formatDuration(project.minDuration, project.maxDuration)}</p>
				</div>

				<div class="flex flex-col space-y-1">
					<div class="flex items-center text-gray-500 dark:text-gray-400">
						<svelte:component this={Users} class="h-4 w-4 mr-2" />
						<span class="font-medium">Gruppe</span>
					</div>
					<p class="font-semibold text-gray-900 dark:text-gray-100">{project.minGroup} – {project.maxGroup} Pers.</p>
				</div>

			</div>
		</section>

		<Separator />

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

			<div class="lg:col-span-2 space-y-6">
				<section>
					<h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Ablauf und Inhalt</h2>
					<div class="space-y-4 text-base text-gray-700 dark:text-gray-300">
						{#each project.content as paragraph, i}
							<div class="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors">
								<span class="mt-0.5 flex-shrink-0 text-md font-bold text-blue-600 dark:text-blue-400">{i + 1}.</span>
								<p class="text-gray-700 dark:text-gray-300 leading-relaxed">{paragraph}</p>
							</div>
						{/each}
					</div>
				</section>
			</div>

			<div class="lg:col-span-1 space-y-8">

				<Card.Root>
					<Card.Header>
						<h3 class="text-xl font-semibold flex items-center text-gray-800 dark:text-gray-200">
							<BookOpen class="mr-2 h-5 w-5 text-purple-500" />
							Benötigte Materialien
						</h3>
					</Card.Header>
					<Card.Content>
						<ul class="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300 pl-4">
							{#each project.materials as material}
								<li>{material}</li>
							{/each}
						</ul>
					</Card.Content>
				</Card.Root>

				<Card.Root>
					<Card.Header>
						<h3 class="text-xl font-semibold flex items-center text-gray-800 dark:text-gray-200">
							<Tag class="mr-2 h-5 w-5 text-green-500" />
							Verfügbare Sprachen
						</h3>
					</Card.Header>
					<Card.Content>
						<div class="flex flex-wrap gap-2">
							{#each project.language.slice().sort() as lang}
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                    {lang}
                                </span>
							{/each}
						</div>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</main>
{/if}