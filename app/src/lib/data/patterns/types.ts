interface PatternImage {
	src: string;
	caption: string;
}

interface PatternFigure {
	images: PatternImage[];
	mainCaption: string;
	altDescription?: string;
}

interface RelatedPattern {
	name: string;
	description: string;
}

export interface Citation {
	id: number;
	reference: string;
}

export interface KnownUses {
	title: string;
	description: string;
	figure?: PatternFigure;
	demoLink?: string;
}

export interface Pattern {
	id: string;
	title: string;
	teaserImg?: string;
	context: string;
	problem: string;
	forces: string[];
	solution: string;
	consequences: {
		benefits: string[];
		liabilities: string[];
	};
	knownUses?: KnownUses[];
	relatedPatterns?: RelatedPattern[];
}