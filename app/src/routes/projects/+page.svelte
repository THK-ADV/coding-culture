<script lang="ts">
	import type { PageData } from './$types';
	import { writable } from 'svelte/store';
	import { columns } from './columns';
	import {
		getCoreRowModel,
		getPaginationRowModel,
		getSortedRowModel,
		type PaginationState,
		type SortingState
	} from '@tanstack/table-core';
	import { createSvelteTable } from '$lib/components/ui/data-table';
	import * as Table from "$lib/components/ui/table/index"
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { base } from '$app/paths';
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
	const sorting = writable<SortingState>([]);
	const pagination = writable<PaginationState>({
		pageIndex: 0,
		pageSize: 25
	});

	$: if (searchTerm || selectedLanguage || selectedType || selectedProduct || minComplexity || maxDuration || maxGroupSize) {
		pagination.update(p => ({ ...p, pageIndex: 0 }));
	}

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

	$: table = createSvelteTable({
		data: filteredProjects,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		manualPagination: false,
		onSortingChange: (updater) => {
			if (typeof updater === 'function') sorting.update(updater);
			else sorting.set(updater);
		},
		onPaginationChange: (updater) => {
			if (typeof updater === 'function') {
				const nextState = updater($pagination);
				pagination.set(nextState);
			} else {
				pagination.set(updater);
			}
		},
		state: {
			get sorting() { return $sorting; },
			get pagination() { return $pagination; }
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

	function resetFilters() {
		searchTerm = '';
		selectedLanguage = 'all';
		selectedType = 'all';
		selectedProduct = 'all';
		minComplexity = 1;
		maxDuration = null;
		maxGroupSize = null;
	}
</script>

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
			<Button variant="ghost" size="sm" class="text-muted-foreground ml-auto">
				<button on:click={resetFilters}>
					Reset
				</button>
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
									<a href="{base}/projects/{project.id}" class="pl-2 text-primary hover:underline underline-offset-4 decoration-primary/30">
										{project.name}
									</a>
									<span class="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                    {project.description}
                  </span>
								</div>
							</Table.Cell>
							<Table.Cell>
								<Badge variant="outline" class="pl-2 font-normal border-muted-foreground/20">{project.type}</Badge>
							</Table.Cell>
							<Table.Cell>
								<div class="pl-2 flex flex-wrap gap-1">
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
								<span class="pl-2 text-sm">{formatComplexity(project.complexity)}</span>
							</Table.Cell>
							<Table.Cell class="pl-4 tabular-nums text-muted-foreground">
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
				>
					<button
							on:click={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
					>
					<ChevronLeft class="h-4 w-4" />
					</button>
				</Button>
				<Button
					variant="outline"
					size="icon"
					class="h-8 w-8"
				>
					<button
							on:click={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
					>
					<ChevronRight class="h-4 w-4" />
					</button>
				</Button>
			</div>
		</div>
	</div>
</div>