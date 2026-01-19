<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import {
		Award,
		Lightbulb,
		Check,
		Puzzle,
		Waypoints,
		Globe
	} from 'lucide-svelte';
	const embodimentList = [
		'<strong>Sinnliche Erfahrung:</strong> Statt Code nur auf einem Bildschirm zu sehen, werden Konzepte durch haptische (fühlbare) und spielerische Materialien sinnlich erfahrbar.',
		'<strong>Aktive Exploration:</strong> Lernende können mit physischen Artefakten „herumspielen“, Anordnungen ausprobieren und dynamische Veränderungen von Zuständen direkt wahrnehmen.',
		'<strong>Strukturelle Ähnlichkeit:</strong> Der Lerneffekt ist dann am größten, wenn die körperlichen Bewegungsabläufe eine strukturelle Ähnlichkeit zu den abstrakten Konzepten aufweisen.'
	];
	const complexList = [
		'Die Modellierung von Datenstrukturen',
		'Die Verarbeitung von Listen (z. B. Verkettung)',
		'Komplexe Speichermodelle (z. B. Stapelspeicher/Stack)'
	];
	const pillarItems = [
		{
			title: 'Entwicklung haptischer Materialien',
			description:
				'Es werden spielerische und physische Materialien zum aktiven Explorieren von Informatik-Konzepten, Algorithmen und Datenstrukturen entwickelt und erprobt. (Dies umfasst die Evaluierung bestehender Produkte sowie die Neuentwicklung eigener Materialien).'
		},
		{
			title: 'Durchführung von Workshops',
			description:
				'Die neuen Materialien und Konzepte werden in Workshops für Schülerinnen und Schüler direkt erprobt, sowohl in den Schulen vor Ort als auch auf dem Campus Gummersbach der TH Köln.'
		},
		{
			title: 'Erstellung von OER-Materialien',
			description:
				'Die didaktischen Anleitungen, Workshop-Konzepte und Begleitmaterialien werden evaluiert und aufbereitet.'
		}
	];
</script>

<svelte:head>
	<title>Über das Projekt: Coding Culture Oberberg</title>
</svelte:head>

