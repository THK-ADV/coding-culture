import type { Citation, Pattern } from './types';

export const patterns: Pattern[] = [
	{
		id: 'code-without-code',
		title: 'Code Without Code',
		description: 'Präsentieren Sie zunächst codebasierte Konzepte ohne Code, sondern mit physischen, greifbaren Objekten.',
		context:
			'Im Rahmen eines Low-Level-Workshops sollen den Teilnehmenden neue Informatikkonzepte, wie z. B. Algorithmen, vermittelt werden. Der Workshop richtet sich an Studierende ohne Vorkenntnisse. Der Workshop konzentriert sich hauptsächlich auf die Vermittlung von coding-basierten Konzepten und wird von einem Informatikexperten geleitet.',
		problem:
			'Den Teilnehmenden fällt es schwer, neue Konzepte zu erfassen und zu verstehen, wenn diese direkt in Codeform präsentiert und angewendet werden. Zudem ist die Darstellung im Code nicht immer mit dem verknüpft, was tatsächlich passiert. Dies kann zu Frustration führen und die Motivation der Teilnehmenden verringern, aktiv am Workshop teilzunehmen.',
		forces: [
			'<ul><li><strong>Vorkenntnisse:</strong></li> Die Teilnehmenden haben keine oder unterschiedlich ausgeprägte Vorkenntnisse im Bereich der Informatik, zum Beispiel Kenntnisse über Algorithmen oder Programmiersprachen.',
			'<li><strong>Komplexität:</strong></li> Verschiedene Algorithmen oder Konzepte, die im Workshop behandelt werden sollen, können aufgrund ihrer Komplexität nicht einsteigerfreundlich vermittelt werden.',
			'<li><strong>Vorbereitung der Teilnehmenden:</strong></li> Da es sich um einen Low-Level-Workshop handelt, kann von den Teilnehmenden keine standardisierte Vorbereitung erwartet werden.',
			'<li><strong>Didaktische Qualität:</strong></li> Die Leitung des Workshops ist möglicherweise nicht in der Lage, komplexe Inhalte auf verständliche Weise zu vermitteln.',
			'<li><strong>Aufmerksamkeitsspanne:</strong></li></ul> Eine kurze Aufmerksamkeitsspanne kann das Lernen behindern, insbesondere bei neuen Konzepten.'
		],
		solution:
			'<i>Präsentieren Sie coding-basierte Konzepte zunächst ohne Code, sondern stattdessen mit physischen, greifbaren Objekten.</i><br>' +
			'Anstatt neue Konzepte direkt in Form von Code zu präsentieren, werden diese zunächst mit physischen Objekten visualisiert. Dies soll jedoch eine codebasierte Implementierung nicht ersetzen, sondern vielmehr als zusätzliche Ebene des Workshops dienen. Dies ist besonders nützlich als Einführung in ein neues Thema <sup>[14]</sup>.' +
			'Eine mögliche Umsetzung der beschriebenen Lösung im Kontext eines Coding-Workshops könnte die Erstellung von Algorithmen aus Schnipseln von Papier sein. Die einzelnen Papierstücke repräsentieren verschiedene Bausteine wie If-Statements, Schleifen oder Variablen. Wenn beispielsweise ein Algorithmus wie die Berechnung eines Alters basierend auf dem Geburtsjahr im Rahmen des Workshops erlernt werden soll, können sich die Teilnehmenden auf das Lösen des algorithmischen Problems konzentrieren und frei mit den Bausteinen experimentieren, ohne durch Code oder einen Compiler eingeschränkt zu sein.',
		consequences: {
			benefits: [
				'<ul><li>Die Visualisierung von Konzepten durch physische Objekte ermöglicht es, die <strong>Komplexität</strong> des Workshops zu reduzieren.</li>',
				'<li>Eine greifbarere Visualisierung erhöht das <strong>Engagement</strong> der Teilnehmenden <sup>[14]</sup>.</li>',
				'<li>Die Visualisierung durch physische Objekte ist <strong>unabhängig von Programmiersprachen</strong> und deren Syntax.</li>',
				'<li>Die <strong>Hürde für das Engagement</strong> von Teilnehmenden mit geringen oder keinen Vorkenntnissen wird verringert, was zu einer erhöhten <strong>Einsteigerfreundlichkeit</strong> führt <sup>[14]</sup>.</li>',
				'<li>Eine physische visuelle Darstellung erhöht die <strong>Merkfähigkeit</strong> neuer Inhalte.</li>',
				'<li>Die physische Beschaffenheit ermöglicht ein <strong>exploratives</strong> Entdecken neuer Konzepte.</li>',
				'<li>Das anfängliche Erkunden eines neuen Konzepts in physischer Form reduziert die erforderliche <strong>Transferleistung</strong> zur codebasierten Darstellung.</li>',
				'<li>Da es keinen echten Code oder Compiler gibt, entfällt der zusätzliche <strong>Overhead und die Verwirrung durch potenzielle Fehlermeldungen</strong> beim Versuch, ein Problem zu lösen.</li>',
				'<li>Die Verwendung physischer Objekte anstelle eines Computers ermöglicht einen <strong>Medienwechsel</strong> im Workshop.</li></ul>'
			],
			liabilities: [
				'<ul><li>Der erforderliche <strong>Vorbereitungsaufwand</strong>, insbesondere für den ersten Workshop, steigt.</li>',
				'<li>Es wird mehr <strong>Zeit</strong> innerhalb des Workshops benötigt, um Inhalte zu vermitteln.</li>',
				'<li>Physische Objekte sind für Teilnehmende mit <strong>motorischen Beeinträchtigungen</strong> schwierig zu nutzen.</li>',
				'<li><strong>Komplexe Konzepte</strong> oder Algorithmen können nicht immer vollständig durch physische Objekte dargestellt werden.</li>',
				'<li>Physische Objekte können vom eigentlichen Inhalt <strong>ablenken</strong>, da sie Teilnehmende dazu verleiten können, herumzuspielen, anstatt sich auf den eigentlichen Inhalt zu konzentrieren.</li>',
				'<li>Die <strong>Ernsthaftigkeit</strong> von Konzepten kann verloren gehen. Insbesondere bei erfahrenen Teilnehmenden kann dies zu Langeweile und dem Gefühl führen, nichts zu lernen.</li>',
				'<li>Übermäßige <strong>Freiheitsgrade</strong> bei physischen Coding-Darstellungen können dazu führen, dass Teilnehmende Aktionen ausführen, die in echtem Code nicht machbar sind, was potenziell Fehlvorstellungen fördert und den Übergang zur praktischen Implementierung behindert.</li>',
				'<li>Teilnehmende sind nicht immer in der Lage, Probleme in ihrer Lösung selbst zu identifizieren, daher ist eine <strong>externe Validierung</strong> durch eine Lehrkraft erforderlich.</li></ul>'
			]
		},
		knownUses: [{
			title: 'Coding Culture',
			description:
				'Im Rahmen des Forschungsprojekts „Coding Culture Oberberg“ wurde ein Workshop mit Schwerpunkt auf Sortieralgorithmen durchgeführt. Eines der Ziele war die Vermittlung des Bubble-Sort-Algorithmus. Bevor dieser jedoch in codebasierter Form präsentiert wurde, wurde er mithilfe von Spielbausteinen visualisiert, die in Abbildung 1 dargestellt sind. Zunächst konnten die Teilnehmenden verschiedene Sortierkonzepte durch die Verwendung von Spielbausteinen unterschiedlicher Höhe ausprobieren. Zu diesem Zweck wurde der Ablauf des Bubble-Sort-Algorithmus anschließend von der Workshop-Leitung anhand der Spielbausteine visualisiert. Bevor dieses Konzept dann auf eine codebasierte Darstellung übertragen wurde, hatten die Teilnehmenden Zeit, den Ablauf mit ihren eigenen Spielbausteinen nachzuspielen.',
			demoLink: 'https://th-koeln.sciebo.de/s/l3q4BJ5xdoyTI9T',
			figure: {
				images: [
					{ src: '/images/lego-1.jpg', caption: 'Initialzustand' },
					{ src: '/images/lego-2.jpg', caption: 'Erster Durchlauf' },
					{ src: '/images/lego-3.jpg', caption: 'Zweiter Durchlauf' },
					{ src: '/images/lego-4.jpg', caption: 'Endzustand' }
				],
				mainCaption: 'Mehrere Spielbausteine mit unterschiedlichen Höhen zur Visualisierung von Sortieralgorithmen.',
				altDescription:
					'Ein Bild von mehreren Spielbausteinen mit unterschiedlichen Höhen, die im Rahmen eines Informatik-Workshops verwendet werden, um Sortieralgorithmen zu visualisieren.'
			}
		}],
		relatedPatterns: [
			{
				name: 'Building Materials <sup>[16]</sup>',
				description:
					'Um den Teilnehmenden beispielsweise den Aufbau von Algorithmen in papierbasierter Form zu ermöglichen, sind Baumaterialien wie Papier oder Bausteine erforderlich.'
			},
			{
				name: 'Prototyping <sup>[11]</sup>',
				description:
					'Die Reduzierung des Overheads durch den Verzicht auf reale Code-Syntax unterstützt die Exploration eines Themas und kann daher genutzt werden, um Ideen in einem ersten Prototyp auszuprobieren.'
			}
		]
	},
	{
		id: 'hands-on-first',
		title: 'Hands On First',
		description: 'Einführung eines ersten praktischen Teils als Ausgangspunkt des Workshops.',
		context:
			'Als Teil eines Coding-Workshops ist es das Hauptziel der Lehrenden, die Teilnehmenden motiviert und engagiert zu halten. Gleichzeitig sollen die Teilnehmenden praktische Erfahrungen mit den erlernten Konzepten sammeln. Bei der Planung des Ablaufs eines Workshops ziehen die Lehrenden verschiedene etablierte Ansätze in Betracht.',
		problem:
			'Das traditionelle Design beinhaltet einen anfänglichen theoretischen Input mit späterer praktischer Anwendung. Dieses Workshop-Design verringert die Motivation der Teilnehmenden, da sie darauf warten müssen, eigenständig arbeiten zu können <sup>[5]</sup>. Dies kann zu einer Abnahme der Einsatzbereitschaft der Teilnehmenden im Workshop führen.',
		forces: [
			'<ul><li><strong>Zielgruppe:</strong> Besonders bei einer jüngeren Zielgruppe ist es wichtig, sie früh abzuholen, da sie aufgrund einer kürzeren Aufmerksamkeitsspanne schneller die Motivation verlieren. Die verringerte Motivation verschärft zudem ihre ohnehin begrenzte Aufmerksamkeitsspanne, was die Herausforderung erhöht, eine aktive Teilnahme aufrechtzuerhalten.</li>',
			'<li><strong>Motivation:</strong> Die Motivation der Teilnehmenden ist entscheidend für den Erfolg und die Durchführung des Workshops.</li>',
			'<li><strong>Erster Eindruck:</strong> Während eines Workshops liegt der Fokus auf dem einleitenden Teil, da dieser maßgeblich für den Erfolg und die Atmosphäre innerhalb des Workshops verantwortlich ist und daher Priorität hat.</li>',
			'<li><strong>Komplexität:</strong> Bei der Vermittlung komplexer Themen können gewisse Vorkenntnisse erforderlich sein.</li>',
			'<li><strong>Redundanzen:</strong> Je nach Vorkenntnissen der Teilnehmenden kann ein frontaler Input Redundanzen enthalten und somit die Motivation einiger Teilnehmender in stärkerem Maße verringern.</li>',
			'<li><strong>Lernpräferenzen:</strong> Unterschiedliche Teilnehmende haben unterschiedliche Präferenzen hinsichtlich der Wissensvermittlung. Obwohl diese Präferenzen den tatsächlichen Lernprozess nicht beeinflussen, können sie die Motivation der Teilnehmenden beeinflussen.</li>',
			'<li><strong>Interaktion:</strong> Frontaler Input ermöglicht den Teilnehmenden nur eine sehr begrenzte Interaktion. </li></ul>'
		],
		solution:
			'<i>Führen Sie einen ersten praktischen Teil als Startpunkt des Workshops ein.</i><br>' +
			'Anstelle eines frontalen Inputs als Einleitung sollte der Workshop mit einem praktischen Teil beginnen. Diese Praxisphase konzentriert sich auf die interaktive Auseinandersetzung mit dem jeweiligen Thema. Die Lehrkraft sollte die interaktive Erkundung des Themas ermöglichen und als Unterstützung für die Lernenden fungieren, falls Probleme oder Barrieren auftreten. Dieser Ansatz wird auch durch die Lernorientierung „Konstruktivismus“ gestützt, die Lernen als Prozess beschreibt, in dem Lernende Wissen aktiv konstruieren. Der Lernende ist ein aktiver Teilnehmer am Prozess und benötigt Engagement <sup>[22]</sup>. Da diese Lösung einen anfänglichen Hands-on-Teil beschreibt, kann hier das Beispiel aus dem Muster <i>Code without Code</i> angewendet werden. Im Kontext des Erlernens grundlegender Algorithmen können die Teilnehmenden frei mit den vorhandenen Bausteinen experimentieren, um ein erstes Verständnis für ein neues Thema zu bekommen. Danach sollte eine weitere Erklärung durch die Workshop-Leitung erfolgen. Für dieses fortlaufende Beispiel ist es wichtig zu beachten, dass die Lösung von <i>Hands-on first</i> nicht nur auf das praktische Arbeiten mit physischen Objekten beschränkt ist, sondern auch eine erste Erkundung im Code ermöglichen kann.',
		consequences: {
			benefits: [
				'<ul><li>Ein anfänglicher praktischer Teil ermöglicht es der Workshop-Leitung, einen <strong>ersten Eindruck</strong> vom kognitiven Niveau und den Vorkenntnissen der Teilnehmenden zu gewinnen, um den Workshop entsprechend anzupassen.</li>',
				'<li>Das eigenständige Erkunden eines Themas unterstützt <strong>individuelle Lerngeschwindigkeiten</strong>.</li>',
				'<li>Direktes praktisches Arbeiten (Hands-on) mit einem Thema <strong>erhöht die Motivation</strong> der Teilnehmenden, insbesondere bei einer jüngeren Zielgruppe.</li>',
				'<li>Für die folgenden Teile des Workshops können die Teilnehmenden auf ihre <strong>praktischen Erfahrungen</strong> zurückgreifen, was zu Erfolgserlebnissen und positiven Emotionen führen kann.</li>',
				'<li>Ein praktischer Einstieg mit optionaler Anleitung durch eine Lehrkraft unterstützt <strong>erfahrungsbasiertes Lernen</strong>.</li>',
				'<li>Eine praktische Einführung kann genutzt werden, um ein neues Thema zu vermitteln, aber auch um <strong>Vorkenntnisse zusammenzufassen und abzurufen</strong>.</li></ul>'
			],
			liabilities: [
				'<ul><li><strong>Abhängig vom Thema und den Vorkenntnissen</strong> ist eine praktische Einführung unter Umständen nicht möglich.</li>',
				'<li>Eigenständiges Arbeiten <strong>erfordert</strong> ein gewisses Maß an <strong>Vorkenntnissen</strong>.</li>',
				'<li>Ein praktischer Teil zu Beginn kann <strong>falsche Erwartungen</strong> für den Rest des Workshops wecken.</li>',
				'<li>Es ist eine zusätzliche <strong>Vorbereitung</strong> seitens der Workshop-Leitung erforderlich.</li>',
				'<li>Lernende könnten <strong>zu schüchtern sein</strong>, um die Workshop-Leitung um Unterstützung zu bitten.</li>',
				'<li>Für einige Teilnehmende könnte ein anfänglicher praktischer Teil <strong>weniger Spaß</strong> machen und somit ihre Motivation behindern.</li></ul>'
			]
		},
		knownUses: [{
			title: 'Hour of Code',
			description:
				'Die „Hour of Code“ ist eine internationale Initiative zur Förderung der Informatik im Bildungskontext. Konkret handelt es sich um ein Konzept, das verschiedene Aktivitäten und Lernvideos bereitstellt, um Lernenden aller Niveaus innerhalb einer Stunde einen Einblick in die Programmierung zu geben. Hour of Code umfasst eine umfangreiche Sammlung verschiedener Lernressourcen und Aufgaben, die von interessierten Lehrkräften nach der Anmeldung zu einer Veranstaltung genutzt werden können. Dank des gemeinschaftsorientierten Ansatzes wird diese Sammlung regelmäßig erweitert. Hour of Code wird bereits von über 400 Partnern und über 20.000 Lehrkräften genutzt. Die Abbildung zeigt eine beispielhafte Übersicht über einige der angebotenen Aktivitäten.<br>' +
				'Die „Hour of Code“-Initiative orientiert sich am „Hands-on First“-Ansatz, indem sie den Lernenden interaktive Aktivitäten, Aufgaben und Lernvideos zur Verfügung stellt, die darauf abzielen, Konzepte der Computerprogrammierung innerhalb eines kurzen Zeitrahmens zu entmystifizieren. Dieser Ansatz betont das aktive Engagement und die praktische Erkundung, sodass die Lernenden schnell in Programmierkonzepte eintauchen und mit echten Code-Beispielen experimentieren können.',
			figure: {
				images: [
					{
						src: '/images/hourofcode.png',
						caption: 'Eine Sammlung möglicher „Hour of Code“-Coding-Aktivitäten'
					},
					{
						src: '/images/hoc-application.png',
						caption: 'Beispielhafte Hour of Code Aufgabe „Hello World: Transformers One“'
					}
				],
				mainCaption:
					'Die Anwendung „Hour of Code“, die aus kleineren individuellen Lernaufgaben besteht.',
				altDescription:
					'Das Bild zeigt die Anwendung Hour of Code, die aus mehreren kleineren Lernaufgaben für den Einstieg in die Programmierung besteht.'
			},
			demoLink: 'https://code.org/hourofcode'
		}],
		relatedPatterns: [
			{
				name: 'First Steep <sup>[12]</sup>',
				description:
					'<i>First Steep</i> unterstützt die Idee, direkt in ein interessant klingendes Thema einzusteigen und dabei der eigenen Intuition zu folgen. Diese Idee deckt sich mit der Lösung von <i>Hands-on first</i>, welche die explorative Einführung in ein neues Thema unterstützt.'
			},
			{
				name: 'Prototyping <sup>[11]</sup>',
				description:
					'Das Prototyping eigener Ideen kann den Aspekt der Erkundung eines neuen Themas unterstützen. Teilnehmende können so ihre Ideen validieren oder iterieren.'
			},
			{
				name: 'Students Decide <sup>[6]</sup>',
				description:
					'<i>Students Decide</i> unterstützt die Idee, dass Studierende das Thema einer Unterrichtseinheit basierend auf ihren Interessen und Erwartungen mitbestimmen. Dies kann auch auf die Struktur eines Coding-Workshops angewendet werden.'
			}
		]
	},
	{
		id: 'teamwork',
		title: 'Teamwork Makes The Dream Work',
		description: 'Führen Sie kollaborative Ansätze in Programmier-Workshops ein.',
		context: 'In Coding-Workshops gibt es eine Vielzahl potenzieller Lehrformate. Der traditionelle Ansatz zur Wissensvermittlung stützt sich auf die eigenständige Anwendung von Lösungen auf bereitgestellte Aufgaben.',
		problem: 'Wenn Workshop-Teilnehmende einzeln an Aufgaben arbeiten, können sie nur auf ihr eigenes Kompetenzprofil zurückgreifen und somit nur ihre eigenen Stärken und Schwächen festigen. Es ist nicht möglich, vom Wissen anderer Teilnehmender zu profitieren.',
		forces: [
			'<ul><li><strong>Motivation:</strong> Das häufige Erreichen von Sackgassen bei der Problemlösung kann demotivierend sein, insbesondere wenn Lernende das Gefühl haben, dass ihnen die Ressourcen oder die Anleitung fehlen, um Hindernisse effizient zu überwinden.</li>',
			'<li><strong>Isolierte Lernerfahrung:</strong> Ohne Gelegenheiten für Diskussion und Zusammenarbeit können sich Lernende auf ihrem Lernweg isoliert fühlen, was ihre Fähigkeit behindert, Konzepte tiefgehend zu erforschen.</li>',
			'<li><strong>Begrenzte Diskussionsmöglichkeiten:</strong> In einem traditionellen Workshop-Setting dient die Lehrkraft in der Regel als einziger Ansprechpartner für Fragen und Diskussionen. Diese Einschränkung begrenzt die Vielfalt an Perspektiven und Lösungen, die den Lernenden zur Verfügung stehen.</li>',
			'<li><strong>Abhängigkeit von der Lehrkraft:</strong> Die ausschließliche Abhängigkeit von der Lehrkraft schafft eine hierarchische Lernumgebung, die Lernende davon abhalten kann, Hilfe zu suchen, wodurch ihr Wachstum und ihr Verständnis eingeschränkt werden.</li></ul>'
		],
		solution: '<i>Führen Sie kollaborative Ansätze in Coding-Workshops ein.</i><br>Kollaborative Ansätze wie Pair Programming und Gruppenaufgaben ermutigen Teammitglieder, sich aktiv einzubringen, Wissen zu teilen und Coding-Herausforderungen gemeinsam anzugehen. Dieser Prozess fördert das kollektive Lernen und die gegenseitige Unterstützung unter den Teilnehmenden <sup>[8]</sup>.<br>Basierend auf den vorangegangenen Beispielen kann die erläuterte Lösung auch auf einen Coding-Workshop zum Erlernen grundlegender Algorithmen angewendet werden. <i>Teamwork makes the dream work</i> kann an mehreren Stellen im Workshop eingesetzt werden. Das erste Beispiel wäre ein anfänglicher praktischer Teil (Hands-on first), in dem die Teilnehmenden das Thema frei erkunden können. Wenn man zusätzlich die Lösung <i>Code without Code</i> anwendet, könnten mehrere Teilnehmende in Gruppen versuchen, Algorithmen aus Papierbausteinen zu bauen. Sie können dabei Lösungen und mögliche Ergebnisse diskutieren. <i>Teamwork makes the dream work</i> kann auch beim eigentlichen Programmieren angewendet werden, zum Beispiel durch Pair Programming.<br>Zusätzlich ist es wichtig, bei der Implementierung kollaborativer Lernstrategien die optimale Gruppengröße zu berücksichtigen sowie eine gleichmäßige Aufgabenverteilung unter den Teilnehmenden sicherzustellen, um zu verhindern, dass bestimmte Personen überlastet und andere unterfordert werden. Die Wahl einer angemessenen Gruppengröße gewährleistet eine effektive Kommunikation und Zusammenarbeit. Kleinere Gruppen können beispielsweise eine aktivere Teilnahme und individuelles Engagement erleichtern, während größere Gruppen vielfältige Perspektiven und kollektive Problemlösungsfähigkeiten bieten können. Die sorgfältige Auswahl der Gruppengröße ist ein entscheidender Aspekt für die erfolgreiche Umsetzung kollaborativer Ansätze. Eine maximale Gruppengröße von vier Teilnehmenden wird empfohlen <sup>[24]</sup>.',
		consequences: {
			benefits: [
				'<ul><li>Kollaborative Ansätze in Coding-Workshops ermöglichen eine ansprechendere und interaktivere Lernumgebung, in der Teilnehmende von <strong>vielfältigen Perspektiven</strong> und kollektiver Problemlösung profitieren können, was zu einem tieferen Verständnis der Coding-Konzepte führt.</li>',
				'<li>Durch das Entschärfen schneller Sackgassen und das Schaffen von Möglichkeiten zur gegenseitigen Unterstützung fördert kollaboratives Lernen eine unterstützende Atmosphäre, die Teilnehmende ermutigt, bei Herausforderungen durchzuhalten, was zu gesteigerter <strong>Motivation</strong> und mehr Selbstvertrauen führt.</li>',
				'<li>Das Aufbrechen <strong>isolierter Lernerfahrungen</strong> ermöglicht einen umfassenderen Austausch und Wissensaustausch unter Gleichgesinnten, was den Lernprozess bereichert und ein tieferes Verständnis von Programmierprinzipien fördert.</li>',
				'<li>Die Förderung der Zusammenarbeit <strong>verringert die Abhängigkeit von einer einzelnen Lehrkraft</strong> und öffnet den Zugang zu einem breiteren Spektrum an Lernressourcen und Fachwissen innerhalb der Gruppe, wodurch die Qualität und Vielfalt der Lernerfahrungen verbessert wird.</li>',
				'<li>Das Erklären von Konzepten gegenüber Gleichgesinnten festigt das eigene Verständnis, was kollaboratives Lernen zu einer effektiven <strong>Methode für das Verständnis</strong> macht.</li>',
				'<li>Zusammenarbeit stellt sicher, dass alle Mitglieder zur kollektiven Anstrengung beitragen und davon profitieren, was eine <strong>gerechte Kompetenzentwicklung</strong> fördert.</li>',
				'<li>Zusätzlich zu den technischen Fähigkeiten fördert kollaboratives Lernen wichtige <strong>Soft Skills</strong> wie Teamarbeit, Kommunikation und Problemlösung.</li>',
				'<li>Kollaboratives Lernen ermutigt die Teilnehmenden, sich auf <strong>mehreren Ebenen einzubringen</strong>, was eine tiefere Beteiligung fördert. Besonders schnelle Lernende finden in kollaborativen Aufgaben einen Mehrwert, da diese Möglichkeiten zur weiteren Erkundung und Unterstützung bieten, nachdem die eigenen Aufgaben abgeschlossen sind.</li></ul>'
			],
			liabilities: [
				'<ul><li>In kollaborativen Settings besteht das Risiko, dass einige Teilnehmende mehr beitragen als andere, was zu <strong>ungleichmäßiger Kompetenzentwicklung</strong> und mangelnder <strong>Fairness</strong> bei der Arbeitslastverteilung führen kann.</li>',
				'<li>Teilnehmende könnten zu <strong>Aufgaben tendieren, in denen sie bereits kompetent sind</strong>, was die Möglichkeiten zur Entwicklung von Fähigkeiten in neuen Bereichen einschränkt.</li>',
				'<li>Die Wirksamkeit von kollaborativem Lernen hängt stark von der <strong>Dynamik innerhalb der Gruppe</strong> ab. Störungen oder Konflikte unter Teammitgliedern könnten den Lernprozess behindern und die Gesamterfahrung negativ beeinflussen.</li>',
				'<li>Die richtige Balance zwischen der Autonomie für individuelles Lernen und der Anleitung innerhalb eines kollaborativen Rahmens zu finden, kann schwierig sein, da es eine sorgfältige Steuerung erfordert, um sicherzustellen, dass die Teilnehmenden <strong>angemessene Unterstützung</strong> erhalten, während sie dennoch die Möglichkeit haben, <strong>eigenständig zu explorieren</strong>.</li>',
				'<li>Kollaborative Umgebungen können unbeabsichtigt zu <strong>Gruppendenken</strong> führen, bei dem sich Teilnehmende den dominanten Ideen innerhalb der Gruppe anpassen, was <strong>kritisches Denken und Kreativität einschränkt</strong>.</li></ul>'
			]
		},
		knownUses: [{
			title: 'Pair Programming',
			description: 'Pair Programming ist eine Technik, bei der zwei Personen gemeinsam an einem Computer Software entwickeln. Eine Person übernimmt die Rolle des „Drivers“. Der Driver schreibt den Code, während die andere Person, der „Navigator“, jede Zeile Code während des Schreibens überprüft. Für beste Ergebnisse sollten beide Personen beide Positionen mindestens einmal einnehmen. Dieser kollaborative Ansatz fördert kontinuierliches Feedback, was zu einer höheren Codequalität und weniger Fehlern führt. Pair Programming fördert zudem den Wissensaustausch und hilft Teammitgliedern, von der Expertise des anderen zu lernen.',
			figure: {
				images: [
					{
						src: '/images/pairprogramming.png',
						caption: ''
					}
				],
				mainCaption: 'Eine Visualisierung von „Pair Programming“',
			},
			demoLink: 'https://www.linkedin.com/pulse/when-implement-pair-programming-getinrhythm/'
		}],
		relatedPatterns: [
			{
				name: 'Community of Learning <sup>[10]</sup>',
				description: '<i>Community of Learning</i> unterstützt die Idee des gemeinsamen Lernens in einer Gruppe, da die individuelle Kapazität begrenzt ist. Dies deckt sich mit der Lösung von <i>Teamwork makes the dream work</i>.'
			},
			{
				name: 'Release of Thought <sup>[12]</sup>',
				description: 'Während der Zusammenarbeit im Team können die Teilnehmenden ihre Ideen mit anderen besprechen. Sie erhalten so die Chance, über ihre Ideen zu reflektieren.'
			},
			{
				name: 'Ice Breaker <sup>[2]</sup>',
				description: 'Die Idee hinter <i>Ice Breaker</i> ist es, einer Gruppe eine Aktivität anzubieten, die sie zur Interaktion bewegt, damit keine peinlichen Momente unter neuen Gruppenmitgliedern entstehen.'
			},
			{
				name: 'Open-Process Learning <sup>[11]</sup>',
				description: '<i>Open-Process Learning</i> befasst sich damit, den eigenen Lernprozess für andere zu öffnen. Dies ermöglicht den Austausch und die Diskussion von Ideen.'
			}
		]
	},
	{
		id: 'connect-the-pieces',
		title: 'Connect the Pieces',
		description: 'Implementieren Sie einen Moment im Workshop, in dem alle bisherigen Themen miteinander verbunden und in Beziehung gesetzt werden.',
		context: 'In einem Coding-Workshop werden verschiedene Inhalte vermittelt, die sich auf ein größeres Thema beziehen. Auch wenn diese Themen zu einer gemeinsamen Domäne gehören, werden sie zunächst getrennt und unabhängig voneinander behandelt. Dieser Ansatz entspricht dem Prinzip „Divide & Conquer“ (Teile und Herrsche), bei dem komplexe Themen in kleinere, handhabbarere Einheiten zerlegt werden. Darüber hinaus führt die getrennte Einführung einzelner Theorieabschnitte unter Berücksichtigung der Cognitive Load Theory zu einer Verringerung der kognitiven Belastung der Teilnehmenden <sup>[18]</sup>.',
		problem: 'Die Teilnehmenden sind nicht in der Lage, die Relevanz der einzelnen Themen in Bezug zueinander und zum gemeinsamen Überthema zu erkennen. Dies senkt die Motivation der Teilnehmenden und verringert somit deren Einsatzbereitschaft im Workshop.',
		forces: [
			'<ul><li><strong>Domänenspezifisches Wissen:</strong> Da die vermittelten Themen für die Teilnehmenden neu sind, verfügt nicht jeder über das domänenspezifische Wissen für das gemeinsame Thema.</li>',
			'<li><strong>Begrenzte Aufmerksamkeitsspanne:</strong> Die Teilnehmenden haben nur eine begrenzte Aufmerksamkeitsspanne und können sich daher nicht alle Einzelthemen merken <sup>[7]</sup>.</li>',
			'<li><strong>Engagement:</strong> Anfänglich scheinbar unzusammenhängende Themen können das Engagement der Teilnehmenden verringern.</li>',
			'<li><strong>Sinnhaftigkeit:</strong> Die Teilnehmenden sehen möglicherweise keinen Sinn darin, scheinbar nicht zusammenhängende Themen zu lernen.</li>',
			'<li><strong>Wissensanwendung:</strong> Für die Teilnehmenden könnte es schwierig sein, einzelne Themen ohne weiteren Kontext in der realen Welt anzuwenden.</li></ul>'
		],
		solution: '<i>Implementieren Sie einen Moment im Workshop, in dem alle vorherigen Themen miteinander verbunden und in Beziehung gesetzt werden.</i><br>Während des Workshops sollte es einen Moment geben, in dem die Themen, die bisher unabhängig voneinander betrachtet wurden, in Beziehung zueinander und zum gemeinsamen Thema gesetzt werden. Es ist wichtig, dass die Teilnehmenden aus den Einzelthemen ein stimmiges Gesamtbild erkennen und verstehen können. An diesem Punkt sollten die Themen auch in Bezug zur allgemeinen Domäne gesetzt werden. Der passende Zeitpunkt, um die Teile zu verbinden, kann entweder gegen Ende oder nach jedem einzelnen Unterthema liegen, das zum größeren Bereich beiträgt.<br>Die vorgestellte Lösung lässt sich auch auf das laufende Beispiel anwenden. \textit{Connect the pieces} sollte als Highlight des Workshops fungieren. Übertragen auf das Thema des Erlernens grundlegender Algorithmen kann ein mögliches Ergebnis die Verknüpfung zuvor gelernter Algorithmen sein, die auf den ersten Blick unzusammenhängend erscheinen mögen. Eine andere Möglichkeit ist aufzuzeigen, wie die bisherigen Algorithmen als Grundlage für einen größeren und komplexeren Algorithmus dienen können.',
		consequences: {
			benefits: [
				'<ul><li>Das Verknüpfen mehrerer Themen führt zu einem <strong>tieferen Verständnis</strong>.</li>',
				'<li>Das Erkennen von Beziehungen zwischen Themen und deren Relevanz kann die <strong>Motivation</strong> der Teilnehmenden steigern.</li>',
				'<li>Das Zusammenführen der vorherigen Themen kann ein <strong>Highlight</strong> des Workshops sein.</li>',
				'<li>Die Verknüpfung der Themen verleiht dem Workshop <strong>mehr Struktur</strong>.</li>',
				'<li>Das Zusammenführen der Themen kann bei den Teilnehmenden einen <strong>Überraschungseffekt</strong> auslösen.</li>',
				'<li>Das Erkennen von Zusammenhängen kann Teilnehmende motivieren, <strong>selbstständig tiefer</strong> in ein Thema einzutauchen.</li>',
				'<li>Die Trennung in verschiedene Unterthemen zu Beginn vermittelt implizit das Divide-and-Conquer-Paradigma, das in der Informatik eine wichtige Rolle spielt <sup>[21]</sup>.</li></ul>'
			],
			liabilities: [
				'<ul><li>Die Verknüpfung der Themen muss geplant werden und führt daher zu einem <strong>erhöhten Vorbereitungsaufwand</strong>.</li>',
				'<li>Um alle Beziehungen zwischen den Themen zu erkennen, muss <strong>jedes einzelne Thema</strong> zumindest bis zu einem gewissen Grad <strong>verstanden worden sein</strong>.</li>',
				'<li>Das Verknüpfen mehrerer Themen und deren erneute Zusammenfassung kann von den Teilnehmenden als <strong>Redundanz</strong> wahrgenommen werden, was die Aufmerksamkeit senken kann.</li>',
				'<li>Nicht jedes Thema lässt sich in kleine logische Blöcke <strong>partitionieren</strong>.</li></ul>'
			]
		},
		relatedPatterns: [
			{
				name: 'Hidden Connections <sup>[12]</sup>',
				description: '„Hidden Connection“ unterstützt die Idee, verborgene Verbindungen zwischen Themen zu finden. Dies ermöglicht eine neue Perspektive auf bereits bekannte Themen und deckt sich somit mit dem Konzept von „Connect the pieces“, um den Workshop-Teilnehmenden ein größeres Gesamtbild zu vermitteln.'
			},
			{
				name: 'Larger than Life <sup>[6]</sup>',
				description: '„Larger than life“ unterstützt die Idee, den Studierenden vorab ein großes, komplexes Thema zu präsentieren und dann langsam auf dieses Thema hinzuarbeiten. Auch wenn dies im Gegensatz zu „Connect the Pieces“ steht, könnte ein solcher Perspektivwechsel in einem Coding-Workshop ebenfalls genutzt werden.'
			}
		]
	},
	{
		id: 'take-it-home',
		title: 'Take It Home',
		description: 'Verschenken Sie greifbare Artefakte für eine bessere Einprägung.',
		context: 'Der entscheidende Punkt von Coding-Workshops liegt in der Wissensvermittlung, was den effektiven Transfer von Informationen und Fähigkeiten von der Kursleitung an die Teilnehmenden beinhaltet. Die meisten dieser Workshops sind in sich abgeschlossen, ohne anschließende Aufgaben oder Folgeworkshops. Nach Abschluss der Coding-Workshops verlassen die Lernenden das vermittelte Wissensgebiet.',
		problem: 'Die Teilnehmenden stehen vor der Herausforderung, Coding-Konzepte nach dem Workshop ohne Verstärkung im Gedächtnis zu behalten. Diese Unfähigkeit, Wissen zu bewahren, führt zu einem Rückgang der Fachkompetenz und einer begrenzten Anwendung der erlernten Fähigkeiten. Diese Herausforderung resultiert primär aus dem Fehlen regelmäßiger Wiederholungen der erworbenen Inhalte.',
		forces: [
			'<ul><li><strong>Anwendungsschwierigkeiten:</strong> Die Umsetzung der erlernten Fähigkeiten wird ohne konsequente Übung schwierig.</li>',
			'<li><strong>Verblassende Erinnerungen:</strong> Selbst wenn die Teilnehmenden die neuen Fähigkeiten wiederholen möchten, können Details aus dem Workshop nach einiger Zeit verblassen, was den Abruf entscheidender Konzepte behindert.</li>',
			'<li><strong>Nachlassende Motivation:</strong> Ohne greifbare Erinnerungen oder kontinuierliche Unterstützung schwindet der Enthusiasmus der Teilnehmenden für die Anwendung des neu gewonnenen Wissens.</li>',
			'<li><strong>Externe Ablenkungen:</strong> Die Beschäftigung mit anderen Ereignissen kann die Lernenden von dem erworbenen Wissen ablenken und die Merkfähigkeit beeinträchtigen.</li>',
			'<li><strong>Fehlende Hardware:</strong> Nicht jeder Workshop-Teilnehmende besitzt die passende Hardware, um das neu erworbene Wissen zu Hause anzuwenden.</li></ul>'
		],
		solution: '<i>Verschenken Sie greifbare Artefakte für eine bessere Merkfähigkeit.</i><br>Übergeben Sie den Teilnehmenden zum Abschluss des Workshops ein greifbares Artefakt. Dieses Artefakt, ob physisch oder digital, dient als ständige Erinnerung an die wichtigsten Lektionen und ermutigt die Einzelnen, ihre neu erworbenen Fähigkeiten zu vertiefen. Idealerweise fungiert es gleichzeitig als Werkzeug, um entwickelte Lösungen nachzuvollziehen. Dies unterstreicht die Bedeutung seiner praktischen Relevanz über das bloße Spiel hinaus. Kleine Objekte sind in diesem Kontext besonders effektiv, da sie überallhin mitgenommen werden können, um die Erinnerung in verschiedene Umgebungen zu tragen.<br>Um den Zweck der Artefakte über bloße Souvenirs hinaus zu betonen, ist es entscheidend, dass diese Gegenstände direkt mit dem Kerninhalt des Workshops verknüpft sind und den Teilnehmenden eine greifbare Möglichkeit bieten, das erlernte Material erneut zu sichten und zu üben. Dieser Ansatz verwandelt das Artefakt von einem einfachen Andenken in eine funktionale Komponente der Lernerfahrung, die ihre pädagogische Wirkung weit über den Rahmen des Workshops hinaus verlängert.<br>Für die Anwendung dieser Lösung kann auf die vorangegangenen Beispiele aufgebaut werden. Wenn es für das Thema des Workshops angemessen ist, können die haptischen Bausteine aus dem Muster <i>Hands on first</i> an die Workshop-Teilnehmenden verschenkt werden. Um beim Beispiel des Erlernens grundlegender Algorithmen zu bleiben: Die Teilnehmenden könnten die Bausteine zu Hause verwenden, um entweder die Themen aus dem Workshop zu wiederholen oder zu versuchen, neue algorithmische Probleme zu lösen.',
		consequences: {
			benefits: [
				'<ul><li>Ständige Erinnerungen an Schlüsselkonzepte stärken die Fähigkeit der Teilnehmenden, Coding-Wissen nach dem Workshop durch <strong>Wiederholung</strong> zu behalten. Da die Einzelnen an Schlüsselkonzepte erinnert werden, werden sie dazu angeregt, sich wiederholt mit dem Material auseinanderzusetzten und es zu überprüfen.</li>',
				'<li>Das Artefakt ermutigt zu konsequentem Üben und hilft den Teilnehmenden, Coding-Fähigkeiten effektiv <strong>anzuwenden</strong>.</li>',
				'<li>Durch das Artefakt geförderte Verbindungen stimulieren das Interesse und regen zu einer tieferen Erkundung und einem besseren Verständnis der Workshop-Inhalte an, um die <strong>Motivation</strong> zu steigern.</li>',
				'<li>Der bleibende Eindruck des Erinnerungs-Artefakts generiert potenziell mehr Empfehlungen und <strong>Folgeworkshops</strong>, da die Teilnehmenden ihre <strong>Erfahrungen mit anderen teilen</strong> können.</li></ul>'
			],
			liabilities: [
				'<ul><li>Es besteht das Risiko, dass der Neuheitswert des Artefakts schnell nachlässt, was dazu führen kann, dass es schnell <strong>vergessen oder aus der Aufmerksamkeit der Teilnehmenden verdrängt</strong> wird.</li>',
				'<li>Die Teilnehmenden könnten sich <strong>zu sehr auf das Erinnerungs-Artefakt verlassen</strong> und andere Wiederholungsmethoden vernachlässigen, was ihre Fähigkeit beeinträchtigt, sich effektiv mit verschiedenen Lernansätzen auseinanderzusetzen.</li>',
				'<li>Die verstärkte Entsorgung von Artefakten, insbesondere in großen Mengen, könnte Herausforderungen in der Abfallwirtschaft darstellen und die <strong>ökologische Nachhaltigkeit</strong> negativ beeinflussen.</li>',
				'<li>Die Verwendung unpassender Objekte kann zur <strong>Ablenkung</strong> vom eigentlichen Inhalt führen.</li>',
				'<li>Die Vorbereitung greifbarer Artefakte für jeden Workshop-Teilnehmenden führt zu <strong>zusätzlichem Arbeitsaufwand und Kosten</strong> für die Workshop-Leitung. Dies steigt mit der Anzahl der Teilnehmenden.</li></ul>'
			]
		},
		knownUses: [
			{
				title: 'Coding Culture',
				description: 'Während des Forschungsprojekts „Coding Culture in Oberberg“ wurde ein Workshop für Schüler im Alter von 11 bis 13 Jahren durchgeführt. In diesem Workshop wurde der Bubble-Sort-Algorithmus vermittelt. Zum Abschluss des Workshops erhielt jeder Teilnehmende ein 3D-gedrucktes Artefakt als physisches Objekt, wie in der Abbildung gezeigt, das den Ansatz zur Vermittlung des Bubble-Sort-Algorithmus repräsentiert. Während des Workshops sortierten die Teilnehmenden selbst Türme – ein Prozess, der auch mit dem Artefakt durchgeführt werden kann.',
				figure: {
					images: [
						{
							src: '/images/3d-print.jpg',
							caption: '3D-gedrucktes Objekt'
						},
						{
							src: '/images/lego.jpg',
							caption: 'Gängige Spielbausteine'
						}
					],
					mainCaption: 'Vergleich des 3D-gedruckten Objekts mit den im Workshop verwendeten Steinen',
				}
			},
			{
				title: 'Pattern-Münzen',
				description: 'Auf der EuroPLoP 2023 brachte das Iba Lab der Keio University Münzen mit (siehe Abbildung), die den Austausch und die Anwendung von Mustern (Patterns) im Konferenzkontext erleichtern sollten. Diese Münzen enthalten wesentliche Informationen über die Muster, die sie repräsentieren. Sie dienen dem Zweck des Schenkens als Akt und der Verbreitung von Mustern in einer Gemeinschaft, die von deren Nutzung profitieren könnte. Die ständige Konfrontation mit Mustern in verschiedenen Kontexten sowie die Gespräche, die durch das Schenken angeregt werden, führen zu einer Verankerung ihrer Inhalte und einer verstärkten Anwendung. Das Konzept der Pattern-Karten dient einem ähnlichen Zweck und ist in der Pattern-Community ebenfalls weit verbreitet.',
				figure: {
					images: [
						{
							src: '/images/pattern-coins.jpeg',
							caption: ''
						}
					],
					mainCaption: 'Hölzerne Pattern-Münzen von der EuroPLoP 2023'
				}
			}
		],
		relatedPatterns: [
			{
				name: 'Output-Driven Learning <sup>[12]</sup>',
				description: 'Output-Driven Learning unterstützt die Idee, auf ein konkretes Ergebnis am Ende einer Lerneinheit hinzuarbeiten. Dies kann dort angewendet werden, wo beispielsweise konkrete Bausteine gebaut werden, die den Teilnehmenden dann als Teil von „Take it home“ geschenkt werden können.'
			},
			{
				name: 'Embodied Skills <sup>[11]</sup>',
				description: 'Kontinuierliche Übung kann helfen, eine gewünschte Fertigkeit zu erwerben. Den Teilnehmenden etwas mit nach Hause zu geben, ermöglicht es ihnen, das Thema des Workshops zu wiederholen oder offene Fragen zu lösen.'
			}
		]
	},
	{
		id: 'abstract-guided-instruction',
		title: 'Abstract Guided Instruction Through Storytelling',
		description: 'Bieten Sie ein hohes Maß an Abstraktion bei minimaler Interaktion, indem Sie Metaphern im Rahmen des Storytelling verwenden.',
		teaserImg: '/images/agi.png',
		context: 'Lernende setzen sich zum ersten Mal mit der Programmierung auseinander und verfügen über keinerlei Vorkenntnisse. Es ist wichtig, verschiedene Coding-Konzepte einzuführen und zu erklären, um eine Grundlage für das Programmieren zu schaffen.',
		problem: 'Das Erlernen von Coding-Konzepten ohne jegliche Vorkenntnisse stellt eine erhebliche Einstiegshürde dar, da es eine völlig neue Denkweise erfordert <sup>[15]</sup>. Der Erfolg beim Programmieren hängt von verschiedenen Prädiktoren wie algorithmischem Denken, logischem Schlussfolgern und mathematischen Fähigkeiten ab, von denen keine als gegeben vorausgesetzt werden kann.',
		forces: [
			'<ul><li><strong>Nicht greifbare Konzepte:</strong> Programmierkonzepte sind oft abstrakt und schwer zu verstehen, insbesondere ohne praktische Beispiele und bekannte Referenzen, auf die sich die Lernenden beziehen können.</li>',
			'<li><strong>Mangel an vertrauten Referenzen:</strong> Viele Konzepte haben kaum oder gar keine Verbindung zu bereits bekannten Themen, was das Verständnis erschwert.</li>',
			'<li><strong>Falsche Schlussfolgerungen:</strong> Wenn Lernende bekannte Themen nutzen, um Konzepte ohne Anleitung einer Lehrkraft zu erfassen, verwenden sie möglicherweise unpassende Metaphern, die zu falschen Schlussfolgerungen führen.</li>',
			'<li><strong>Computerangst:</strong> Lernende haben oft Angst vor der Nutzung von Computern, insbesondere beim Programmieren, und fürchten sich allgemein davor, Fehler zu machen, was zu einem zögerlichen und unsicheren Lernen führt <sup>[17]</sup>.</li>',
			'<li><strong>Kognitive Belastung:</strong> Die kognitive Belastung ist hoch, wenn viele verschiedene neue Konzepte gleichzeitig gelernt werden müssen <sup>[23]</sup>.</li>',
			'<li><strong>Konzeptintegration:</strong> Es ist eine Herausforderung, die Beziehungen zwischen verschiedenen Programmierkonzepten zu erkennen und zu verstehen.</li>',
			'<li><strong>Sequenzielle Konzepte:</strong> Viele Programmierkonzepte sind sequenziell und bauen aufeinander auf, was das Verständnis der Grundlagen entscheidend macht <sup>[13]</sup>. Wenn grundlegende Konzepte nicht vollständig verstanden werden, behindert dies das Erlernen fortgeschrittener Konzepte oder der Verbindungen zwischen ihnen.</li>',
			'<li><strong>Motivation:</strong> Ohne frühe Erfolgserlebnisse verlieren Lernende oft schnell die Motivation <sup>[20]</sup>.</li></ul>'
		],
		solution: '<i>Bieten Sie ein hohes Maß an Abstraktion mit minimaler Interaktion durch den Einsatz von Metaphern im Rahmen von Storytelling an.</i><br>Eine geeignete Methodik, um Lernende ohne Vorkenntnisse an die Programmierung heranzuführen, besteht darin, Lehrmethoden einzusetzen, die ein hohes Maß an Abstraktion bieten und nur minimale direkte Interaktion der Lernenden erfordern. Dieser Ansatz ermöglicht es den Lernenden, sich schrittweise mit neuen Konzepten vertraut zu machen, ohne überfordert zu werden. Eine zentrale Rolle spielt dabei das Storytelling, das als „Wissensvermittlung durch eine narrative Methode definiert wird, die rhetorische Mittel nutzt, um Spannung zu erzeugen und ein faktenreiches Thema in Form einer Geschichte zu präsentieren“ <sup>[3]</sup>. Diese Methode kann helfen, verschiedene Konzepte zu verknüpfen und sie in einem verständlichen und nachvollziehbaren Kontext darzustellen. Geeignete Metaphern sollten verwendet werden, um abstrakte Programmierkonzepte greifbarer zu machen. Gut gewählte Metaphern helfen, Missverständnisse zu vermeiden und komplexe Ideen so zu erklären, dass sie für Anfänger zugänglich und verständlich sind. Die Kombination dieser Ansätze erleichtert den Einstieg in die Programmierung und senkt die Lernhürde.',
		consequences: {
			benefits: [
				'<ul><li>Die Verwendung von Storytelling und geeigneten Metaphern schafft eine <strong>Verbindung zu bekannten Konzepten</strong> und verbessert das Verständnis <sup>[1]</sup>.</li>',
				'<li>Geschichten sind <strong>leichter zu merken</strong>, was den Lernenden hilft, Konzepte besser zu behalten <sup>[1]</sup>.</li>',
				'<li>Eine Methodik mit hoher Abstraktion und minimaler direkter Interaktion erfordert eine <strong>detaillierte Anleitung</strong>, was bei Anfängern zu schnelleren Erfolgen führt.</li>',
				'<li>Die <strong>Einstiegshürde</strong> ist aufgrund des hohen Abstraktionsgrades und der daraus resultierenden Zugänglichkeit sehr niedrig, was es den Lernenden erleichtert, sich auf neue Konzepte einzulassen.</li>',
				'<li>Diese Methodik und die umfassende Anleitung minimieren den Spielraum für Fehler, was das <strong>Selbstvertrauen</strong> der Lernenden stärkt und die <strong>Angst vor dem Scheitern verringert</strong>.</li>',
				'<li>Durch Storytelling können sich die Lernenden mit der Erzählung identifizieren, was die <strong>Lernmotivation</strong> erhöht.</li></ul>',
			],
			liabilities: [
				'<ul><li>Hohe Abstraktion und umfassende Anleitung schaffen einen sehr <strong>eingeschränkten Rahmen</strong> mit begrenzter Flexibilität und wenig Raum für eigene Erkundungen, was zu einer linearen Erfahrung führt, die der natürlichen Neugier der Lernenden schaden könnte.</li>',
				'<li>Der <strong>abstrakte Kontext</strong> kann schnell ungeeignet werden, wenn die Lernenden Fortschritte machen und der methodische Rahmen ihren Bedürfnissen nicht mehr entspricht.</li>',
				'<li>Die <strong>Distanz zum Code</strong> aufgrund der hohen Abstraktion kann den Übergang von Metaphern zu textbasiertem Code mit Syntax erschweren.</li>',
				'<li>Bei sequenziellen Konzepten kann ein häufiger <strong>Wechsel der Metaphern</strong> notwendig sein, was das Verständnis und die Kontinuität im Lernprozess erschwert. Dieser Prozess beinhaltet auch die Herausforderung für Lehrkräfte, passende Metaphern zu kreieren.</li></ul>'
			]
		},
		knownUses: [
			{
				title: 'Osmo Coding Awbie',
				description: '„Osmo Coding Awbie“ ist ein interaktives Spiel für Kinder, das physische Blöcke verwendet, die mit einem iPad interagieren, um grundlegende Coding-Konzepte zu vermitteln. Die Spieler ordnen diese haptischen Blöcke vor dem iPad an, um Befehlssequenzen zu erstellen, die Awbie, einen verspielten Charakter, durch verschiedene Abenteuer in einer farbenfrohen virtuellen Welt führen.<br>Das Storytelling dreht sich um Awbies Reise voller Herausforderungen und Belohnungen und fesselt Kinder durch eine Erzählung, die das Lernen unterhaltsam macht. Das Thema Abenteuer und Schatzsuche dient als Metapher für das Programmieren und veranschaulicht Konzepte wie Sequenzierung und Logik in einem spielerischen Kontext. Die App ist in der Abbildung dargestellt.',
				figure: {
					images: [
						{
							src: '/images/awbie.jpg',
							caption: ''
						},
						{
							src: '/images/awbie2.jpg',
							caption: ''
						}
					],
					mainCaption: 'Coding Awbie App-Auswahlbildschirm und Level-Gameplay unter Verwendung haptischer Coding-Blöcke',
					altDescription: 'Coding Awbie App Level-Auswahlbildschirm und Level mit Codeblöcken, um die Geschichte zu durchlaufen'
				}
			},
			{
				title: 'How to Code a Sandcastle',
				description: '„How to Code a Sandcastle“ ist ein Kinderbuch von Josh Funk, das jungen Lesern Programmierkonzepte durch eine entzückende Geschichte näherbringt. Das Buch begleitet Pearl und ihren Roboterfreund Pascal bei dem Versuch, die perfekte Sandburg am Strand zu bauen.<br>Das Buch abstrahiert das Programmieren, indem es den Prozess des Sandburgbauens in einfache, schrittweise Anweisungen zerlegt, die der Coding-Logik entsprechen. Durch seine fesselnde Erzählweise erklärt es komplexe Ideen auf zugängliche Weise. Die Geschichte von Pearl und Pascal regt die Fantasie der Leser an und macht den Lernprozess unterhaltsam und nachvollziehbar. Die Metapher des Baus einer Sandburg vermittelt effektiv Prinzipien der Programmierung wie Planung, Sequenzierung und Debugging, wobei Pascal der Roboter einen Computer darstellt, der codierte Befehle ausführt. Das Buchcover und ein Einblick in das Buch sind in der Abbildung dargestellt.',
				figure: {
					images: [
						{
							src: '/images/sandcastle1.jpg',
							caption: ''
						},
						{
							src: '/images/sandcastle2.jpg',
							caption: ''
						}
					],
					mainCaption: 'Buchcover und Innenansicht',
					altDescription: 'Buchcover und Buchinhalt von „How to Code a Sandcastle“'
				}
			},
			{
				title: 'Adventures in Coding',
				description: '„Hello Ruby: Adventures in Coding“ von Linda Liukas ist ein Buch, das Kinder durch die Abenteuer von Ruby, einem neugierigen und fantasievollen Mädchen, in die Welt des Codings einführt. Das Buch kombiniert Storytelling mit interaktiven Aktivitäten, um grundlegende Programmierkonzepte zu vermitteln.<br>„Hello Ruby“ nutzt narrative und visuelle Abstraktion, um Coding-Prinzipien zu vermitteln. Rubys Abenteuer in einer skurrilen, illustrierten Welt machen abstrakte Programmierkonzepte für junge Leser greifbar und nachvollziehbar. Das Storytelling ist reichhaltig und fantasievoll, weckt das Interesse der Kinder und macht den Lernprozess angenehm. Zwei Beispiele für das Storytelling sind in der Abbildung dargestellt. Jedes Abenteuer, das Ruby unternimmt, dient als Metapher für verschiedene Coding-Konzepte. Zum Beispiel illustrieren Problemlösungs-Quests und Schatzsuchen das Debugging und algorithmisches Denken, wodurch Kinder Programmieren auf spielerische Weise lernen können.',
				figure: {
					images: [
						{
							src: '/images/ruby2.jpg',
							caption: ''
						},
						{
							src: '/images/ruby3.jpg',
							caption: ''
						}
					],
					mainCaption: 'Innenansicht des Buches',
					altDescription: 'Buchinhalt'
				}
			}
		]
	},
	{
		id: 'block-based-programming',
		title: 'Block-Based Programming',
		description: 'Bieten Sie interaktive Lernlösungen mit geringem Abstraktionsgrad unter Verwendung der blockbasierten Programmierung.',
		teaserImg: '/images/bbp.png',
		context: 'Lernende verstehen die grundlegenden Konzepte hinter Programmierung und algorithmischem Denken auf einer hohen Abstraktionsebene. Sie möchten ihr Wissen erweitern und lernen, wie man syntaktisch korrekten Code schreibt, um ein funktionierendes Programm zu erstellen.',
		problem: 'Es besteht eine erhebliche Diskrepanz zwischen dem Verständnis algorithmischer Prozesse und der Fähigkeit, Code von Grund auf neu zu schreiben. Diese Diskrepanz kann als Unterschied in den Abstraktionsebenen beschrieben werden. Algorithmisches Denken erfordert vom Lernenden, über abstrakte Konzepte auf einer hohen Ebene nachzudenken, da das Ziel darin besteht, einen wiederholbaren Prozess aufzubauen. Das Schreiben von textbasiertem Code mit Syntax erfordert vom Lernenden nicht nur die Anwendung algorithmischen Denkens (eine für ihn neue Denkweise), sondern auch dessen Übersetzung in eine Syntax, mit der er möglicherweise nicht vertraut ist. Diese zwei Punkte im Prozess des Erlernens der Programmierung lassen eine Lücke offen, die bisher nicht vollständig strukturiert wurde. Es fehlen Schritte zwischen diesen beiden Punkten, die helfen, die Struktur des Codes zu visualisieren oder der Syntax auf einer Ebene niedriger Abstraktion ähneln. Das Schreiben von Code wird oft als Prozess mit geringer bis mittlerer Interaktion wahrgenommen, bei dem gängige Editoren und Syntax verwendet werden. Dies hindert Lernende daran, mit dem Code zu experimentieren und sich frei zu fühlen, Dinge zu ändern und verschiedene Lösungen zu erkunden.',
		forces: [
			'<ul><li><strong>Kognitive Belastung</strong>: Die Verknüpfung von vorhandenem Wissen mit neuen Informationen während des Erwerbs neuen Wissens kann zu einer hohen kognitiven Belastung führen<sup>[23]</sup>.</li>',
			'<li><strong>Einstiegshürde</strong>: Die Einstiegshürde kann für einige Lernende hoch sein, da sie noch nie zuvor mit Code oder ähnlichem gearbeitet haben.</li>',
			'<li><strong>Motivation</strong>: Die Motivation der Lernenden wird durch die Erfahrung beeinflusst, die sie beim Lernen machen. Eine Erfahrung, die den Bedürfnissen der Lernenden nach Kompetenz, Autonomie und sozialer Eingebundenheit nicht entspricht, kann zu einem Rückgang der Motivation führen<sup>[19]</sup>.</li>',
			'<li><strong>Situatives Interesse</strong>: Wenn eine Lernaufgabe persönliche Relevanz, Neuheit, Aktivität und Verständlichkeit bietet, kann situatives Interesse geweckt werden, was als Vorstufe für die Förderung individuellen Interesses gilt. </li>',
			'<li><strong>Vorkenntnisse</strong>: Das Vorwissen der Lernenden spielt eine wichtige Rolle beim Erlernen der Programmierung. Zudem kann der Grad, in dem dieses Wissen im mentalen Modell der Person verankert ist, die Lernerfahrung beeinflussen.</li>',
			'<li><strong>Selbstwahrnehmung von Kompetenzen</strong>: Abstraktes Vorwissen über Programmierung, insbesondere wenn Konzepte auf Alltagssituationen angewendet werden, kann das Vertrauen der Lernenden in ihre Fähigkeit, tatsächlich Code zu schreiben, behindern<sup>[4]</sup>.</li>',
			'<li><strong>Angst vor der Computernutzung</strong>: Lernende können negative Emotionen wie Angst im Zusammenhang mit der Nutzung von Computern erleben, was die Lernerfahrung beeinträchtigen kann<sup>[17]</sup>.</li>',
			'<li><strong>Überforderung</strong>: Textbasierte Programmierung unter Verwendung von Syntax kann kompliziert erscheinen und zu Gefühlen von Frustration und Überforderung führen<sup>[9]</sup>.</li></ul>'
		],
		solution: '<i>Bieten Sie hoch-interaktive Lernlösungen mit niedriger Abstraktion durch blockbasierte Programmierung an.</i><br>Hoch-interaktive Lernlösungen mit niedriger Abstraktion ermöglichen eine hochfrequente Interaktivität, während sie gleichzeitig auf einer niedrigen Abstraktionsebene bleiben. Diese Struktur kann durch blockbasierte Programmierung geschaffen werden, optional kombiniert mit haptischen Objekten wie Mikrocontrollern. Blockbasierte Programmierung verpackt die Coding-Logik in einzelne Blöcke, die per Drag-and-Drop in einem Editor zusammengesetzt und verschachtelt werden können. Die Verwendung dieser Art von Programmiersprache ermöglicht es Lernenden, funktionierende Programme zu erstellen, ohne „echten“ Code zu schreiben. Dies bietet eine niedrige Abstraktionsebene im Vergleich zu Code mit typischer Syntax. Ein oder mehrere Blöcke repräsentieren dabei ein Programmierkonzept. Die Anordnung der Blöcke basiert auf den Wechselbeziehungen verschiedener Konzepte. Zum Beispiel könnte es einen Block geben, um eine Variable zu setzen, oder einen Block, um eine Schleife zu „codieren“. Diese Visualisierungen sind so gestaltet, dass sie Konzepte intuitiv darstellen. Eine Schleife hat beispielsweise eine Form, in die andere Blöcke hineinpassen (siehe Abbildung), was verdeutlicht, dass diese anderen Blöcke innerhalb der Schleife enthalten sind. Die Möglichkeit, Codeblöcke per Drag-and-Drop zu verschieben, erlaubt es Lernenden, mit dem Code zu interagieren und beispielsweise mit wenigen Handgriffen verschiedene Lösungswege zu erkunden. Die Ergänzung durch ein haptisches Objekt gibt den Lernenden zusätzliches Feedback und eine greifbare Repräsentation ihrer Lösungen. Einige Editoren für blockbasierte Programmierung bieten die Möglichkeit, zwischen der Blockansicht und der tatsächlichen Syntax einer bestimmten Programmiersprache (z. B. Python) zu wechseln oder beide Versionen gleichzeitig anzuzeigen. Dies verringert die Lücke zwischen abstraktem Konzept und tatsächlichem Code weiter.',
		consequences: {
			benefits: [
				'<ul><li><strong>Computerangst</strong> kann durch regelmäßige Nutzung mit häufigen Erfolgserlebnissen reduziert werden<sup>[17]</sup>.</li>',
				'<li>Die Lernmotivation wird durch <strong>alltagsnahe Anwendung</strong>, <strong>Autonomie</strong> beim Erkunden und <strong>hohe Interaktivität</strong> gesteigert.</li>',
				'<li>Lernende <strong>gewinnen Vertrauen in ihre Kompetenz</strong> zur Nutzung von Programmiersprachen, indem sie blockbasierte Programmierung verwenden, die textbasiertem Code mit Syntax ähnelt.</li>',
				'<li>Blockbasierte Programmierung <strong>verringert die Lücke</strong> zwischen Vorwissen und textbasiertem Code. Die Möglichkeit, zwischen Blöcken und echtem Code zu wechseln, hilft beim Aufbau mentaler Modelle, was die Distanz zwischen abstraktem Wissen und Syntax weiter reduziert.</li>',
				'<li>Die Wechselbeziehungen und Verschachtelungen verschiedener Coding-Konzepte, wie Schleifen in Schleifen, können <strong>detailliert</strong> und auf einer <strong>niedrigen Abstraktionsebene</strong> dargestellt werden.</li>',
				'<li><strong>Code-Visualisierung</strong> und <strong>vordefinierte Blöcke</strong> helfen, Fehler wie Tippfehler zu vermeiden. Es belohnt zudem das Kennen wichtiger Schlüsselwörter wie „Schleife“, indem Optionen für deren Verwendung bereitgestellt werden.</li></ul>'
			],
			liabilities: [
				'<ul><li>Blockbasierte Programmierung bietet einen <strong>Rahmen</strong>, der von Lernenden als <strong>einschränkend</strong> empfunden werden könnte.</li>',
				'<li>Blockbasierte Programmierung ist in den <strong>darstellbaren Konzepten begrenzt</strong>, da sie hauptsächlich für die Darstellung imperativer Programmierung nutzbar ist.</li>',
				'<li>Trotz der verringerten Lücke kann der <strong>Übergang zu textbasiertem Code mit Syntax</strong> für Lernende immer noch eine Herausforderung darstellen und <strong>zusätzliche Komplexität</strong> mit sich bringen.</li>',
				'<li>Die Verwendung abstrakter Konzepte mit Metaphern kann zu Unterforderung führen und negative Lernemotionen wie <strong>Langeweile oder Frustration</strong> auslösen.</li></ul>'
			]
		},
		knownUses: [
			{
				title: 'Editoren: MakeCode',
				description: 'MakeCode ist ein Editor für blockbasierte Programmierung. Er enthält einen Bereich, in dem die verfügbaren Blöcke nach farblich gekennzeichneten Kategorien sortiert angezeigt werden. Beispielsweise enthält eine Kategorie für Schleifen (in der Abbildung grün dargestellt) verschiedene Schleifenvarianten, die per Klick zum Programmierbereich rechts hinzugefügt werden können. Die Blöcke auf der rechten Seite können per Drag-and-Drop verschoben und über Tastaturkürzel manipuliert werden. Wie oben in der Mitte der Abbildung zu sehen, erlaubt MakeCode den Nutzern, die Code-Version der Blöcke in Programmiersprachen (Python und JavaScript) anzuzeigen. Es ermöglicht eine Side-by-Side-Ansicht oder einen vollständigen Wechsel zwischen den Ansichten. Der Code kann auch editiert und Programme können komplett im Code geschrieben werden. Bei der Nutzung von MakeCode mit unterstützten Geräten, wie dem Calliope mini, wird der Mikrocontroller auf der linken Seite angezeigt und der Code so weit wie möglich auf dem Bildschirm simuliert.',
				figure: {
					images: [
						{
							src: '/images/make_code_screenshot.png',
							caption: ''
						}
					],
					mainCaption: 'Screenshot des MakeCode-Editors für Calliope mit einem Code für einen Zähler von eins bis zehn.',
					altDescription: 'Screenshot des MakeCode-Editors für Calliope mit einem Code für einen Zähler von eins bis zehn.'
				},
				demoLink: 'https://www.microsoft.com/de-de/makecode'
			},
			{
				title: 'Haptische Objekte: Calliope mini, micro:bit',
				description: 'Es gibt verschiedene haptische Objekte, die mit blockbasierten Editoren wie MakeCode kompatibel sind. Der Calliope mini und der micro:bit sind ähnliche Mikrocontroller, die eine Reihe integrierter Sensoren bieten, die durch Programmierung gesteuert werden können. Es gibt auch Erweiterungs-Kits, die zusätzliche Sensoren, Motoren usw. enthalten. Die Abbildung zeigt ein Erweiterungs-Kit des micro:bit mit verschiedenen Servomotoren und einem Abstandssensor. Beide Mikrocontroller sind einfach einzurichten und mit einem blockbasierten Editor zu verwenden. Bei der Verwendung von Erweiterungs-Kits stehen Bibliotheken zur Verfügung, die passende Blöcke für die Programmierung bereitstellen. Ein Kit zum Bau eines Roboters bietet beispielsweise Blöcke zum Einstellen der Motorgeschwindigkeit.',
				figure: {
					images: [
						{
							src: '/images/microbit.jpg',
							caption: ''
						}
					],
					mainCaption: 'Abbildung des micro:bit mit der Maqueen-Erweiterung, eingebaut in einen kleinen Roboter, der sich in alle Richtungen bewegen kann und Sensoren wie einen Abstandssensor (zwei „Augen“ vorne) bietet.'
				},
				demoLink: 'https://wiki.dfrobot.com/micro_Maqueen_for_micro_bit_SKU_ROB0148-EN'
			},
			{
				title: 'Haptische Objekte: LittleBits',
				description: 'LittleBits sind farbcodierte modulare Elektronik-Bausteine, die einfach mit Magneten zusammengesteckt werden können. Es ist möglich, eine Vielzahl funktionierender Dinge zu bauen, indem die Bits kombiniert werden. Die Abbildung zeigt ein Beispielprojekt mit Schaltplan, um zu veranschaulichen, wie die Bits zusammen verwendet werden. Die Dinge, die Lernende mit littleBits bauen, können ebenfalls über blockbasierte Editoren programmiert werden.',
				figure: {
					images: [
						{
							src: '/images/littlebits_screenshot.png',
							caption: 'LittleBits Editor'
						},
						{
							src: '/images/littlebits_example.png',
							caption: 'Bilder eines Beispielprojekts „Tauziehen“ mit dem aufgebauten Projekt auf der linken Seite und dem Schaltplan auf der rechten Seite. Die Bilder stammen aus den von LittleBits bereitgestellten Projektanleitungen.'
						}
					],
					mainCaption: '',
				},
				demoLink: 'https://classroom.littlebits.com/lessons/invention-4-tug-of-war'
			},
		]
	},
	{
		id: 'self-contained-kit',
		title: 'Self-contained Kit',
		description: 'Es sollte ein Kit verwendet werden, das alle erforderlichen Komponenten enthält.',
		teaserImg: '/images/sck.png',
		context: 'Lernende, insbesondere Anfänger, streben danach, Programmieren mithilfe von Spielen oder Bausätzen zu erlernen. Dieses Lernen findet entweder zu Hause in einem spielerischen und spontanen Rahmen oder in Lernumgebungen wie Schulen statt, in denen Lehrkräfte Materialien für den Unterricht vorbereiten. In beiden Umgebungen kann der Zugang zu zusätzlichen Ressourcen begrenzt sein.',
		problem: 'Damit Coding-Kits oder Spiele voll funktionsfähig sind, werden oft zusätzliche Bastelmaterialien, elektronische Teile und Steckverbinder benötigt. Dies führt dazu, dass Lernende die Materialien nicht nutzen können oder ein zusätzlicher Beschaffungsaufwand entsteht.',
		forces: [
			'<ul><li><strong>Motivation:</strong> Wenn die Notwendigkeit, zusätzliche Teile zu kaufen, nicht im Voraus bekannt ist, sinkt die Motivation schnell. Insbesondere bei spontaner Nutzung wird der Drang zum Experimentieren schnell gedämpft, was die Wahrscheinlichkeit verringert, dass der Bausatz erneut verwendet wird.</li>',
			'<li><strong>Beschaffungsschwierigkeiten:</strong> Es kann unklar sein, woher die benötigten Materialien bezogen werden können. Lieferengpässe können zudem die rechtzeitige Beschaffung notwendiger Teile verhindern oder zu längerer Nichtverfügbarkeit führen.</li>',
			'<li><strong>Finanzielle Ressourcen:</strong> Eine finanzielle Einschätzung ist schwierig, wenn der Bausatz allein nicht nutzbar ist. Personen mit begrenzten finanziellen Mitteln oder in Regionen mit schwierigen Lieferbedingungen haben möglicherweise keinen Zugang zu den erforderlichen Zusatzteilen, was die Zugänglichkeit erheblich einschränkt.</li>',
			'<li><strong>Projektabhängige Zusatzteile:</strong> Verschiedene Projekte können unterschiedliche Zusatzteile erfordern, was die Komplexität und den Aufwand für Lernende und Lehrkräfte erhöht.</li>',
			'<li><strong>Vorbereitungszeit für Lehrkräfte:</strong> Lehrkräfte haben oft nur begrenzt Zeit für die Vorbereitung von Unterrichtsmaterialien. Wenn Bausätze zusätzliche Teile oder eine umfangreiche Vorbereitung erfordern, erhöht dies die Arbeitsbelastung und reduziert die Zeit für andere Lehraktivitäten.</li></ul>'
		],
		solution: '<i>Es sollte ein Bausatz verwendet werden, der alle notwendigen Komponenten enthält.</i><br>Diese Vollständigkeit umfasst sowohl Hardware als auch Software. Auf der Hardware-Seite sollte der Bausatz alle notwendigen physischen Komponenten enthalten, die für die Projekte erforderlich sind, wie z. B. verschiedene Sensoren und Aktoren, Verbindungsmaterialien wie Kabel, Stecker und Breadboards sowie Mikrocontroller oder Minicomputer zur Steuerung der Hardware.<br>Auf der Software-Seite sollten die Komponenten leicht zugänglich und nutzbar sein. Dazu gehören vorinstallierte oder leicht installierbare Software-Bibliotheken und Frameworks, die für die Projekte benötigt werden, gut dokumentierte Beispielcodes als Startpunkt für eigene Projekte, eine umfassende Dokumentation aller Aspekte von der Einrichtung bis zur Fehlerbehebung sowie Schritt-für-Schritt-Anleitungen und Tutorials zur Unterstützung des Lernprozesses und Erleichterung des Einstiegs.<br>Zusätzlich sollten Handbücher, Projektideen, Anleitungen und weitere ergänzende Materialien im Bausatz enthalten sein.',
		consequences: {
			benefits: [
				'<ul><li>Lernende können sofort mit dem Programmieren beginnen, ohne auf zusätzliche Teile warten zu müssen.</li>',
				'<li>Die Möglichkeit, direkt zu starten, steigert die Motivation und das Interesse von Lernenden und Lehrkräften.</li>',
				'<li>Da alle notwendigen Komponenten bereits enthalten sind, wird die Planung und Durchführung von Projekten sowohl für Lernende als auch für Lehrkräfte einfacher und unkomplizierter.</li>',
				'<li>Ein umfassender Bausatz bietet eine kohärente und integrierte Lernerfahrung, die speziell auf Anfänger zugeschnitten ist.</li>',
				'<li>Der Kauf eines kompletten Bausatzes ermöglicht die Kenntnis der Kosten im Voraus, was die Finanzplanung erleichtert.</li>',
				'<li>Lehrkräfte sparen Vorbereitungszeit, da alle notwendigen Materialien bereits enthalten sind, sodass sie sich mehr auf den Unterricht und weniger auf die Materialbeschaffung und -vorbereitung konzentrieren können.</li>',
				'<li>All-in-One-Kits ersparen den <strong>Beschaffungsaufwand</strong> und bieten einen strukturierten <strong>Lernpfad</strong> mit einer Reihe von <strong>unterstützten Projekten</strong>.</li></ul>'
			],
			liabilities: [
				'<ul><li>Ein umfassender Bausatz mit allen notwendigen Zusatzteilen ist teurer als ein Basis-Kit, das nur die programmierbare Kernkomponente enthält, da er alle erforderlichen Komponenten umfasst.</li>',
				'<li>Die Standardisierung der enthaltenen Teile kann die Vielfalt und die Möglichkeiten der Projekte, die durchgeführt werden können, einschränken.</li>',
				'<li>Wenn ein Teil des Bausatzes verloren geht oder beschädigt wird, kann es schwieriger sein, dieses spezifische Teil zu ersetzen, da der Bausatz als komplettes Set verkauft wird.</li>',
				'<li>Lehrkräfte und Lernende könnten von den spezifischen Komponenten im Bausatz abhängig werden, was potenziell die Fähigkeit einschränkt, sich in Zukunft an andere Hardware oder Materialien anzupassen oder diese zu nutzen, sowie auf neuere Versionen zu aktualisieren.</li>',
				'<li>Die Abfolge der Projekte in All-in-One-Kits erfordert eine <strong>sorgfältige Planung</strong>, um einen reibungslosen <strong>Lernfortschritt</strong> zu gewährleisten.</li></ul>'
			]
		},
		knownUses: [
			{
				title: 'Little Bits',
				description: 'LittleBits ist ein innovativer Elektronik-Bausatz, der Kindern die Grundlagen von Schaltkreisen und Technik vermitteln soll. Er enthält verschiedene elektronische Bausteine wie Sensoren, Motoren und LEDs, die magnetisch zusammengeklickt werden, um verschiedene Projekte und Erfindungen zu erstellen. Die Abbildung zeigt die Komponenten eines der Kits, des Code Kits.<br>LittleBits ist als Bausatz sehr vollständig und bietet alle notwendigen Komponenten, um direkt nach dem Auspacken mit dem Bauen zu beginnen. Jedes Kit enthält eine Vielzahl von Elektronikmodulen, ein Netzteil und Zubehör wie Montageplatten und Verbindungskabel. Zusätzlich liegen den Kits oft Anleitungshefte bei, und es gibt Zugang zu Online-Ressourcen mit Projektideen und Tutorials.',
				figure: {
					images: [
						{
							src: '/images/littlebits.jpg',
							caption: ''
						}
					],
					mainCaption: 'Alle Inhalte des LittleBits Code Kits',
					altDescription: 'Kabel, Komponenten und Anleitungen des Code Kits'
				},
				demoLink: 'https://littlebits.com/welcome'
			},
			{
				title: 'Dash Robot',
				description: 'Dash Robot ist ein Lernroboter für Kinder, entwickelt von Wonder Workshop. Er kann über eine Tablet- oder Smartphone-App mit einer einfachen, blockbasierten Programmierung gesteuert werden, was Kindern interaktives und praktisches Lernen ermöglicht.<br>Das Dash Robot Kit ist umfassend und enthält den Roboter selbst sowie notwendiges Zubehör wie Ladekabel. Es bietet zudem Zugang zu einer Reihe kostenloser Apps zum Programmieren und Steuern von Dash. Viele Kits enthalten zusätzliches Zubehör wie Baustein-Verbindungsstücke, Aufgabenkarten und Aktivitätsmatten. Die Roboter und ein Beispiel für Erweiterungen sind in den Abbildungen dargestellt. Diese Elemente stellen sicher, dass die Nutzer alles haben, was sie brauchen, um sofort mit dem Lernen und Erkunden verschiedener Programmierherausforderungen zu beginnen.',
				figure: {
					images: [
						{
							src: '/images/dashblank.jpg',
							caption: 'Dot und Dash Roboter'
						},
						{
							src: '/images/dash2.jpg',
							caption: 'Roboter mit Katapult-Ausrüstung'
						}
					],
					mainCaption: ''
				},
				demoLink: 'https://www.makewonder.com/en/dash/'
			},
			{
				title: 'LEGO® Education SPIKE™ Prime',
				description: 'LEGO® Education SPIKE™ Prime ist eine MINT-Lernlösung (STEAM), die LEGO®-Bauelemente, programmierbare Hardware und eine Programmierplattform kombiniert. Sie richtet sich an Schülerinnen und Schüler der Mittelstufe, um sie bei der Entwicklung von kritischem Denken und Problemlösungsfähigkeiten durch praktisches Lernen zu unterstützen.<br>LEGO® Education SPIKE™ Prime ist ein abgerundeter Bausatz, der eine große Auswahl an LEGO®-Steinen, Sensoren, Motoren und den programmierbaren SPIKE™ Prime Hub enthält, wie in der Abbildung gezeigt. Er umfasst auch umfassende Bauanleitungen und Unterrichtspläne für Lehrkräfte. Das Kit ist für den Einsatz im Klassenzimmer konzipiert, eignet sich aber ebenso gut für das individuelle Lernen, da es alle notwendigen Komponenten enthält, um verschiedene Projekte direkt aus dem Karton heraus zu bauen und zu programmieren. Zusätzlich bietet es Zugang zu einer Online-Community und Ressourcen.',
				figure: {
					images: [
						{
							src: '/images/lego2.jpg',
							caption: ''
						}
					],
					mainCaption: 'Alle Inhalte des LEGO® Education SPIKE™ Prime Kits',
					altDescription: 'LEGO-Steine, Kabel und Komponenten des Kits'
				},
				demoLink: 'https://education.lego.com/de-de/products/lego-education-spike-prime-set/45678/'
			},
			{
				title: 'INTIA',
				description: 'INTIA war ein Forschungsprojekt, das sich auf die inklusive Entwicklung von Methoden und Technologien konzentrierte, um Menschen mit Behinderungen und Unterstützungsbedarf bei der Bewältigung des Alltags zu helfen. Es lief von 2019 bis 2023 und umfasste unter anderem einen Koffer.<br>Der INTIA-Koffer soll einen ersten Zugang zu Technik ermöglichen und besteht aus einem Erfahrungsmodul und einem Gestaltungsmodul. Das Modul „Erleben“ enthält ein Escape Game, einen Technikfächer, der als Lexikon fungiert, und verschiedene Komponenten in Form von Sensoren. Das Modul „Gestalten“ besteht aus verschiedenen Kartensätzen, einem Ideenzufallswürfel zur Kreativitätsförderung und Programmierkacheln, die einen einfachen Einstieg in eine Programmiersprache bieten. Der Koffer und sein Inhalt sind in der Abbildung dargestellt.',
				figure: {
					images: [
						{
							src: '/images/intia-escape.jpg',
							caption: ''
						},
						{
							src: '/images/intia-case.jpg',
							caption: ''
						}
					],
					mainCaption: 'INTIA-Koffer und Inhalte',
					altDescription: 'Verschiedene Kabel, ein Tablet und technische Bausteine liegen auf einem Tisch. Ein schwarzer Koffer gefüllt mit bunten Karten, Würfeln und Kacheln.'
				},
				demoLink: 'https://intia.de/intia-koffer/'
			},
			{
				title: 'MOXD IoT Kit',
				description: 'Das MoxdLab der TH Köln hat ein IoT-Kit entwickelt, das primär für das Prototyping genutzt werden kann. Es wird unter anderem im Einführungsmodul „Einführung in die Medieninformatik“ eingesetzt und soll als erster Einstieg in die Programmierung dienen. Das Kit kann komplett ohne Code verwendet werden, bietet aber dennoch die Möglichkeit dazu.<br>Das IoT-Kit enthält einen Raspberry Pi in Kombination mit einem Groveshield, die Groveshield-Anschlüsse sowie verschiedene Sensoren und Aktoren, wie in der Abbildung gezeigt. Es enthält außerdem ein Cheatsheet, das eine Beschreibung der Nodes und nützliche Node-Kombinationen für verschiedene Anwendungsfälle auflistet. Auf dem Raspberry Pi läuft eine Node-RED-Instanz, mit der die Komponenten des Kits bearbeitet werden können.',
				figure: {
					images: [
						{
							src: '/images/iot-kit_emi.jpeg',
							caption: ''
						}
					],
					mainCaption: 'Alle Inhalte des IoT-Kits',
					altDescription: 'Verschiedene Sensoren und Aktoren sowie ein Raspberry Pi liegen vor einem schwarzen Koffer auf einem Holztisch.'
				},
				demoLink: 'https://moxd.io/iotkit'
			}
		]
	}
];

