<script>
	import * as Table from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { base } from '$app/paths';

	import { Download } from 'lucide-svelte';

	const templates = [
		{
			id: 1,
			name: 'Standard-Präsentation (16:9)',
			category: 'Präsentationen',
			type: 'PPTX',
			fileUrl: '/templates/standard-presentation.pptx'
		},
		{
			id: 2,
			name: 'Projekt-Evaluationsbogen',
			category: 'Evaluationen',
			type: 'DOCX',
			fileUrl: '/templates/project-evaluation.docx'
		},
		{
			id: 3,
			name: 'Meilenstein-Projektbewertung',
			category: 'Projektbewertungen',
			type: 'DOCX',
			fileUrl: '/templates/milestone-review.docx'
		},
		{
			id: 4,
			name: 'Workshop-Anleitung',
			category: 'Anleitungen',
			type: 'DOCX',
			fileUrl: '/templates/workshop-manual.docx'
		},
		{
			id: 5,
			name: 'Feedback-Karten (Druckvorlage)',
			category: 'Karten',
			type: 'PPTX',
			fileUrl: '/templates/feedback-cards.pptx'
		},
		{
			id: 6,
			name: 'Abschlusspräsentation-Vorlage',
			category: 'Präsentationen',
			type: 'PPTX',
			fileUrl: '/templates/final-presentation.pptx'
		}
	];

	function getBadgeVariant(type) {
		if (type === 'PPTX') return 'default';
		if (type === 'DOCX') return 'secondary';
		return 'outline';
	}
</script>

<div class="container mx-auto max-w-5xl py-12 px-4">

	<div class="mb-10">
		<h1 class="text-4xl font-bold tracking-tight mb-3">
			Download-Vorlagen
		</h1>
		<p class="text-lg text-muted-foreground">
			Hier finden Sie eine Sammlung nützlicher Vorlagen (Templates) für Ihre Projekte,
			Präsentationen und Evaluationen. Klicken Sie einfach auf "Herunterladen",
			um die Datei zu speichern.
		</p>
	</div>

	<!-- 6. Die Tabelle mit den Downloads -->
	<div class="border rounded-lg">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<!-- Wir geben der ersten Spalte eine feste Mindestbreite -->
					<Table.Head class="w-[350px]">Vorlage</Table.Head>
					<Table.Head>Kategorie</Table.Head>
					<Table.Head>Dateityp</Table.Head>
					<Table.Head class="text-right">Aktion</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each templates as template (template.id)}
					<Table.Row>
						<Table.Cell class="font-medium">{template.name}</Table.Cell>
						<Table.Cell>{template.category}</Table.Cell>
						<Table.Cell>
							<Badge variant={getBadgeVariant(template.type)}>
								{template.type}
							</Badge>
						</Table.Cell>
						<Table.Cell class="text-right">
							<a href="{base}{template.fileUrl}" download>
								<Button variant="outline" size="sm">
									<Download class="h-4 w-4 mr-2" />
									Herunterladen
								</Button>
							</a>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>

</div>