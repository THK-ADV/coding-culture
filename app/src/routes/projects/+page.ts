import type { PageLoad } from './$types';
import type { Project } from './columns';

interface PageData {
	projects: Project[];
	uniqueLanguages: string[];
	uniqueTypes: string[];
	uniqueProducts: string[];
}

export const load: PageLoad = async (): Promise<PageData> => {
	const files = import.meta.glob('/src/lib/data/projects/*.json', { eager: true });
	const projects: Project[] = [];
	for (const file in files) {
		const content = files[file] as Project;
		if (content && content.id && content.name) {
			projects.push(content);
		} else {
			console.warn(`File ${file} is not a valid project file. It must contain an id and a name.`);
		}
	}

	const allLanguages = projects.flatMap(p => p.language);
	const uniqueLanguages = new Set(allLanguages);
	const types = new Set(projects.map(p => p.type));
	const products = new Set(projects.map(p => p.product));

	return {
		projects: projects,
		uniqueLanguages: Array.from(uniqueLanguages).flat(),
		uniqueTypes: Array.from(types),
		uniqueProducts: Array.from(products)
	};
};
