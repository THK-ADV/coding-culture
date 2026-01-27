<script lang="ts">
	import {
		BookOpen,
		Users,
		Lightbulb,
		Hammer,
		Search,
		UserCircle,
		Globe,
		Puzzle,
		MonitorOff,
		MessageCircle,
		Rocket,
		Layers
	} from 'lucide-svelte';

	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';

	const definitions = [
		{
			title: 'Pädagogische Grundprinzipien',
			question: 'Warum & Wozu?',
			desc: 'Übergeordnete, normative Leitsätze und philosophische Leitlinien.',
			icon: Lightbulb,
			color: 'text-yellow-500',
			bg: 'bg-yellow-50 dark:bg-yellow-900/20'
		},
		{
			title: 'Didaktische Methoden',
			question: 'Wie?',
			desc: 'Konkrete, planbare Verfahrensweisen und Lehr-Lern-Arrangements.',
			icon: Puzzle,
			color: 'text-blue-500',
			bg: 'bg-blue-50 dark:bg-blue-900/20'
		},
		{
			title: 'Sozialformen',
			question: 'Wer mit Wem?',
			desc: 'Organisatorische Interaktionsstrukturen (Einzel, Partner, Gruppe).',
			icon: Users,
			color: 'text-green-500',
			bg: 'bg-green-50 dark:bg-green-900/20'
		}
	];

	const principles = [
		{
			title: 'Handlungsorientierung & Konstruktionismus',
			icon: Hammer,
			content: [
				'Lernen durch aktives, selbstgesteuertes Handeln und Erstellung greifbarer Produkte.',
				'Schüler werden zu <strong>Produzenten</strong> (z.B. App programmieren), nicht nur Bedienern.',
				'Die Handlung selbst (Programmieren) ist identisch mit dem Inhaltsgegenstand.',
				'Basierend auf John Dewey und Seymour Papert.'
			]
		},
		{
			title: 'Problemorientierung & Forschendes Lernen',
			icon: Search,
			content: [
				'Start mit einem authentischen, komplexen Problem als Motor des Lernprozesses.',
				'Theorie und Werkzeuge werden als Mittel zur Problemlösung eingeführt.',
				'Vehikel für <strong>Computational Thinking</strong> im Kontext realer Lösungen.',
				'Filtert Inhalte: Nicht "Werkzeug X lernen", sondern "Problem Y mit Werkzeug X lösen".'
			]
		},
		{
			title: 'Schülerorientierung & Differenzierung',
			icon: UserCircle,
			content: [
				'Anknüpfen an heterogene Vorkenntnisse und Erfahrungswelten der Lernenden.',
				'Aktives Aufdecken und Korrigieren falscher mentaler Modelle ("Die Cloud ist magisch").',
				'Balanceakt: Nicht durch Komplexität überfordern, aber auch nicht durch Oberflächlichkeit langweilen.'
			]
		},
		{
			title: 'Ganzheitlichkeit & Gesellschaft',
			icon: Globe,
			content: [
				'Informatiksysteme sind niemals neutral, sondern <strong>soziotechnische Systeme</strong>.',
				'Fördert Medienkompetenz und politische Kompetenz (Bias, Datenschutz, Macht).',
				'Wichtigstes Identitätsmerkmal des allgemeinbildenden Unterrichts im Vergleich zur reinen Berufsausbildung.'
			]
		}
	];

	const methods = {
		unplugged: {
			label: 'Unplugged & Veranschaulichung',
			icon: MonitorOff,
			intro: 'Algorithmisches Denken wird oft besser "begriffen", wenn es zunächst losgelöst von der Technik vermittelt wird.',
			points: [
				{ t: 'Planung auf Papier', d: 'Pseudocode, Struktogramme oder UML vor der ersten Zeile Code.' },
				{ t: 'Haptische Methoden', d: 'Algorithmen legen, OOP-Karten, Türme von Hanoi physisch lösen.' },
				{ t: 'Rollenspiele & Metaphern', d: 'Sensoren nachspielen, "Bademeister"-Metapher für Schleifen.' }
			]
		},
		social: {
			label: 'Kooperation & Interaktion',
			icon: MessageCircle,
			intro: 'Der Einzelkämpfer am PC ist ein Auslaufmodell. Austausch fördert das Verständnis.',
			points: [
				{ t: 'Think-Pair-Share', d: 'Erst allein denken, dann Austausch im Paar, dann Plenum.' },
				{ t: 'Gruppen- & Expertenpuzzle', d: 'Arbeitsteilige Gruppenverfahren für komplexe Themen.' },
				{ t: 'Peer-Teaching', d: 'Schüler als Experten oder Tandems aus stark/schwach.' },
				{ t: 'Gemeinsamer Diskurs', d: 'Code-Tracing am Beamer und Vergleichen von Lösungswegen.' }
			]
		},
		project: {
			label: 'Projekte & Exploration',
			icon: Rocket,
			intro: 'Offenere Formate halten die Motivation hoch und fördern Selbstständigkeit.',
			points: [
				{ t: 'Projektarbeit', d: 'Erstellung sinnhafter Produkte (Minispiel, App mit Alltagsbezug).' },
				{ t: 'Exploration', d: 'Offene Aufgaben: Selbstständig herausfinden, was mit Tools möglich ist.' },
				{ t: 'Gamification', d: 'Spielerische Einstiege (mit Balance zum ernsthaften Verständnis).' }
			]
		},
		structure: {
			label: 'Struktur & Differenzierung',
			icon: Layers,
			intro: 'Klare Strukturen sind bei hoher Leistungsheterogenität unverzichtbar.',
			points: [
				{ t: 'Kleinschrittigkeit', d: 'Inhalte in kleine Häppchen zerlegen für Sicherheit.' },
				{ t: 'Digitale Differenzierung', d: 'Lernvideos, LMS und abgestufte Hilfen für individuelles Tempo.' },
				{ t: 'Stationenlernen', d: 'Flexible Kombination aus analogen/digitalen Phasen.' }
			]
		}
	};
