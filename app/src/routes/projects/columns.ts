import type { ColumnDef } from '@tanstack/table-core';

export type Project = {
	id: string;
	name: string;
	description: string;
	product: string;
	content: string[];
	complexity: number;
	language: string[];
	minDuration: number;
	maxDuration: number;
	minGroup: number;
	maxGroup: number;
	type: string;
	materials: string[];
}

export const columns: ColumnDef<Project>[] = [
	{
		accessorKey: 'name',
		header: 'Name'
	},
	{
		accessorKey: 'type',
		header: 'Typ'
	},
	{
		accessorKey: 'language',
		header: 'Sprache'
	},
	{
		accessorKey: 'complexity',
		header: 'Komplexität'
	},
	{
		accessorKey: 'minDuration',
		header: 'Dauer (Min)'
	}
];