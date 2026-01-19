<script lang="ts">

	import {
		Target,
		AlertTriangle,
		Zap,
		Lightbulb,
		CheckCircle,
		XCircle,
		BookOpen,
		Link,
		FileCode
	} from 'lucide-svelte';
	import type { Pattern } from '$lib/data/patterns/types';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';

	export let pattern: Pattern;

	const listIconClass = 'mr-2 h-5 w-5 flex-shrink-0';
</script>

{#if pattern.teaserImg}
<div
	class="flex flex-col mb-12 items-center w-full grid-cols-1 justify-items-center">
	<img
		src="{base}{pattern.teaserImg}"
		alt={pattern.title}
		class="rounded-md border-2 object-cover w-full h-auto p-30"
	/>
</div>
{/if}

<div class="flex flex-col gap-6 font-sans">
	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center text-xl">
				<Target class="mr-2 h-5 w-5 text-blue-500" />
				Context
			</Card.Title>
		</Card.Header>
		<Card.Content class="text-base leading-relaxed text-muted-foreground">
			{@html pattern.context}
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center text-xl">
				<AlertTriangle class="mr-2 h-5 w-5 text-red-500" />
				Problem
			</Card.Title>
		</Card.Header>
		<Card.Content class="text-base leading-relaxed text-muted-foreground">
			{@html pattern.problem}
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center text-xl">
				<Zap class="mr-2 h-5 w-5 text-yellow-500" />
				Forces
			</Card.Title>
		</Card.Header>
		<Card.Content class="text-base">
			<ul class="flex flex-col gap-3">
				{#each pattern.forces as force}
					<li class="flex items-start">
						<Zap class="mr-2.5 h-4 w-4 flex-shrink-0 text-muted-foreground mt-1.5" />
						<span class="text-muted-foreground">{@html force}</span>
					</li>
				{/each}
			</ul>
		</Card.Content>
	</Card.Root>

	<Separator class="my-4" />

	<Card.Root class="border-blue-500 border-2 shadow-lg">
		<Card.Header>
			<Card.Title class="flex items-center text-2xl font-bold text-blue-600">
				<Lightbulb class="mr-2 h-6 w-6" />
				Solution
			</Card.Title>
		</Card.Header>
		<Card.Content class="text-lg leading-relaxed">
			{@html pattern.solution}
		</Card.Content>
	</Card.Root>

	<Separator class="my-4" />

	<div>
		<h2 class="mb-4 text-3xl font-semibold tracking-tight">Consequences</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<Card.Root class="border-green-300 bg-green-50/50">
				<Card.Header>
					<Card.Title class="flex items-center text-xl text-green-800">
						<CheckCircle class="mr-2 h-5 w-5" />
						Benefits
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<ul class="flex flex-col gap-3">
						{#each pattern.consequences.benefits as benefit}
							<li class="flex items-start">
								<CheckCircle class="{listIconClass} text-green-600" />
								<span class="text-muted-foreground">{@html benefit}</span>
							</li>
						{/each}
					</ul>
				</Card.Content>
			</Card.Root>

			<Card.Root class="border-red-300 bg-red-50/50">
				<Card.Header>
					<Card.Title class="flex items-center text-xl text-red-800">
						<XCircle class="mr-2 h-5 w-5" />
						Liabilities
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<ul class="flex flex-col gap-3">
						{#each pattern.consequences.liabilities as liability}
							<li class="flex items-start">
								<XCircle class="{listIconClass} text-red-600" />
								<span class="text-muted-foreground">{@html liability}</span>
							</li>
						{/each}
					</ul>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	{#if pattern.knownUses}
		<Card.Root>
			<Card.Header>
				<Card.Title class="flex items-center text-xl">
					<BookOpen class="mr-2 h-5 w-5 text-purple-500" />
					Known Uses
				</Card.Title>
			</Card.Header>
			<Card.Content class="text-base leading-relaxed text-muted-foreground">
				{#each pattern.knownUses as knownUse}
					{@html knownUse.description}
					<br>
					{#if knownUse.demoLink}
						<a
							href={knownUse.demoLink}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-4 inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
						>
							<Link class="mr-2 h-4 w-4" />
							Link
						</a>
					{/if}

					{#if knownUse.figure}
						{@const imageCount = knownUse.figure.images.length}

						{@const gridClass =
							imageCount === 1 ? 'grid-cols-1 justify-items-center' :
								imageCount === 2 ? 'grid-cols-2' :
									imageCount === 3 ? 'grid-cols-3' :
										'grid-cols-2 md:grid-cols-4'
						}
						<figure class="my-6 rounded-lg border bg-slate-50 p-4">
							<div class="grid gap-4 {gridClass}">

								{#each knownUse.figure.images as img}
									<div
										class="flex flex-col items-center w-full"
										class:max-w-lg={imageCount === 1}
									>
										<img
											src="{base}{img.src}"
											alt={img.caption}
											class="rounded-md border-2 object-cover w-full h-auto"
										/>
										<span class="mt-2 text-xs text-muted-foreground">{img.caption}</span>
									</div>
								{/each}
							</div>
							<figcaption class="mt-4 text-center text-sm text-muted-foreground">
								{knownUse.figure.mainCaption}
							</figcaption>
						</figure>
					{/if}
				{/each}
			</Card.Content>
		</Card.Root>
	{/if}

	{#if pattern.relatedPatterns}
	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center text-xl">
				<FileCode class="mr-2 h-5 w-5 text-gray-500" />
				Related Patterns
			</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-4">
			{#each pattern.relatedPatterns as related}
				<div class="rounded-md border p-4">
					<h4 class="text-md font-semibold">
						{@html related.name}
					</h4>
					<p class="mt-1 text-sm text-muted-foreground">
						{@html related.description}
					</p>
				</div>
			{/each}
		</Card.Content>
	</Card.Root>
	{/if}
</div>