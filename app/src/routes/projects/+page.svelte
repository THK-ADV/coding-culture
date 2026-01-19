<script lang="ts">
	import type { PageData } from './$types';
	import { writable, type Writable } from 'svelte/store';
	import { columns } from './columns';
	import {
		getCoreRowModel,
		getPaginationRowModel,
		getSortedRowModel,
		type PaginationState,
		type SortingState,
		type Updater
	} from '@tanstack/table-core';
	import { createSvelteTable } from '$lib/components/ui/data-table';
	import * as Table from "$lib/components/ui/table/index"
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { base } from '$app/paths';

	export let data: PageData;

	let searchTerm = '';
	let selectedLanguage = 'all';
	let selectedType = 'all';
	let selectedProduct = 'all';
	let minComplexity = 1;
	let maxDuration: number | null = null;
	let maxGroupSize: number | null = null;

	$: [
		searchTerm,
		selectedLanguage,
		selectedType,
		selectedProduct,
		minComplexity,
		maxDuration,
		maxGroupSize
	], pagination.update(p => ({ ...p, pageIndex: 0 }));

	$: filteredProjects = data?.projects?.filter(project => {
		const searchMatch =
			!searchTerm ||
			project.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.language?.some(l => l.toLowerCase().includes(searchTerm.toLowerCase())) ||
			project.product?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.content?.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
			project.type?.toLowerCase().includes(searchTerm.toLowerCase());

		const langMatch = selectedLanguage === 'all' || project.language.includes(selectedLanguage);
		const typeMatch = selectedType === 'all' || project.type === selectedType;
		const productMatch = selectedProduct === 'all' || project.product === selectedProduct;

		const complexityMatch = project.complexity >= minComplexity;
		const durationMatch = maxDuration === null || project.minDuration <= maxDuration;
		const groupMatch = maxGroupSize === null || project.minGroup <= maxGroupSize;

		return (
			searchMatch &&
			langMatch &&
			typeMatch &&
			productMatch &&
			complexityMatch &&
			durationMatch &&
			groupMatch
		);
	}) || [];

	const sorting = writable<SortingState>([]);
	const pagination = writable<PaginationState>({
		pageIndex: 0,
		pageSize: 25
	});

	function connectStore<T>(store: Writable<T>) {
		return (updater: Updater<T>) => {
			store.update((old) =>
				typeof updater === 'function' ? updater(old) : updater
			);
		};
	}

	$: table = createSvelteTable({
		data: filteredProjects,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: connectStore(sorting),
		onPaginationChange: connectStore(pagination),
		state: {
			sorting: $sorting,
			pagination: $pagination
		}
	});

	function formatComplexity(level: number): string {
		switch (level) {
			case 1: return 'Einfach';
			case 2: return 'Mittel';
			case 3: return 'Schwer';
			default: return 'Unbekannt';
		}
	}
</script>

