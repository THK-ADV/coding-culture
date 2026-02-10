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
	import * as Select from '$lib/components/ui/select';
	import { Badge } from "$lib/components/ui/badge";
	import { Search, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-svelte';

	export let data: PageData;

	let searchTerm = '';
	let selectedLanguage = 'all';
	let selectedType = 'all';
	let selectedProduct = 'all';
	let minComplexity = 1;
	let maxDuration: number | null = null;
	let maxGroupSize: number | null = null;

	function getSortIcon(isSorted: string | boolean) {
		if (isSorted === 'asc') return ArrowUp;
		if (isSorted === 'desc') return ArrowDown;
		return ArrowUpDown;
	}

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

<!--div class="space-y-6">
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
		<!!!div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-900 border rounded-lg shadow-sm">
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
		</div!!!>
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
</div-->

<div class="space-y-8 pb-20">
	<div class="flex flex-col gap-1">
		<h1 class="text-3xl font-bold tracking-tight text-foreground">Projektübersicht</h1>
		<p class="text-muted-foreground">Entdecke und filtere alle verfügbaren Projekte.</p>
	</div>

	<div class="flex flex-col gap-4">
		<div class="flex flex-wrap items-center gap-2">
			<div class="relative w-full max-w-sm">
				<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
				<Input
					placeholder="Suchen..."
					bind:value={searchTerm}
					class="pl-9 h-9 bg-muted/40 border-none focus-visible:ring-1 focus-visible:ring-ring"
				/>
			</div>

			<div class="flex flex-wrap gap-2">
				<select bind:value={selectedLanguage} class="h-9 rounded-md border bg-transparent px-3 py-1 text-sm focus:ring-1">
					<option value="all">Sprache</option>
					{#each data.uniqueLanguages as lang}<option value={lang}>{lang}</option>{/each}
				</select>

				<select bind:value={selectedType} class="h-9 rounded-md border bg-transparent px-3 py-1 text-sm focus:ring-1">
					<option value="all">Typ</option>
					{#each data.uniqueTypes as type}<option value={type}>{type}</option>{/each}
				</select>

				<select bind:value={minComplexity} class="h-9 rounded-md border bg-transparent px-3 py-1 text-sm focus:ring-1">
					<option value={1}>Komplexität (Alle)</option>
					<option value={2}>Mittel+</option>
					<option value={3}>Schwer</option>
				</select>
			</div>

			<Button variant="ghost" size="sm" class="text-muted-foreground ml-auto" on:click={() => {
        searchTerm = ''; selectedLanguage = 'all'; selectedType = 'all'; // Reset
      }}>
				Reset
			</Button>
		</div>

		<div class="flex flex-wrap gap-3 items-center text-sm text-muted-foreground bg-muted/20 p-2 rounded-lg border border-dashed">
			<div class="flex items-center gap-2">
				<span class="text-xs font-semibold uppercase opacity-60">Dauer bis:</span>
				<Input type="number" bind:value={maxDuration} placeholder="Min" class="w-20 h-7 text-xs" />
			</div>
			<div class="flex items-center gap-2 border-l pl-3">
				<span class="text-xs font-semibold uppercase opacity-60">Gruppe bis:</span>
				<Input type="number" bind:value={maxGroupSize} placeholder="Pers." class="w-20 h-7 text-xs" />
			</div>
		</div>
	</div>

	<div class="rounded-xl border border-muted bg-card shadow-sm overflow-hidden">
		<Table.Root>
			<Table.Header class="bg-muted/30">
				{#each table.getHeaderGroups() as headerGroup}
					<Table.Row class="hover:bg-transparent border-none">
						{#each headerGroup.headers as header}
							<Table.Head class="h-10 px-4">
								{#if !header.isPlaceholder}
									<button
										class="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground group w-full"
										on:click={header.column.getToggleSortingHandler()}
									>
										{#if typeof header.column.columnDef.header === 'string'}
											{header.column.columnDef.header}
										{:else}
											<svelte:component this={header.column.columnDef.header} />
										{/if}

										<div class="transition-opacity {header.column.getIsSorted() ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}">
											{#if header.column.getIsSorted() === 'asc'}
												<ArrowUp class="h-3 w-3" />
											{:else if header.column.getIsSorted() === 'desc'}
												<ArrowDown class="h-3 w-3" />
											{:else}
												<ArrowUpDown class="h-3 w-3" />
											{/if}
										</div>
									</button>
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#if filteredProjects.length}
					{#each table.getRowModel().rows as row (row.id)}
						{@const project = row.original}
						<Table.Row class="hover:bg-muted/50 transition-colors">
							<Table.Cell>
								<div class="flex flex-col">
									<a href="{base}/projects/{project.id}" class="font-semibold text-primary hover:underline underline-offset-4 decoration-primary/30">
										{project.name}
									</a>
									<span class="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                    {project.description}
                  </span>
								</div>
							</Table.Cell>
							<Table.Cell>
								<Badge variant="outline" class="font-normal border-muted-foreground/20">{project.type}</Badge>
							</Table.Cell>
							<Table.Cell>
								<div class="flex flex-wrap gap-1">
									{#each project.language.slice(0, 2) as lang}
										<Badge variant="secondary" class="text-[10px] px-1.5 py-0 font-medium bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
											{lang}
										</Badge>
									{/each}
									{#if project.language.length > 2}
										<span class="text-[10px] text-muted-foreground">+{project.language.length - 2}</span>
									{/if}
								</div>
							</Table.Cell>
							<Table.Cell>
								<span class="text-sm">{formatComplexity(project.complexity)}</span>
							</Table.Cell>
							<Table.Cell class="text-right tabular-nums text-muted-foreground">
								{project.minDuration}-{project.maxDuration}m
							</Table.Cell>
						</Table.Row>
					{/each}
				{:else}
					<Table.Row>
						<Table.Cell colspan="5" class="h-32 text-center text-muted-foreground">
							Keine Projekte gefunden.
						</Table.Cell>
					</Table.Row>
				{/if}
			</Table.Body>
		</Table.Root>
	</div>

	<div class="flex items-center justify-between border-t pt-4">
		<p class="text-xs text-muted-foreground">
			<span class="font-medium text-foreground">{filteredProjects.length}</span> Ergebnisse
		</p>
		<div class="flex items-center gap-4">
      <span class="text-xs text-muted-foreground">
        Seite {$pagination.pageIndex + 1} von {table.getPageCount()}
      </span>
			<div class="flex gap-1">
				<Button
					variant="outline"
					size="icon"
					class="h-8 w-8"
					disabled={!table.getCanPreviousPage()}
					on:click={() => table.previousPage()}
				>
					<ChevronLeft class="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					class="h-8 w-8"
					disabled={!table.getCanNextPage()}
					on:click={() => table.nextPage()}
				>
					<ChevronRight class="h-4 w-4" />
				</Button>
			</div>
		</div>
	</div>
</div>