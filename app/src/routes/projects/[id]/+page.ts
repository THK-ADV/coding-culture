import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Project } from '../columns';

interface PageData {
	project: Project;
}

const projectFiles = import.meta.glob('/src/lib/data/projects/*.json', { eager: true });

export const load: PageLoad = async ({ params }): Promise<PageData> => {
	const { id } = params;
	let project: Project | undefined;

	for (const path in projectFiles) {
		const content = projectFiles[path] as Project;
		if (content.id === id) {
			project = content;
			break;
		}
	}

	if (!project) {
		throw error(404, 'Projekt nicht gefunden');
	}

	return {
		project: project
	};
};