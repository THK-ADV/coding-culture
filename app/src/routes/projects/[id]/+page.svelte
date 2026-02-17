<script lang="ts">
    import type {PageData} from './$types';
    import {Badge} from '$lib/components/ui/badge';
    import * as Card from '$lib/components/ui/card';
    import {base} from '$app/paths';
    import {
        ArrowLeft,
        Ruler,
        Users,
        Clock,
        Code,
        BookOpen,
        Tag, Download, FileDown, Link2, ExternalLink
    } from 'lucide-svelte';
    import {Button} from "$lib/components/ui/button";
    import type {Project} from "../columns";

    export let data: PageData;

    function formatComplexity(level: number): string {
        const labels = ['Einfach', 'Mittel', 'Schwer'];
        return labels[level - 1] || 'Unbekannt';
    }

    function downloadAllFiles(project: Project) {
        if (!project.files || project.files.length === 0) return;

        project.files.forEach((file, index) => {
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = `${base}${file.url}`;
                link.download = file.name || 'download';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, index * 200);
        });
    }
</script>

<svelte:head>
    <title>{data.project?.name ? `${data.project.name} | Details` : 'Projekt'}</title>
</svelte:head>

{#if data.project}
    {@const project = data.project}

    <main class="mx-auto max-w-6xl p-6 py-12 space-y-12">

        <div class="space-y-6">
            <a href="{base}/projects"
               class="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft class="mr-2 h-4 w-4"/>
                Zurück zur Übersicht
            </a>

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div class="space-y-2">
                    <Badge variant="outline" class="uppercase tracking-wider px-3">{project.type}</Badge>
                    <h1 class="text-4xl font-bold tracking-tight lg:text-5xl">
                        {project.name}
                    </h1>
                    <p class="text-xl text-muted-foreground max-w-2xl">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <div class="flex items-center space-x-3">
                <div class="p-2 bg-primary/10 rounded-lg text-primary">
                    <Ruler class="h-5 w-5"/>
                </div>
                <div>
                    <p class="text-xs text-muted-foreground uppercase font-semibold">Produkt</p>
                    <p class="font-medium">{project.product}</p>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <div class="p-2 bg-primary/10 rounded-lg text-primary"><Code class="h-5 w-5"/></div>
                <div>
                    <p class="text-xs text-muted-foreground uppercase font-semibold">Level</p>
                    <p class="font-medium">{formatComplexity(project.complexity)}</p>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <div class="p-2 bg-primary/10 rounded-lg text-primary">
                    <Clock class="h-5 w-5"/>
                </div>
                <div>
                    <p class="text-xs text-muted-foreground uppercase font-semibold">Dauer</p>
                    <p class="font-medium">{project.minDuration}–{project.maxDuration} Min</p>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <div class="p-2 bg-primary/10 rounded-lg text-primary">
                    <Users class="h-5 w-5"/>
                </div>
                <div>
                    <p class="text-xs text-muted-foreground uppercase font-semibold">Gruppe</p>
                    <p class="font-medium">{project.minGroup}–{project.maxGroup} Pers.</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div class="lg:col-span-8 space-y-10">
                <section>
                    <h2 class="text-xl font-semibold pb-5 text-foreground">
                        Ablauf & Inhalt
                    </h2>
                    <div class="space-y-2">
                        {#each project.content as paragraph, i}
                            <div class="group flex gap-4 py-4 border-b border-muted/50 last:border-none">
        <span class="text-lg font-bold tabular-nums text-foreground/70 min-w-[1.5rem]">
          {i + 1}.
        </span>
                                <p class="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                                    {paragraph}
                                </p>
                            </div>
                        {/each}
                    </div>
                </section>

                <section class="space-y-2">
                    <div class="flex items-center justify-between pb-5">
                        <h2 class="text-xl font-semibold text-foreground">Materialien & Ressourcen</h2>

                        {#if project.files && project.files.length > 1}
                            <button
                                    type="button"
                                    on:click={downloadAllFiles(project)}
                                    class="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md border bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                Alle herunterladen ({project.files.length})
                            </button>
                        {/if}
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#if project.files}
                            {#each project.files as file}
                                <a
                                        href="{base}{file.url}" download
                                        class="flex items-center p-3 rounded-xl border bg-card hover:bg-accent hover:text-accent-foreground transition-all group relative overflow-hidden"
                                >
                                    <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <FileDown class="h-5 w-5"/>
                                    </div>
                                    <div class="flex flex-col flex-1 min-w-0">
										<span class="text-sm font-semibold truncate group-hover:text-accent-foreground">
											{file.name}
										</span>
                                        <span class="text-xs text-muted-foreground font-normal">
											{file.type} • {file.size}
										</span>
                                    </div>

                                    <div class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Download class="h-4 w-4 text-muted-foreground"/>
                                    </div>
                                </a>
                            {/each}
                        {/if}

                        {#if project.links}
                            {#each project.links as link}
                                <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex items-center p-3 rounded-xl border bg-card hover:bg-accent hover:text-accent-foreground transition-all group relative"
                                >
                                    <div class="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mr-3 text-muted-foreground group-hover:bg-muted-foreground group-hover:text-secondary transition-colors">
                                        <Link2 class="h-5 w-5"/>
                                    </div>

                                    <div class="flex flex-col flex-1 min-w-0">
										<span class="text-sm font-semibold truncate">
											{link.label}
										</span>
                                        <span class="text-xs text-muted-foreground font-normal">
											{link.platform}
										</span>
                                    </div>

                                    <div class="ml-2 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                                        <ExternalLink class="h-3.5 w-3.5"/>
                                    </div>
                                </a>
                            {/each}
                        {/if}
                    </div>
                </section>
            </div>

            <aside class="lg:col-span-4 space-y-6">
                <Card.Root class="overflow-hidden border-none shadow-md">
                    <Card.Header>
                        <Card.Title class="text-lg flex items-center">
                            <BookOpen class="mr-2 h-5 w-5 text-primary"/>
                            Materialien
                        </Card.Title>
                    </Card.Header>
                    <Card.Content>
                        <ul class="space-y-3">
                            {#each project.materials as material}
                                <li class="flex items-start text-base text-muted-foreground">
                                    • {material}
                                </li>
                            {/each}
                        </ul>
                    </Card.Content>
                </Card.Root>

                <Card.Root class="border-none shadow-md">
                    <Card.Header>
                        <Card.Title class="text-lg flex items-center">
                            <Tag class="mr-2 h-5 w-5"/>
                            Sprachen
                        </Card.Title>
                    </Card.Header>
                    <Card.Content>
                        <div class="flex flex-wrap gap-2">
                            {#each project.language.slice().sort() as lang}
                                <Badge variant="secondary">{lang}</Badge>
                            {/each}
                        </div>
                    </Card.Content>
                </Card.Root>
            </aside>

        </div>
    </main>
{/if}