</script>

<div class="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">
	<main class="container mx-auto px-4">

		<div class="mb-10">
			<h1 class="text-4xl font-bold tracking-tight mb-3">
				Pädagogische Grundprinzipien
			</h1>
			<p class="text-lg text-muted-foreground">
				Ein Leitfaden für professionellen Informatikunterricht: Von der Theorie zur Praxis.
			</p>
		</div>

		<section class="mb-16">
			<div class="mb-6 flex items-center justify-between">
				<h2 class="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
					Das Didaktische Dreieck
				</h2>
			</div>
			<p class="mb-8 max-w-3xl text-slate-600 dark:text-slate-400">
				Für eine professionelle Unterrichtsgestaltung ist eine klare taxonomische Trennung unerlässlich.
				Hier schaffen wir terminologische Klarheit.
			</p>

			<div class="grid gap-6 md:grid-cols-3">
				{#each definitions as def}
					<Card.Root class="border-t-4 border-t-transparent hover:shadow-lg transition-all" style="border-top-color: currentColor;">
						<Card.Header class="{def.bg} rounded-t-lg pb-4">
							<div class="mt-2 mb-2 flex items-center justify-between">
								<def.icon class="h-6 w-6 {def.color}" />
								<Badge variant="outline" class="bg-white/50 backdrop-blur">{def.question}</Badge>
							</div>
							<Card.Title class="text-lg">{def.title}</Card.Title>
						</Card.Header>
						<Card.Content class="pt-6">
							<p class="text-sm text-slate-600 dark:text-slate-400">{def.desc}</p>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>

		<Separator class="my-16" />

		<section class="mb-16">
			<div class="mb-8">
				<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
					Kernprinzipien
				</h2>
				<p class="mt-2 text-slate-600 dark:text-slate-400">
					Der normative Kompass für zeitgemäßen Informatikunterricht.
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2">
				{#each principles as prin}
					<Card.Root class="flex flex-col overflow-hidden border-l-4 border-l-blue-500">
						<Card.Header class="bg-slate-100/50 pb-4 dark:bg-slate-900/50">
							<div class="flex items-center gap-3">
								<div class="rounded-md bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
									<prin.icon class="h-6 w-6" />
								</div>
								<Card.Title class="text-xl leading-tight">{prin.title}</Card.Title>
							</div>
						</Card.Header>
						<Card.Content class="flex-grow pt-6">
							<ul class="space-y-3">
								{#each prin.content as item}
									<li class="flex items-start text-sm text-slate-700 dark:text-slate-300">
										<span class="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
										<span>{@html item}</span>
									</li>
								{/each}
							</ul>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>

		<section class="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 md:p-10">
			<div class="mb-8 text-center md:text-left">
				<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
					Didaktische Methoden
				</h2>
				<p class="mt-2 text-slate-600 dark:text-slate-400">
					Die "Fahrzeuge", um die didaktischen Prinzipien in die Praxis umzusetzen.
				</p>
			</div>

			<Tabs.Root value="unplugged" class="w-full">
				<Tabs.List class="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1">
					<Tabs.Trigger value="unplugged" class="py-3">Unplugged</Tabs.Trigger>
					<Tabs.Trigger value="social" class="py-3">Kooperation</Tabs.Trigger>
					<Tabs.Trigger value="project" class="py-3">Projekte</Tabs.Trigger>
					<Tabs.Trigger value="structure" class="py-3">Struktur</Tabs.Trigger>
				</Tabs.List>

				<div class="mt-6 min-h-[300px]">
					{#each Object.entries(methods) as [key, data]}
						<Tabs.Content value={key} class="animate-in fade-in slide-in-from-bottom-2 duration-300">
							<Card.Root>
								<Card.Header>
									<div class="flex items-center gap-4">
										<div class="rounded-full bg-slate-100 p-3 dark:bg-slate-800">
											<data.icon class="h-8 w-8 text-slate-700 dark:text-slate-200" />
										</div>
										<div>
											<Card.Title class="text-2xl">{data.label}</Card.Title>
											<Card.Description class="mt-1 text-base">
												{data.intro}
											</Card.Description>
										</div>
									</div>
								</Card.Header>
								<Card.Content>
									<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
										{#each data.points as point}
											<div class="rounded-lg border bg-slate-50/50 p-4 dark:bg-slate-900/50">
												<h4 class="font-semibold text-slate-900 dark:text-slate-100 mb-1">
													{point.t}
												</h4>
												<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
													{point.d}
												</p>
											</div>
										{/each}
									</div>
								</Card.Content>
							</Card.Root>
						</Tabs.Content>
					{/each}
				</div>
			</Tabs.Root>
		</section>

		<div class="mt-16 text-center text-sm text-slate-500">
			<p>Basierend auf didaktischer Forschung und Interviews mit erfahrenen Informatiklehrkräften.</p>
		</div>

	</main>
</div>