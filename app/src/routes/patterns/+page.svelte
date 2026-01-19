<script lang="ts">
	import PatternDisplay from './PatternDisplay.svelte';
	import { patterns } from '$lib/data/patterns/content';
	import { citations } from '$lib/data/patterns/content';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Separator } from '$lib/components/ui/separator';

</script>

<div class="mx-auto max-w-4xl p-4 py-8 md:p-12">
	<Accordion.Root type="single" collapsible class="w-full">

		{#each patterns as pattern (pattern.id)} <Accordion.Item value={pattern.id}>
			<Accordion.Trigger
				class="mb-6 pb-4 text-left text-3xl font-bold tracking-tight hover:no-underline lg:text-3xl"
			>
				{pattern.title}
			</Accordion.Trigger>

			<Accordion.Content class="pt-4">
				<PatternDisplay {pattern} />
			</Accordion.Content>
		</Accordion.Item>
		{/each}

	</Accordion.Root>
</div>

<Separator class="my-4" />

<footer class="mx-auto max-w-4xl md:p-12">
	<h2 class="mb-8 text-3xl font-bold tracking-tight">Quellen</h2>

	<ul class="flex flex-col gap-4">
		{#each citations as citation (citation.id)}
			<li id="citation-{citation.id}" class="flex items-start text-base">
        <span class="mr-3 flex-shrink-0 font-mono text-sm text-muted-foreground">
          [{citation.id}]
        </span>
				<span class="text-muted-foreground">
          {@html citation.reference}
        </span>
			</li>
		{/each}
	</ul>
</footer>

<!--section>
	<h2 class="text-3xl font-semibold tracking-tight">Quellen</h2>

	<div class="mt-6">
		<ol class="list-decimal list-outside pl-5">
		</ol>
		<li>Baldasaro, M. M., Maldonado, N., & Baltes, B. (2014). Storytelling to teach cultural awareness: The right story at the right time. <i>LEARNing Landscapes, 7</i>(2), 219-232.</li>
		<li>Bergin, J. (2006). Active learning and feedback patterns. <i>Portland, Oregon: Paper presented at PloP. Retrieved October, 26</i>, 2011.</li>
		<li>Bertels, A., & Deimel, D. (2023, July). Storytelling in the Context of Education: A Pattern Language. In <i>Proceedings of the 28th European Conference on Pattern Languages of Programs</i> (pp. 1-16).</li>
		<li>Connolly, C., Murphy, E., & Moore, S. (2008). Programming anxiety amongst computing students—A key in the retention debate?. <i>IEEE Transactions on Education, 52</i>(1), 52-56.</li>
		<li>Dillon, A. E., Stolk, J. D., Zastavker, Y. V., & Gross, M. D. (2016, June). Motivation is a two-way street: pedagogies employing discussion in addition to lecture display more positive student motivational response. In <i>2016 ASEE Annual Conference & Exposition.</i></li>
		<li>Eckstein, J., Bergin, J., & Sharp, H. (2002). Patterns for active learning. In <i>Proceedings of PLOP</i> (Vol. 2002).</li>
		<li>Eze, C., & Misava, E. (2017). Lecture duration: A risk factor for quality teaching and learning in Higher Education. <i>Integrity Journal of Education and Training, 1,</i> 1.</li>
		<li>Faja, S. (2014). Evaluating Effectiveness of Pair Programming as a Teaching Tool in Programming Courses. <i>Information Systems Education Journal, 12</i>(6), 36-45.</li>
		<li>Hu, Y., Chen, C. H., & Su, C. Y. (2021). Exploring the effectiveness and moderators of block-based visual programming on student learning: A meta-analysis. <i>Journal of Educational Computing Research, 58</i>(8), 1467-1493.</li>
		<li>Iba, T., & Miyake, T. (2010, March). Learning Patterns: a pattern language for creative learning II. In <i>Proceedings of the 1st Asian Conference on Pattern Languages of Programs</i> (pp. 1-6).</li>
		<li>Iba, T., & Sakamoto, M. (2011, October). Learning patterns III: a pattern language for creative learning. In <i>Proceedings of the 18th conference on pattern languages of programs</i> (pp. 1-8).</li>
		<li>Iba, T., Miyake, T., Naruse, M., & Yotsumoto, N. (2009, August). Learning Patterns: a pattern language for active learners. In <i>Conference on Pattern Languages of Programs (PLoP)</i> (Vol. 10, No. 2371736.2371742).</li>
		<li>Lister, R., Fidge, C., & Teague, D. (2009). Further evidence of a relationship between explaining, tracing and writing skills in introductory programming. <i>Acm sigcse bulletin, 41</i>(3), 161-165.</li>
		<li>McNerney, T. S. (1999). <i>Tangible programming bricks: An approach to making programming accessible to everyone</i> (Doctoral dissertation, Massachusetts Institute of Technology).</li>
		<li>Medeiros, R. P., Ramalho, G. L., & Falcão, T. P. (2018). A systematic literature review on teaching and learning introductory programming in higher education. <i>IEEE Transactions on Education, 62</i>(2), 77-90.</li>
		<li>Münster, G. (2017). <i>Konzeption und Implementierung einer alltagstauglichen Infrastruktur für Innovations- und Kollaborationsräume</i> (Master Thesis, TH Köln).</li>
		<li>Nolan, K., & Bergin, S. (2016, November). The role of anxiety when learning to program: a systematic review of the literature. In <i>Proceedings of the 16th koli calling international conference on computing education research</i> (pp. 61-70).</li>
		<li>Paas, F., Renkl, A., & Sweller, J. (Eds.). (2016). <i>Cognitive load theory: A Special issue of educational psychologist</i>. Routledge.</li>
		<li>Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. <i>American psychologist, 55</i>(1), 68.</li>
		<li>Santos, Á., Gomes, A., & Mendes, A. (2013, October). A taxonomy of exercises to support individual learning paths in initial programming learning. In <i>2013 IEEE Frontiers in Education Conference (FIE)</i> (pp. 87-93). IEEE.</li>
		<li>Schwill, A. (1994). Fundamental ideas of computer science. <i>Bulletin-European Association for Theoretical Computer Science, 53,</i> 274-274.</li>
		<li>Szabo, C., & Sheard, J. (2022). Learning theories use and relationships in computing education research. <i>ACM Transactions on Computing Education, 23</i>(1), 1-34.</li>
		<li>Van Merrienboer, J. J., & Sweller, J. (2005). Cognitive load theory and complex learning: Recent developments and future directions. <i>Educational psychology review, 17</i>(2), 147-177.</li>
		<li>Vihavainen, A., Airaksinen, J., & Watson, C. (2014, July). A systematic review of approaches for teaching introductory programming and their influence on success. In <i>Proceedings of the tenth annual conference on International computing education research</i> (pp. 19-26).</li>
	</div>
</section-->