// src/routes/projects/[id]/+page.ts

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Project } from '../columns'; // Importieren Sie den Projekt-Typ

// Definieren Sie den Datentyp, den diese Seite erhält
interface PageData {
	project: Project;
}

// Laden Sie alle Projekt-JSONs, genau wie in der Übersicht
const projectFiles = import.meta.glob('/src/lib/data/projects/*.json', { eager: true });

export const load: PageLoad = async ({ params }): Promise<PageData> => {
	const { id } = params; // Die Projekt-ID aus der URL

	// Suche in allen geladenen Projekt-Dateien nach der passenden ID
	let project: Project | undefined;

	for (const path in projectFiles) {
		const content = projectFiles[path] as Project;
		// Annahme: Die ID in der JSON-Datei muss mit der ID in der URL übereinstimmen
		if (content.id === id) {
			project = content;
			break;
		}
	}

	if (!project) {
		// Wenn kein passendes Projekt gefunden wurde, geben Sie einen 404-Fehler zurück
		throw error(404, 'Projekt nicht gefunden');
	}

	return {
		project: project
	};
};