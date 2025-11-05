<script>

	import * as Card from '$lib/components/ui/card/';

	const teamMembers = [
		{
			id: 1,
			name: 'Anja Bertels, M. Sc.',
			role: 'Wissenschaftliche Mitarbeiterin',
			link: 'https://www.th-koeln.de/personen/anja.bertels/'
		},
		{
			id: 2,
			name: 'Prof. Dr. Christian Kohls',
			role: 'Professor',
			link: 'https://www.th-koeln.de/personen/christian.kohls/'
		}
	];
</script>

<div class="container mx-auto max-w-4xl py-12 px-4">

	<h1 class="text-4xl font-bold tracking-tight mb-4">
		Über das Projekt
	</h1>

	<p class="text-lg text-muted-foreground mb-8">
		"Coding Culture Oberberg" ist ein Projekt der TH Köln, das Schülerinnen und Schüler im Oberbergischen Kreis für MINT-Fächer, insbesondere die Informatik, begeistern möchte.
	</p>
	<p class="text-lg text-muted-foreground mb-8">
	Auf dieser Webseite finden Sie Materialien und Konzepte, die im Rahmen des Projekts entwickelt und erprobt wurden. Wir stellen alle Inhalte als frei zugängliche Bildungsressourcen zur Verfügung.
	</p>
	<p class="text-lg text-muted-foreground mb-8">
		Unser Ziel ist es, Lehrkräften und Schulen zu ermöglichen, diese Angebote eigenständig und langfristig im Unterricht einzusetzen und so das Interesse an der digitalen Welt nachhaltig zu fördern.
	</p>
	<p class="text-lg text-muted-foreground mb-8">
		Das Projekt wird gefördert durch die <a href="https://www.hans-hermann-voss-stiftung.de/" class="text-neutral-800">Hans Hermann Voss Stiftung</a>.
	</p>

	<h2 class="text-3xl font-semibold tracking-tight mt-12 mb-6">
		Team
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

		{#each teamMembers as member}
			<a href={member.link} target="_blank" rel="noopener noreferrer">
			<Card.Root class="h-full">
				<Card.Header>
					<Card.Title class="text-l">{member.name}</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm text-muted-foreground">
						{member.role}
					</p>
				</Card.Content>
			</Card.Root>
			</a>
		{/each}
	</div>

</div>