export const citations: Citation[] = [
	{
		id: 1,
		reference: 'Baldasaro, M. M., Maldonado, N., & Baltes, B. (2014). Storytelling to teach cultural awareness: The right story at the right time. <i>LEARNing Landscapes, 7</i>(2), 219-232.'
	},
	{
		id: 2,
		reference: 'Bergin, J. (2006). Active learning and feedback patterns. <i>Portland, Oregon: Paper presented at PloP. Retrieved October, 26</i>, 2011.'
	},
	{
		id: 3,
		reference: 'Bertels, A., & Deimel, D. (2023, July). Storytelling in the Context of Education: A Pattern Language. In <i>Proceedings of the 28th European Conference on Pattern Languages of Programs</i> (pp. 1-16).'
	},
	{
		id: 4,
		reference: 'Connolly, C., Murphy, E., & Moore, S. (2008). Programming anxiety amongst computing students—A key in the retention debate?. <i>IEEE Transactions on Education, 52</i>(1), 52-56.'
	},
	{
		id: 5,
		reference: 'Dillon, A. E., Stolk, J. D., Zastavker, Y. V., & Gross, M. D. (2016, June). Motivation is a two-way street: pedagogies employing discussion in addition to lecture display more positive student motivational response. In <i>2016 ASEE Annual Conference & Exposition.</i>'
	},
	{
		id: 6,
		reference: 'Eckstein, J., Bergin, J., & Sharp, H. (2002). Patterns for active learning. In <i>Proceedings of PLOP</i> (Vol. 2002).'
	},
	{
		id: 7,
		reference: 'Eze, C., & Misava, E. (2017). Lecture duration: A risk factor for quality teaching and learning in Higher Education. <i>Integrity Journal of Education and Training, 1,</i> 1.'
	},
	{
		id: 8,
		reference: 'Faja, S. (2014). Evaluating Effectiveness of Pair Programming as a Teaching Tool in Programming Courses. <i>Information Systems Education Journal, 12</i>(6), 36-45.'
	},
	{
		id: 9,
		reference: 'Hu, Y., Chen, C. H., & Su, C. Y. (2021). Exploring the effectiveness and moderators of block-based visual programming on student learning: A meta-analysis. <i>Journal of Educational Computing Research, 58</i>(8), 1467-1493.'
	},
	{
		id: 10,
		reference: 'Iba, T., & Miyake, T. (2010, March). Learning Patterns: a pattern language for creative learning II. In <i>Proceedings of the 1st Asian Conference on Pattern Languages of Programs</i> (pp. 1-6).'
	},
	{
		id: 11,
		reference: 'Iba, T., & Sakamoto, M. (2011, October). Learning patterns III: a pattern language for creative learning. In <i>Proceedings of the 18th conference on pattern languages of programs</i> (pp. 1-8).'
	},
	{
		id: 12,
		reference: 'Iba, T., Miyake, T., Naruse, M., & Yotsumoto, N. (2009, August). Learning Patterns: a pattern language for active learners. In <i>Conference on Pattern Languages of Programs (PLoP)</i> (Vol. 10, No. 2371736.2371742).'
	},
	{
		id: 13,
		reference: 'Lister, R., Fidge, C., & Teague, D. (2009). Further evidence of a relationship between explaining, tracing and writing skills in introductory programming. <i>Acm sigcse bulletin, 41</i>(3), 161-165.'
	},
	{
		id: 14,
		reference: 'McNerney, T. S. (1999). <i>Tangible programming bricks: An approach to making programming accessible to everyone</i> (Doctoral dissertation, Massachusetts Institute of Technology).'
	},
	{
		id: 15,
		reference: 'Medeiros, R. P., Ramalho, G. L., & Falcão, T. P. (2018). A systematic literature review on teaching and learning introductory programming in higher education. <i>IEEE Transactions on Education, 62</i>(2), 77-90.'
	},
	{
		id: 16,
		reference: 'Münster, G. (2017). <i>Konzeption und Implementierung einer alltagstauglichen Infrastruktur für Innovations- und Kollaborationsräume</i> (Master Thesis, TH Köln).'
	},
	{
		id: 17,
		reference: 'Nolan, K., & Bergin, S. (2016, November). The role of anxiety when learning to program: a systematic review of the literature. In <i>Proceedings of the 16th koli calling international conference on computing education research</i> (pp. 61-70).'
	},
	{
		id: 18,
		reference: 'Paas, F., Renkl, A., & Sweller, J. (Eds.). (2016). <i>Cognitive load theory: A Special issue of educational psychologist</i>. Routledge.'
	},
	{
		id: 19,
		reference: 'Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. <i>American psychologist, 55</i>(1), 68.'
	},
	{
		id: 20,
		reference: 'Santos, Á., Gomes, A., & Mendes, A. (2013, October). A taxonomy of exercises to support individual learning paths in initial programming learning. In <i>2013 IEEE Frontiers in Education Conference (FIE)</i> (pp. 87-93). IEEE.'
	},
	{
		id: 21,
		reference: 'Schwill, A. (1994). Fundamental ideas of computer science. <i>Bulletin-European Association for Theoretical Computer Science, 53,</i> 274-274.'
	},
	{
		id: 22,
		reference: 'Szabo, C., & Sheard, J. (2022). Learning theories use and relationships in computing education research. <i>ACM Transactions on Computing Education, 23</i>(1), 1-34.'
	},
	{
		id: 23,
		reference: 'Van Merrienboer, J. J., & Sweller, J. (2005). Cognitive load theory and complex learning: Recent developments and future directions. <i>Educational psychology review, 17</i>(2), 147-177.'
	},
	{
		id: 24,
		reference: 'Vihavainen, A., Airaksinen, J., & Watson, C. (2014, July). A systematic review of approaches for teaching introductory programming and their influence on success. In <i>Proceedings of the tenth annual conference on International computing education research</i> (pp. 19-26).'
	},
	]