<main class="mx-auto max-w-4xl p-4 py-12 md:p-16 prose dark:prose-invert lg:prose-lg max-w-none">

	<Alert class="mb-10 border-teal-500 bg-teal-50 text-teal-900 dark:border-teal-600 dark:bg-teal-950 dark:text-teal-200">
		<Award class="h-5 w-5 !text-teal-600" />
		<AlertDescription>
			<strong>Gefördert durch die Hans Hermann Voss Stiftung</strong>
		</AlertDescription>
	</Alert>

	<h1 class="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
		Über das Projekt: Coding Culture Oberberg
	</h1>
	<div class="text-lg text-muted-foreground">
		Viele zentrale Konzepte der Informatik – Algorithmen, Datenstrukturen, Speichermodelle – sind durch einen hohen Abstraktionsgrad gekennzeichnet. Für Lernende gibt es oft kein Äquivalent in der Alltagserfahrung, was den Einstieg in die Programmierung erschwert.
	</div>
	<div class="text-l">
		Genau hier setzt das Projekt <strong>Coding Culture Oberberg</strong> an, gefördert durch die Hans Hermann Voss Stiftung. Das Kernziel ist es, die abstrakten Konzepte der Informatik im wörtlichen Sinne "begreifbar" zu machen und so eine neue, intuitive Lernkultur zu etablieren.
	</div>

	<Separator class="my-12" />

	<section class="mb-12">
		<h2 class="flex items-center text-3xl font-semibold tracking-tight">
			<Lightbulb class="mr-3 h-8 w-8 flex-shrink-0 text-yellow-500" />
			Die Theorie des Embodiments
		</h2>
		<div class="mt-4">
			Der didaktische Ansatz des Projekts basiert auf der Theorie des „Embodiment of Learning“. Diese geht davon aus, dass Wissensproduktion nicht von unserem Körper, unserer Sprache und unserer sozialen Entwicklung getrennt werden kann. Geist und Körper sollten nicht als getrennt, sondern als eine interagierende Einheit gesehen werden <sup><a href="#ref-1" title="Zur Quelle springen">[1]</a></sup>.<br>
			Für das Lernen bedeutet dies: Wenn wir Lerninhalte körperlich erfahren, verankern sie sich tiefer. Mentale Prozesse werden durch körperliche Systeme wie Bewegungen, das motorische System und den Wahrnehmungsapparat unterstützt <sup><a href="#ref-2" title="Zur Quelle springen">[2]</a></sup>. Das Wissen selbst wird verkörpert – „the knowledge itself is embodied“ <sup><a href="#ref-3" title="Zur Quelle springen">[3]</a></sup>.<br>
			Für die Informatikdidaktik ist dieser Ansatz besonders relevant:
		</div>

		<div class="my-6 grid grid-cols-1 gap-4">
			{#each embodimentList as item}
				<div class="flex items-start rounded-lg border bg-background p-4 not-prose">
					<Check class="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
					<span class="text-base text-muted-foreground">{@html item}</span>
				</div>
			{/each}
		</div>

		<div>
			Ein einfaches Beispiel ist der Ablauf einer for-Schleife (einer zentralen Kontrollstruktur), der durch wiederholte Operationen auf physische Gegenstände, etwa das Sortieren von Bausteinen, direkt erfahren werden kann.
		</div>
	</section>

	<section class="mb-12">
		<h2 class="flex items-center text-3xl font-semibold tracking-tight">
			<Puzzle class="mr-3 h-8 w-8 flex-shrink-0 text-blue-500" />
			Komplexe Konzepte und Metaphern
		</h2>
		<div class="mt-4">
			Während es für einfache Kontrollstrukturen bereits Materialien für das Vorschulalter gibt, geht "Coding Culture Oberberg" einen entscheidenden Schritt weiter. Das Projekt zielt darauf ab, <strong>komplexere Strukturen</strong> zugänglich zu machen, wie zum Beispiel:
		</div>

		<div class="my-6 grid grid-cols-1 gap-4">
			{#each complexList as item}
				<div class="flex items-start rounded-lg border bg-background p-4 not-prose">
					<Check class="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
					<span class="text-base text-muted-foreground">{item}</span>
				</div>
			{/each}
		</div>

		<div>
			Um diese Abstraktionen zu vermitteln, spielen <strong>Metaphern</strong> eine zentrale Rolle im Erkenntnisprozess <sup><a href="#ref-4" title="Zur Quelle springen">[4]</a></sup>. Das Projekt greift etablierte Metaphern aus der Didaktik der Informatik auf <sup><a href="#ref-5" title="Zur Quelle springen">[5]</a></sup> und entwickelt für sie anschauliche, physische und „begreifbare“ Materialien. Ein Stapelspeicher wird so zu einem echten, physischen Stapel, dessen Operationen (push/pop) man manuell durchführen muss.
		</div>
	</section>

	<section class="mb-12">
		<h2 class="flex items-center text-3xl font-semibold tracking-tight">
			<Waypoints class="mr-3 h-8 w-8 flex-shrink-0 text-purple-500" />
			Die drei Säulen des Projekts
		</h2>
		<div class="mt-4">
			Um diese Ziele zu erreichen und eine nachhaltige "Coding Culture" in der Region zu verankern, werden im Rahmen des Projekts drei zentrale Maßnahmen umgesetzt:
		</div>

		<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 not-prose">
			{#each pillarItems as item, i}
				<Card.Root class="flex flex-col">
					<Card.Header>
						<Card.Title class="flex items-center">
							<span
								class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white"
							>
								{i + 1}
							</span>
							<span class="text-lg">{@html item.title}</span>
						</Card.Title>
					</Card.Header>
					<Card.Content class="flex-grow text-base text-muted-foreground">
						{@html item.description}
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</section>

	<Separator class="my-12" />

	<Alert class="border-green-600 bg-green-50 text-green-900 dark:border-green-700 dark:bg-green-950 dark:text-green-200 not-prose">
		<Globe class="h-8 w-8 !text-green-600" />
		<AlertTitle class="text-2xl font-semibold">
			Das Ziel
		</AlertTitle>
		<AlertDescription class="text-lg">
			Der nachhaltige Kern des Projekts liegt im Open-Source-Gedanken. Alle erfolgreichen Materialien, Aufgabenstellungen und Workshopkonzepte werden umfassend dokumentiert und als <strong>frei zugängliche Bildungsressourcen (Open Educational Ressource, OER)</strong> veröffentlicht.
			Dadurch wird sichergestellt, dass Lehrkräfte und Schulen über das Projektende hinaus eigenständig und langfristig mit den im Projekt entwickelten Angeboten arbeiten können.
		</AlertDescription>
	</Alert>

	<Separator class="my-12" />

	<section>
		<h2 class="text-3xl font-semibold tracking-tight">Quellen</h2>

		<div class="mt-6">
			<ol class="list-decimal list-outside pl-5">
				<li id="ref-1">Rambusch, J., & Ziemke, T. (2005, July). The role of embodiment in situated learning. In <em>Proceedings of the 27th Annual Conference of the Cognitive Science Society</em> (pp. 1803-1808). Mahwah, NJ: Lawrence Erlbaum.</li>
				<li id="ref-2">Glenberg, A. M. (2010). Embodiment as a unifying perspective for psychology. <em>Wiley interdisciplinary reviews: Cognitive science, 1</em>(4), 586-596.</li>
				<li id="ref-3">Alibali, M. W., & Nathan, M. J. (2012). Embodiment in mathematics teaching and learning: Evidence from learners' and teachers' gestures. <em>Journal of the learning sciences, 21</em>(2), 247-286.</li>
				<li id="ref-4">Junge, M. (Ed.). (2010). <em>Metaphern in Wissenskulturen.</em> VS, Verlag für Sozialwiss..</li>
				<li id="ref-5">Schubert, S., & Schwill, A. (2011). Didaktik der Informatik. In <em>Didaktik der Informatik</em> (pp. 1-30). Heidelberg: Spektrum Akademischer Verlag.</li>
			</ol>
		</div>
	</section>

</main>