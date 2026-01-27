<script lang="ts">
	import PatternDisplay from './PatternDisplay.svelte';
	import { patterns } from '$lib/data/patterns/content';
	import { citations } from '$lib/data/patterns/content';
	import { Separator } from '$lib/components/ui/separator';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
	import { ArrowUpRight, ScrollText } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-6xl p-6 py-12">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">

		{#each patterns as pattern (pattern.id)}
			<Dialog.Root>
				<Dialog.Trigger class="text-left">
					<Card.Root class="group h-full cursor-pointer border-muted bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-md active:scale-[0.98]">
						<Card.Header class="space-y-3">
							<div class="flex items-start justify-between">
								<Card.Title class="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
									{pattern.title}
								</Card.Title>
								<div class="rounded-full bg-secondary p-2 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all">
									<ArrowUpRight class="h-4 w-4" />
								</div>
							</div>
							<Card.Description class="text-sm leading-relaxed line-clamp-3">
								{pattern.description || "Klicke hier, um die Details, das Problem und die Lösung dieses Entwurfsmusters zu erkunden."}
							</Card.Description>
						</Card.Header>
					</Card.Root>
				</Dialog.Trigger>

				<Dialog.Content
					class="w-full max-w-[95vw] lg:max-w-[90vw] h-[92vh] flex flex-col p-0 border-none shadow-2xl overflow-hidden"
				>
					<div class="bg-background/95 backdrop-blur px-6 py-6 border-b shrink-0">
						<Dialog.Header>
							<Dialog.Title class="text-3xl md:text-4xl font-extrabold tracking-tight">
								{pattern.title}
							</Dialog.Title>
						</Dialog.Header>
					</div>

					<div class="flex-grow overflow-y-auto p-6 md:p-12 lg:p-16">
						<div class="mx-auto max-w-5xl"> <PatternDisplay {pattern} />
						</div>
					</div>

					<div class="bg-background/95 backdrop-blur p-4 border-t flex justify-end shrink-0">
						<Dialog.Close class="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
							Verstanden
						</Dialog.Close>
					</div>
				</Dialog.Content>
			</Dialog.Root>
		{/each}

	</div>
</div>

<section class="border-t pt-10">
	<Accordion.Root transition={true}>
		<Accordion.Item value="sources" class="border-none">
			<Accordion.Trigger class="hover:no-underline py-2">
				<div class="flex items-center gap-3">
					<div class="p-2 bg-secondary rounded-md text-muted-foreground">
						<ScrollText class="h-4 w-4" />
					</div>
					<div class="text-left">
						<h2 class="text-xl font-semibold tracking-tight">Quellen</h2>
						<p class="text-xs text-muted-foreground font-normal">
							{citations.length} Referenzen anzeigen
						</p>
					</div>
				</div>
			</Accordion.Trigger>

			<Accordion.Content class="pt-6 pb-2">
				<ul class="flex flex-col gap-4">
					{#each citations as citation (citation.id)}
						<li
							id="ref-{citation.id}"
							class="group flex items-start text-sm leading-relaxed text-muted-foreground hover:text-foreground transition-colors"
						>
              <span class="mr-4 flex-shrink-0 font-mono text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground/80">
                {citation.id.toString().padStart(2, '0')}
              </span>

							<span class="flex-1">
                {@html citation.reference}
              </span>
						</li>
					{/each}
				</ul>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</section>