<div class="space-y-6">
	<h1 class="text-3xl font-bold text-gray-900">Projektübersicht</h1>

	{#if data?.uniqueLanguages && data?.uniqueTypes}
		<div class="space-y-4">

			<div class="p-4 bg-white dark:bg-gray-900 border rounded-lg shadow-sm">
				<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Suche</h3>
				<label for="search" class="sr-only">Globale Suche</label>

				<div class="relative">
					<div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
					</div>

					<Input
						type="search"
						id="search"
						placeholder="Suche in Name, Beschreibung, Content, Produkt..."
						bind:value={searchTerm}
						class="w-full pl-10 h-10 text-base border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					/>
				</div>
			</div>

			<div class="p-4 bg-white dark:bg-gray-900 border rounded-lg shadow-sm">
				<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Filter</h3>

				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

					<div>
						<label for="lang-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
							Sprache
						</label>
						<select
							id="lang-filter"
							bind:value={selectedLanguage}
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 h-10"
						>
							<option value="all">Alle Sprachen</option>
							{#each data.uniqueLanguages as language}
								<option value={language}>{language}</option>
							{/each}
						</select>
					</div>

					<div>
						<label for="type-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
							Typ
						</label>
						<select
							id="type-filter"
							bind:value={selectedType}
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 h-10"
						>
							<option value="all">Alle Typen</option>
							{#each data.uniqueTypes as type}
								<option value={type}>{type}</option>
							{/each}
						</select>
					</div>

					{#if data?.uniqueProducts}
						<div>
							<label for="product-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Produkt
							</label>
							<select
								id="product-filter"
								bind:value={selectedProduct}
								class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 h-10"
							>
								<option value="all">Alle Produkte</option>
								{#each data.uniqueProducts as product}
									<option value={product}>{product}</option>
								{/each}
							</select>
						</div>
					{/if}

					<div>
						<label for="min-complexity" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
							Min. Komplexität
						</label>
						<select
							id="min-complexity"
							bind:value={minComplexity}
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 h-10"
						>
							<option value={1}>Alle (1+)</option>
							<option value={2}>Mittel (2+)</option>
							<option value={3}>Schwer (3)</option>
						</select>
					</div>

					<div>
						<label for="max-duration" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
							Max. Dauer (Min)
						</label>
						<Input
							type="number"
							id="max-duration"
							placeholder="Alle" bind:value={maxDuration}
							min={0}
							class="w-full shadow-sm h-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
					</div>

					<div>
						<label for="max-group" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
							Max. Gruppe
						</label>
						<Input
							type="number"
							id="max-group"
							placeholder="Alle" bind:value={maxGroupSize}
							min={1}
							class="w-full shadow-sm h-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
					</div>
				</div>
			</div>
		</div>
		<!--div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-900 border rounded-lg shadow-sm">
			<div>
				<label for="search" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
					Suchen
				</label>
				<Input
					type="search"
					id="search"
					placeholder="Name, Beschreibung, Sprache..."
					bind:value={searchTerm}
					class="w-full"
				/>
			</div>

			<div>
				<label for="lang-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
					Sprache
				</label>
				<select
					id="lang-filter"
					bind:value={selectedLanguage}
					class="w-full px-3 py-2 border border-gray-300 rounded-md"
				>
					<option value="all">Alle Sprachen</option>
					{#each data.uniqueLanguages as language}
						<option value={language}>{language}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="type-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
					Typ
				</label>
				<select
					id="type-filter"
					bind:value={selectedType}
					class="w-full px-3 py-2 border border-gray-300 rounded-md"
				>
					<option value="all">Alle Typen</option>
					{#each data.uniqueTypes as type}
						<option value={type}>{type}</option>
					{/each}
				</select>
			</div>
		</div-->
	{/if}

	<div class="bg-white rounded-md border">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Name</Table.Head>
					<Table.Head>Typ</Table.Head>
					<Table.Head>Sprache</Table.Head>
					<Table.Head>Komplexität</Table.Head>
					<Table.Head>Dauer</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#if filteredProjects.length}
					{#each table.getRowModel().rows as row}
						{@const project = row.original}
						<Table.Row>
							<Table.Cell>
								<div>
									<a href="{base}/projects/{project.id}" class="font-medium text-blue-600 hover:underline">
										{project.name}
									</a>
									<div class="text-sm text-gray-500 max-w-xs truncate" title={project.description}>
										{project.description}
									</div>
								</div>
							</Table.Cell>
							<Table.Cell>{project.type}</Table.Cell>
							<Table.Cell>
								{#if Array.isArray(project.language)}
									{@const sortedLanguages = project.language.slice().sort()}
									<div class="flex flex-wrap gap-1">
										{#each sortedLanguages as lang}
											<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
												{lang}
											</span>
										{/each}
									</div>
								{:else}
									<span class="text-sm text-gray-500">{project.language}</span>
								{/if}
							</Table.Cell>
							<Table.Cell>{formatComplexity(project.complexity)}</Table.Cell>
							<Table.Cell>{project.minDuration} - {project.maxDuration} Min</Table.Cell>
						</Table.Row>
					{/each}
				{:else}
					<Table.Row>
						<Table.Cell colspan="5" class="h-24 text-center">
							Keine Projekte gefunden.
						</Table.Cell>
					</Table.Row>
				{/if}
			</Table.Body>
		</Table.Root>
	</div>

	<div class="flex items-center justify-between py-4">
		<div class="text-sm text-muted-foreground">
			{filteredProjects.length} von {data?.projects?.length || 0} Projekt(en) angezeigt.
		</div>
		<div class="flex items-center space-x-2">
			<span class="text-sm">
				Seite {$pagination.pageIndex + 1} von {table.getPageCount()}
			</span>
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-md border border-gray-300
         bg-white px-3 py-1 text-sm font-medium text-gray-900 shadow-sm
         hover:bg-gray-50 focus-visible:outline-none
         focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
         disabled:pointer-events-none disabled:opacity-50"
				disabled={!table.getCanPreviousPage()}
				on:click={() => table.previousPage()}
			>
				Zurück
			</button>

			<button
				type="button"
				class="inline-flex items-center justify-center rounded-md border border-gray-300
         bg-white px-3 py-1 text-sm font-medium text-gray-900 shadow-sm
         hover:bg-gray-50 focus-visible:outline-none
         focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
         disabled:pointer-events-none disabled:opacity-50"
				disabled={!table.getCanNextPage()}
				on:click={() => table.nextPage()}
			>
				Weiter
			</button>
		</div>
	</div>
</div>