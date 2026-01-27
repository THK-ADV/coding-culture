import type { Citation, Pattern } from './types';

export const patterns: Pattern[] = [
	{
		id: 'code-without-code',
		title: 'Code Without Code',
		description: 'Präsentieren Sie zunächst codebasierte Konzepte ohne Code, sondern mit physischen, greifbaren Objekten.',
		context:
			'As part of a low-level workshop, new computer science concepts, such as algorithms, should be taught to participants. The workshop is aimed at students without prior experience. The workshop focuses mainly on teaching coding-based concepts and is conducted by a computer science expert.',
		problem:
			'Participants find it difficult to grasp and understand new concepts when they are presented and applied directly in code form. Additionally, code representation is not always linked to what actually happens. This can lead to frustration and can reduce the motivation of the participants to actively participate in the workshop.',
		forces: [
			'<ul><li><strong>Prior knowledge:</strong></li> Participants have no or a varying level of prior knowledge in the field of computer science, for example knowledge of algorithms or programming languages.',
			'<li><strong>Complexity:</strong></li> Different algorithms or concepts that are to be covered in the workshop cannot be conveyed in a beginner-friendly way due to their complexity.',
			'<li><strong>Participant Preparation:</strong></li> As this is a low-level workshop, no standardized preparation can be expected from the participants.',
			'<li><strong>Didactic quality:</strong></li> The workshop holder may not be able to convey complex content in an understandable way.',
			'<li><strong>Attention span:</strong></li></ul> A short attention span can hinder learning, especially for new concepts.'
		],
		solution:
			'<i>Initially present coding-based concepts without code, but with physical, tangible objects instead.</i><br>' +
			'Instead of presenting new concepts directly in the form of code, they are first visualized using physical objects. However, this should not replace a code-based implementation, but rather serve as an additional level of the workshop. This is particularly useful as an introduction to a new topic <sup>[14]</sup>.' +
			'A possible implementation of the solution described in the context of a coding workshop could be, the creation of algorithms from scraps of paper. The individual pieces of paper represent various building blocks such as if statements, loops or variables. If, for example, an algorithm such as calculating an age based on the year of birth is to be learned as part of the workshop, participants can focus on solving the algorithmic problem and experiment freely with the building blocks without being restricted by code or a compiler.',
		consequences: {
			benefits: [
				'<ul><li>The visualization of concepts through physical objects allows reducing the <strong>complexity</strong> of the workshop.</li>',
				'<li>A more tangible visualization increases the participants\' <strong>engagement</strong> <sup>[14]</sup>.</li>',
				'<li>Visualization through physical objects is <strong>independent of programming languages</strong> and their syntax.</li>',
				'<li>The <strong>threshold for engagement</strong> for participants with little or no prior knowledge is reduced, resulting in an increased <strong>beginner-friendliness</strong> <sup>[14]</sup>.</li>',
				'<li>A physical visual representation increases the <strong>memorability</strong> of new content.</li>',
				'<li>The physical nature allows an <strong>explorative</strong> discovery of new concepts.</li>',
				'<li>The initial exploration of a new concept in physical form reduces the required <strong>transfer performance</strong> to the code-based representation.</li>',
				'<li>As there is no real code or compiler, the additional <strong>overhead and confusion of potential error messages</strong> while trying to solve a problem is removed.</li>',
				'<li>The use of physical objects, instead of a computer, allows for a <strong>change of media</strong> in the workshop.</li></ul>'
			],
			liabilities: [
				'<ul><li>The required <strong>preparation</strong>, especially for the initial workshop, increases.</li>',
				'<li>More <strong>time</strong> is needed within the workshop to convey content.</li>',
				'<li>Physical objects are difficult to use for participants with <strong>motor impairments</strong>.</li>',
				'<li><strong>Complex concepts</strong> or algorithms cannot always be completely represented by physical objects.</li>',
				'<li>Physical objects can be <strong>distracting</strong> from the actual content, as they can tempt participants to play around instead of focusing on the actual content.</li>',
				'<li>The <strong>seriousness</strong> of concepts can be lost. Especially for experienced participants, this can lead to boredom and the feeling of not learning anything.</li>',
				'<li>Excessive <strong>degrees of freedom</strong> with physical coding representations may lead participants to perform actions that are not feasible in actual code, potentially fostering misconceptions and hindering the transition to practical implementation.</li>',
				'<li>Participants are not always able to identify problems in their solution themselves, therefore <strong>external validation</strong> by a teacher is needed.</li></ul>'
			]
		},
		knownUses: [{
			title: 'Coding Culture',
			description:
				'As part of the "Coding Culture Oberberg" research project, a workshop was held with a focus on sorting algorithms. One of the goals was to teach the bubble sort algorithm. However, before this was presented in code-based form, it was visualized using toy bricks, which are shown in figure 1. First, participants were able to try out different sorting concepts by using toy bricks of different heights. For this purpose, the procedure of the bubble sorting algorithm was then visualized by the workshop holder using the toy bricks. Before this concept was then transferred to a code-based representation, the participants had time to reproduce the procedure with their own toy bricks.',
			demoLink: 'https://th-koeln.sciebo.de/s/l3q4BJ5xdoyTI9T',
			figure: {
				images: [
					{ src: '/images/lego-1.jpg', caption: 'Initial state' },
					{ src: '/images/lego-2.jpg', caption: 'First pass' },
					{ src: '/images/lego-3.jpg', caption: 'Second pass' },
					{ src: '/images/lego-4.jpg', caption: 'End state' }
				],
				mainCaption: 'Multiple toy bricks with different heights to visualize sorting algorithms.',
				altDescription:
					'An image of multiple toy bricks with different heights, which are used as part of a computer science workshop, to visualize sorting algorithms.'
			}
		}],
		relatedPatterns: [
			{
				name: 'Building Materials <sup>[16]</sup>',
				description:
					'To enable participants to for example build algorithms in a paper-based form, building materials like paper or building bricks are required.'
			},
			{
				name: 'Prototyping <sup>[11]</sup>',
				description:
					'The reduce in Overhead through the abundance of real code syntax supports the exploration of a topic and can therefore be used to try out ideas in a first prototype.'
			}
		]
	},
	{
		id: 'hands-on-first',
		title: 'Hands On First',
		description: 'Einführung eines ersten praktischen Teils als Ausgangspunkt des Workshops.',
		context:
			'As part of a coding workshop, the educators\' main goal is to keep participants motivated and engaged. At the same time, participants should get hands-on experience about the learned concepts. When planning the sequence of a workshop, educators consider different established approaches.',
		problem:
			'The traditional design includes an initial theoretical input, with hands-on practice later on. This workshop design reduces the motivation of the participants, as they have to wait to work independently <sup>[5]</sup>. This can lead to a decrease in the participant\'s commitment to the workshop.',
		forces: [
			'<ul><li><strong>Target Group:</strong> Especially with a younger target group, it is important to pick them up early, as they lose motivation more quickly due to a shorter attention span. The reduced motivation further exacerbates their already limited attention span, compounding the challenge of maintaining active participation.</li>',
			'<li><strong>Motivation:</strong> The motivation of the participants is crucial for the success and the execution of the workshop.</li>',
			'<li><strong>Early Impression:</strong> During a workshop, the focus is on the initial introductory part as it is largely responsible for the success and atmosphere within the workshop and therefore a priority.</li>',
			'<li><strong>Complexity:</strong> When teaching complex topics, some prior knowledge may be required.</li>',
			'<li><strong>Redundancies:</strong> Depending on the prior knowledge of the participants, a frontal input can contain redundancies and thus reduce the motivation of some participants to a greater extent.</li>',
			'<li><strong>Learning Preferences:</strong> Different participants have different preferences in terms of how knowledge should be conveyed. Although those preferences don\'t impact the actual learning process, they can influence participants\' motivation.</li>',
			'<li><strong>Interaction:</strong> Frontal input only allows very limited interaction for the participants. </li></ul>'
		],
		solution:
			'<i>Introduce an initial practical part as the starting point of the workshop.</i><br>' +
			'Instead of a frontal input as an introduction, the workshop should start with a practical part. This practical phase focuses on the interactive examination of the given topic. The teacher should allow the interactive exploration of the topic and act as support for learners if problems or barriers occur. This approach is also supported by the learning orientation "constructivism," which describes learning as the process of learners actively constructing knowledge. The learner is an active participant in the process and requires engagement <sup>[22]</sup>. As this solution describes an initial hands-on part, the example from the <i>Code without Code</i> pattern can be applied here. In the context of learning basic algorithms, participants can freely experiment with the existing building blocks to get a first understanding of a new topic. Afterward, further explanation should be provided by the workshop leader. For this running example, it is important to note that the solution of <i>Hands-on first</i> is not only restricted to get hands-on with physical objects but can also allow for an initial exploration in code.',
		consequences: {
			benefits: [
				'<ul><li>An initial practical part allows the workshop leader to get a <strong>first impression</strong> of the participants\' cognitive level and prior knowledge to adjust the workshop accordingly.</li>',
				'<li>Exploring a topic independently supports <strong>individual learning speeds</strong>.</li>',
				'<li>Going hands-on with a topic <strong>increases</strong> the participant\'s <strong>motivation</strong>, especially with a younger target group.</li>',
				'<li>For the following parts of the workshop, participants can <strong>fall back on} their <strong>practical experience</strong>, which can lead to a sense of achievement and positive emotions.</li>',
				'<li>An initial Hands-On part with optional guidance by an educator supports <strong>experience-based learning</strong>.</li>',
				'<li>A practical introduction can be used to convey a new topic, but also to sum up and <strong>recollect prior knowledge</strong>.</li></ul>'
			],
			liabilities: [
				'<ul><li><strong>Depending on the topic and prior knowledge</strong>, a practical introduction might not be possible.</li>',
				'<li>Working independently <strong>requires</strong> some amount of <strong>prior knowledge</strong>.</li>',
				'<li>A practical part at the beginning can set <strong>false expectations</strong> for the rest of the workshop.</li>',
				'<li>Additional <strong>preparation</strong> from the workshop supervisor is required.</li>',
				'<li>Learners might be <strong>too shy to ask</strong> the workshop leader for support.</li>',
				'<li>For some participants, an initial practical part might be <strong>less fun</strong> and therefore hinder their motivation.</li></ul>'
			]
		},
		knownUses: [{
			title: 'Hour of Code',
			description:
				'The "Hour of Code" is an international initiative to promote computer science in an educational context. Specifically, it is a concept that provides various activities and learning videos to give learners of all levels an insight into programming within one hour. Hour of Code includes an extensive collection of different learning resources and tasks, which can be used by interested teachers after registering for an event. Thanks to the community-driven approach, this collection is regularly expanded. Hour of Code is already used by over 400 partners and over 20,000 teachers. The figure shows an exemplary overview of some activities on offer.<br>' +
				'The "Hour of Code" initiative aligns with the "hands-on first" approach by providing learners with interactive activities, tasks and learning videos aimed at demystifying computer programming concepts within a short timeframe. This approach emphasizes active engagement and practical exploration, allowing learners to dive into coding concepts quickly and experiment with real code examples.',
			figure: {
				images: [
					{
						src: '/images/hourofcode.png',
						caption: 'A collection of possible "Hour of Code" coding activities'
					},
					{
						src: '/images/hoc-application.png',
						caption: 'Exemplary Hour of Code task "Hello World: Transformers One"'
					}
				],
				mainCaption:
					'The application "Hour of Code", which consists of smaller individual learning tasks.',
				altDescription:
					'The picture shows the application Hour of Code, which consists of multiple smaller learning tasks for introductory programming.'
			},
			demoLink: 'https://code.org/hourofcode'
		}],
		relatedPatterns: [
			{
				name: 'First Steep <sup>[12]</sup>',
				description:
					'<i>First Steep</i> supports the idea of straight jumping into an interesting sounding topic and following your intuition alongside. This idea aligns with the solution of <i>Hands-on first</i>, which supports the exploratory introduction into a new topic.'
			},
			{
				name: 'Prototyping <sup>[11]</sup>',
				description:
					'Prototyping your ideas, can support the aspect of exploring a new topic. Participants can therefore validate or iterate their ideas.'
			},
			{
				name: 'Students Decide <sup>[6]</sup>',
				description:
					'<i>Students Decide</i> supports the idea of student leading the topic of a class, based on their interests and expectations. This can also be applied to the structure of a Coding Workshop.'
			}
		]
	},
	{
		id: 'teamwork',
		title: 'Teamwork Makes The Dream Work',
		description: 'Führen Sie kollaborative Ansätze in Programmier-Workshops ein.',
		context: 'In coding workshops, there exists a variety of potential teaching formats. The traditional approach to convey knowledge relies on independent application of solutions to provided tasks.',
		problem: 'If workshop participants work on tasks individually, they can only draw on their own skill set and thus only consolidate their own strengths and weaknesses. It is not possible to benefit from the knowledge of other participants.',
		forces: [
			'<ul><li><strong>Motivation:</strong> Encountering frequent dead ends in problem-solving can be demotivating, especially when learners feel they lack the resources or guidance to overcome obstacles efficiently.</li>',
			'<li><<strong>Isolated Learning Experience:</strong> Without opportunities for discussion and collaboration, learners may feel isolated in their learning journey, hindering their ability to explore concepts deeply.</li>',
			'<li><strong>Limited Discussion Opportunities:</strong> In a traditional workshop setting, the instructor typically serves as the sole point of contact for questions and discussions. This limitation restricts the diversity of perspectives and solutions available to learners.</li>',
			'<li><strong>Instructor Dependency:</strong> Relying solely on the instructor for guidance creates a hierarchical learning environment that may discourage learners from seeking help, thereby limiting their growth and understanding.</li></ul>'
		],
		solution: '<i>Introduce collaborative approaches in coding workshops.</i><br>Collaborative approaches like Pair Programming and group tasks encourage team members to engage actively, share knowledge, and collectively tackle coding challenges. This process fosters collective learning and mutual support among participants <sup>[8]</sup>.<br>Based on the previous running examples, the explained solution can also be applied to a coding workshop for learning basic algorithms. <i>Teamwork makes the dream work</i> can be applied at multiple times across the workshop. The first example would be an initial hands-on first part, where participants can freely explore the given topic. When also applying the <i>Code without Code</i> solution, multiple participants could try to build algorithms from paper building blocks in groups. They can therefore discuss solutions and possible outcomes. <i>Teamwork makes the dream work</i> can also be applied when doing real coding, for example when doing pair programming.<br>Additionally, it\'s important to consider the optimal group size when implementing collaborative learning strategies, as well as ensuring an equal distribution of tasks among participants to prevent overburdening certain individuals and underutilizing others. Choosing an appropriate group size ensures effective communication and collaboration among participants. For example, smaller groups may facilitate more active participation and individual engagement, while larger groups can provide diverse perspectives and collective problem-solving abilities. Carefully selecting the group size is a crucial aspect of successfully implementing collaborative approaches in coding workshops. A maximum group size of four participants is recommended <sup>[24]</sup>.',
		consequences: {
			benefits: [
				'<ul><li>Collaborative approaches in coding workshops facilitate a more engaging and interactive learning environment, where participants can <strong>benefit from diverse perspectives</strong> and collective problem-solving, leading to a deeper understanding of coding concepts.</li>',
				'<li>By mitigating quick dead ends and providing opportunities for mutual support, collaborative learning fosters a supportive atmosphere that encourages participants to persevere through challenges, leading to increased <strong>motivation</strong> and confidence.</li>',
				'<li>Breaking <strong>away from isolated learning experiences</strong> allows for more extensive discussions and knowledge exchange among peers, enriching the learning process and promoting deeper understanding of coding principles.</li>',
				'<li>Encouraging collaboration <strong>reduces</strong> the <strong>dependency on a single instructor</strong>, opening up access to a wider range of learning resources and expertise within the group, thereby enhancing the quality and diversity of learning experiences.</li>',
				'<li>Explaining concepts to peers reinforces understanding, making collaborative learning an effective <strong>method for comprehension</strong>.</li>',
				'<li>Collaboration ensures that all members contribute to and benefit from the collective effort, promoting <strong>equitable skill development</strong>.</li>',
				'<li>In addition to technical skills, collaborative learning nurtures essential <strong>soft skills</strong> like teamwork, communication, and problem-solving.</li>',
				'<li>Collaborative learning encourages participants to <strong>engage on multiple levels</strong>, fostering deeper involvement and understanding. Especially fast learners find value in collaborative tasks, as they provide opportunities for further exploration and contribution after completing given tasks.</li></ul>'
			],
			liabilities: [
				'<li>In collaborative settings, there is a risk of some participants contributing more than others, leading to <strong>uneven skill development</strong> and a lack of <strong>fairness</strong> in workload distribution.</li>',
				'<li>Participants may <strong>gravitate towards tasks they are already proficient</strong> in, limiting opportunities for skill development in new areas.</li>',
				'<li>The effectiveness of collaborative learning relies heavily on the <strong>dynamics within the group</strong>. Disruptions or conflicts among team members could hinder the learning process and negatively impact the overall experience.</li>',
				'<li>Finding the right balance between providing autonomy for individual learning and offering guidance within a collaborative framework can be challenging, as it requires careful management to ensure that participants receive <strong>adequate support</strong> while still having the opportunity to <strong>explore independently</strong>.</li>',
				'<li>Collaborative environments may inadvertently lead to <strong>groupthink</strong>, where participants conform to the dominant ideas within the group, <strong>limiting critical thinking and creativity</strong>.</li></ul>'
			]
		},
		knownUses: [{
			title: 'Pair Programming',
			description: 'Pair programming is a technique where two persons work together at one computer, while developing software. One person takes the role of the driver. The Driver writes the code while the other person, named the navigator, reviews each line of code as it\'s been written. For the best results, both persons should be in both positions at least once. This collaborative approach fosters continuous feedback, leading to higher code quality and fewer bugs. Pair programming also promotes knowledge sharing and helps team members learn from each other\'s expertise.',
			figure: {
				images: [
					{
						src: '/images/pairprogramming.png',
						caption: ''
					}
				],
				mainCaption: 'A visualization of "Pair Programming"',
			},
			demoLink: 'https://www.linkedin.com/pulse/when-implement-pair-programming-getinrhythm/'
		}],
		relatedPatterns: [
			{
				name: 'Community of Learning <sup>[10]</sup>',
				description: '<i>Community of Learning</i> supports the idea of learning together in a group, as the individual capacity is limited. This aligns with the solution of <i>Teamwork makes the dream work</i>.'
			},
			{
				name: 'Release of Thought <sup>[12]</sup>',
				description: 'While working together as a team, participants are able to talk about their ideas with others. They therefore get a chance to reflect upon their ideas.'
			},
			{
				name: 'Ice Breaker <sup>[2]</sup>',
				description: 'The idea behind <i>Ice Breaker</i> is to provide an activity for a group to get them to interact with each other, so there is no awkward moment among new group members.'
			},
			{
				name: 'Open-Process Learning <sup>[11]</sup>',
				description: '<i>Open-Process Learning</i> is about opening your learning process to others. This allows the exchange and discussion of ideas.'
			}
		]
	},
	{
		id: 'connect-the-pieces',
		title: 'Connect the Pieces',
		description: 'Implementieren Sie einen Moment im Workshop, in dem alle bisherigen Themen miteinander verbunden und in Beziehung gesetzt werden.',
		context: 'In a coding workshop, different contents, which are related to a bigger topic, are taught. Even if these topics belong to a common domain, they are initially treated separately and independently of each other. This approach aligns with the principle of "Divide & Conquer", breaking down complex subjects into smaller, more manageable units. Furthermore, in consideration of the cognitive load theory, the separate introduction of individual theory leads to a reduction in the cognitive burden on participants <sup>[18]</sup>.',
		problem: 'Participants are unable to detect the relevance of the individual topics in relation to each other and to the common topic. This lowers the motivation of the participants and thus reduces their commitment to the workshop.',
		forces: [
			'<ul><li><strong>Domain specific knowledge:</strong> Since the taught topics are new to the participants, not everyone has the domain specific knowledge for the common topic.</li>',
			'<li><strong>Limited attention span:</strong> Participants only have a limited attention span and can therefore not memorize all individual topics <sup>[7]</sup>.</li>',
			'<li><strong>Engagement:</strong> Initially seemingly unrelated topics can reduce participant engagement.</li>',
			'<li><strong>Purpose:</strong> Participants might not see the purpose in learning seemingly unrelated topics.</li>',
			'<li><strong>Application of knowledge:</strong> It might be hard for participants to apply individual topics in the real world without further context.</li></ul>'
		],
		solution: '<i>Implement a moment in the workshop where all previous topics are connected and put in relation.</i><br>During the workshop, there should be a moment when the topics that have so far been considered independently of each other are placed in relation to each other and to the common theme. It is important that participants can see and understand a coherent picture from the individual topics. At this point, the topics should also be placed in relation to the general domain. The appropriate time to connect the pieces can either be towards the end or after each individual subtopic that adds to the greater domain.<br>The presented solution can also be applied to the running example. \textit{Connect the pieces} should act as the highlight of the workshop. Applying this to the topic of learning basic algorithms, a possible outcome can be the linking of previously learned algorithms, which at first may seem to be unrelated to each other. Another possibility is to show how the previous algorithms can act as a foundation for a bigger and more complex algorithm.',
		consequences: {
			benefits: [
				'<ul><li>Linking multiple topic together leads to a <strong>deeper understanding</strong>.</li>',
				'<li>Recognizing relations between topic and their relevance can increase participants\' <strong>motivation</strong>.</li>',
				'<li>Linking previous topic together can be a <strong>highlight</strong> of the workshop.</li>',
				'<li>The linking of topics gives <strong>more structure</strong> to the workshop.</li>',
				'<li>Linking topic together can trigger a <strong>surprise effect</strong> for the participants.</li>',
				'<li>Recognizing relations between topics can motivate participants to <strong>dive further</strong> into a topic on their own.</li>',
				'<li>The separation into different subtopics in the beginning inherently conveys the divide and conquer paradigm, which plays an important role in the realm of computer science <sup>[21]</sup>.</li></ul>'
			],
			liabilities: [
				'<ul><li>The linking of topics needs to be planned and therefore leads to an <strong>increased preparation effort</strong>.</li>',
				'<li>To recognize all relations between topics, <strong>every individual topic must be understood</strong> at least to a certain degree.</li>',
				'<li>Linking multiple topics and therefore summarize them again, can be seen as a <strong>redundancy</strong> from the participants which can lower the attention.</li>',
				'<li>Not every topic can be <strong>partitioned</strong> into small logical chunks.</li></ul>'
			]
		},
		relatedPatterns: [
			{
				name: 'Hidden Connections <sup>[12]</sup>',
				description: '"Hidden Connection" supports the idea of finding hidden connections among topic. The allows for a new perspective on already known topics and therefore aligns with the concept of "Connect the pieces" to paint a bigger picture for workshop participants.'
			},
			{
				name: 'Larger than Life <sup>[6]</sup>',
				description: '"Larger than life" supports the idea of giving students a big complex topic upfront and slowly work towards that topic. Even though this is contrary to "Connect the Pieces", a switch in perspective could be used in a coding workshop.'
			}
		]
	},
	{
		id: 'take-it-home',
		title: 'Take It Home',
		description: 'Verschenken Sie greifbare Artefakte für eine bessere Einprägung.',
		context: 'The pivotal point of coding workshops lies in knowledge dissemination, which involves the effective transfer of information and skills from the facilitator to the participants. Most of these workshops are self-contained, lacking subsequent tasks or assignments as well as follow-up workshops. Upon the conclusion of coding workshops, learners leave the knowledge field that was taught.',
		problem: 'Participants face challenges retaining coding concepts post-workshop without reinforcement. This inability to retain knowledge leads to a decline in proficiency and limited application of learned skills. This challenge primarily stems from the absence of regular repetition of the acquired content.',
		forces: [
			'<ul><li><strong>Application Challenges:</strong> Implementing learned skills becomes difficult without consistent practice.</li>',
			'<li><strong>Fading Memories:</strong> Event if participants want to repeat the new skills, details from the workshop might be diminished after some time, hindering the recall of crucial concepts.</li>',
			'<li><strong>Diminished Motivation:</strong> Without tangible reminders or continuous support, participants\' enthusiasm wanes for applying newfound knowledge.</li>',
			'<li><strong>External Distractions:</strong> Engagement with other events might distract learners from the acquired knowledge and impact retention.</li>',
			'<li><strong>Missing Hardware:</strong> Not every workshop participant owns appropriate hardware, to apply the newly acquired knowledge at home.</li></ul>'
		],
		solution: '<i>Gift tangible artifacts for enhanced retention.</i><br>Deliver a tangible artifact to participants at the workshop\'s conclusion. This artifact, whether physical or digital, serves as a continuous reminder of key lessons, encouraging individuals to enhance their newly acquired skills. It ideally doubles as a tool to retrace developed solutions. This highlights the importance of its practical relevance beyond mere play. Small objects are particularly effective in this context, because they can be taken anywhere to bring the reminder into different environments.<br>To further emphasize the artifacts\' purpose beyond mere mementos, it is crucial that these items are directly linked to the workshop\'s core content, providing a tangible means for participants to revisit and practice the learned material. This approach transforms the artifact from a simple keepsake into a functional component of the learning experience, extending its educational impact well beyond the workshop setting.<br>For applying this solution, it is possible to build up upon the previous running examples. If appropriate for the topic of the workshop, the hands-on building blocks from the <i>Hands on first</i> pattern can be gifted to the workshop participants. Sticking to the example of learning basic algorithms, participants could use the building blocks at home to either repeat the topics from the workshop or try to solve new algorithmic problems.',
		consequences: {
			benefits: [
				'<ul><li>Continuous reminders of key concepts fortify participants\' ability to retain coding knowledge post-workshop through <strong>repetition</strong>. As individuals are reminded of key concepts, they are prompted to repeatedly engage with and review the material.</li>',
				'<li>The artifact encourages consistent practice, aiding participants in <strong>applying</strong> coding skills effectively.</li>',
				'<li>Connections fostered through the artifact stimulate interest, prompting deeper exploration and understanding of workshop content to increase <strong>motivation</strong>.</li>',
				'<li>The lasting impression of the memory artifact potentially generates more recommendations and <strong>follow-up workshops</strong>, as participants can <strong>share their experience</strong> with others.</li></ul>'
			],
			liabilities: [
				'<ul><li>There\'s a risk that the artifact\'s novelty wears off quickly, potentially leading to its rapid <strong>forgetfulness or displacement</strong> from participants\' attention.</li>',
				'<li>Participants might become <strong>overly reliant</strong> on the memory artifact, neglecting other revision methods, impacting their ability to engage in diverse learning approaches effectively.</li>',
				'<li>The increased disposal of artifacts, particularly in large quantities, might pose challenges in waste management and negatively affect <strong>environmental sustainability</strong>.</li>',
				'<li>The use of unfitting objects can lead to <strong>distraction</strong> from the actual content</li>',
				'<li>Preparing tangible artefacts for every workshop participant results in <strong>additional labour and costs</strong> for the workshop leader. This increases with the number of participants.</li></ul>'
			]
		},
		knownUses: [
			{
				title: 'Coding Culture',
				description: 'During the "Coding Culture in Oberberg" research project, a workshop was conducted for students age 11 to 13. Within this workshop, the Bubble Sort algorithm was taught. At the conclusion of the workshop, each participant received a 3D-printed artifact as a physical object, shown in the, representing the approach used to teach the Bubble Sort algorithm. During the workshop, participants sorted towers themselves, a process that can also be carried out using the artifact.',
				figure: {
					images: [
						{
							src: '/images/3d-print.jpg',
							caption: '3D-printed object'
						},
						{
							src: '/images/lego.jpg',
							caption: 'Common toy bricks'
						}
					],
					mainCaption: 'Comparison of 3D-printed object and bricks used in the workshop',
				}
			},
			{
				title: 'Pattern Coins',
				description: 'At EuroPLoP 2023, the Iba Lab at Keio University brought coins, as seen in the figure, intended to facilitate the exchange and practice of patterns within a conference context. These coins contain essential information about the patterns they represent. They serve the purpose of gift-giving as an act and spreading patterns in a community that might benefit from their use. The continuous confrontation with patterns in various contexts as well as the conversations the gift giving sparks leads to retention of their content and greater application. The concept of Pattern Cards serves a similar purpose and is also commonly used within the pattern community.',
				figure: {
					images: [
						{
							src: '/images/pattern-coins.jpeg',
							caption: ''
						}
					],
					mainCaption: 'Wooden pattern coins from EuroPLoP 2023'
				}
			}
		],
		relatedPatterns: [
			{
				name: 'Output-Driven Learning <sup>[12]</sup>',
				description: 'Output-Driven Learning supports the idea of working towards a concrete output at the end of a learning session. This can be applied to where for example concrete buildings blocks are being build and can then be gifted to the participants as part of Take it home.'
			},
			{
				name: 'Embodied Skills <sup>[11]</sup>',
				description: 'Continuous practice can help to acquire a desired skill. Giving participants something to take home, enables them to repeat the topic of the workshop or solve open questions.'
			}
		]
	},
	{
		id: 'abstract-guided-instruction',
		title: 'Abstract Guided Instruction Through Storytelling',
		description: 'Bieten Sie ein hohes Maß an Abstraktion bei minimaler Interaktion, indem Sie Metaphern im Rahmen des Storytelling verwenden.',
		teaserImg: '/images/agi.png',
		context: 'Learners are engaging with programming for the first time and have no prior experience. It is essential to introduce and explain various coding concepts to establish a foundation for programming.',
		problem: 'Learning coding concepts without any prior experience poses a significant entry barrier, as it requires a completely new way of thinking<sup>[15]</sup>. The success in programming depends on several predictors such as algorithmic thinking, logical reasoning, and mathematical skills, none of which can be assumed as given.',
		forces: [
			'<ul><li><strong>Intangible Concepts:</strong> Programming concepts are often abstract and difficult to understand, especially without practical examples and lack familiar references learners can relate to.</li>',
			'<li><strong>Lack of Familiar References:</strong> Many concepts have little to no connection to already familiar topics, complicating comprehension.</li>',
			'<li><strong>Wrong Implications:</strong> When learners use familiar topics to grasp concepts without guidance of an educator, they might use inappropriate metaphors that lead to wrong implications.</li>',
			'<li><strong>Computer Anxiety:</strong> Learners often fear using computers, particularly for programming, and generally fear making mistakes, which leads to hesitant and insecure learning<sup>[17]</sup>.</li>',
			'<li><strong>Cognitive Load:</strong> The cognitive load is high when many diverse new concepts must be learned simultaneously<sup>[23]</sup>.</li>',
			'<li><strong>Concept Integration:</strong> It is challenging to recognize and understand the relationships between different programming concepts.</li>',
			'<li><strong>Sequential Concepts:</strong> Many programming concepts are sequential and build upon each other, making understanding the basics crucial<sup>[13]</sup>. If foundational concepts are not fully grasped, it impedes the learning of more advanced concepts or the connections between them.</li>',
			'<li><strong>Motivation:</strong> Without early successes, learners often lose motivation quickly<sup>[20]</sup>.</li></ul>'
		],
		solution: '<i>Provide a high level of abstraction with minimal interaction by using metaphors within the framework of storytelling.</i><br>A suitable methodology to introduce programming to learners without prior experience involves using teaching methods that offer a high level of abstraction and require minimal direct interaction of learners. This approach allows learners to gradually familiarize themselves with new concepts without becoming overwhelmed. A central role of this approach is the use of Storytelling, which is defined as "Augment[ing] the transfer of knowledge through a narrative method that uses rhetorical devices to create tension in order to present a fact-heavy topic in the form of a story"<sup>[3]</sup>. This method can help to link various concepts and present them in an understandable and relatable context. Appropriate metaphors should be used to make abstract programming concepts more tangible. Well-chosen metaphors help avoid misunderstandings and explain complex ideas in a way that is accessible and understandable for beginners. Combining these approaches facilitates the entry into programming and lowers the learning barrier.',
		consequences: {
			benefits: [
				'<ul><li>The use of storytelling and appropriate metaphors creates a <strong>connection to familiar concepts</strong>, improving understanding<sup>[1]</sup>.</li>',
				'<li>Stories are <strong>easier to remember</strong>, helping learners to better retain concepts<sup>[1]</sup>.</li>',
				'<li>A methodology with high abstraction and minimal direct interaction requires <strong>detailed guidance</strong>, leading to quicker successes for beginners.</li>',
				'<li>The <strong>entry barrier</strong> is very low due to the high level of abstraction and resultant accessibility, making it easier for learners to engage with new concepts.</li>',
				'<li>This methodology and extensive guidance minimize the room for errors, boosting learners\' <strong>confidence</strong> and <strong>reducing fear of failure</strong>.</li>',
				'<li>Through storytelling, learners can identify with the narrative, which increases <strong>learning motivation</strong>.</li></ul>',
			],
			liabilities: [
				'<ul><li>High abstraction and extensive guidance create a very <strong>restricted framework</strong> with limited flexibility and exploration opportunities, which leads to a linear experience for learners that might be harmful to their natural curiosity.</li>',
				'<li>The <strong>abstract context</strong> can quickly become unsuitable as learners progress and the methodological framework no longer meets their needs.</li>',
				'<li>The <strong>distance from code</strong> due to high abstraction can make the transition from metaphors to text-based code with syntax challenging.</li>',
				'<li>With sequential concepts, a frequent <strong>change of metaphors</strong> may be necessary, complicating understanding and maintaining continuity in the learning process. This process also includes the challenge of creating fitting metaphors for educators.</li></ul>'
			]
		},
		knownUses: [
			{
				title: 'Osmo Coding Awbie',
				description: '"Osmo Coding Awbie" is an interactive game designed for children, using physical blocks that interact with an iPad to teach basic coding concepts. Players arrange these tangible blocks in front of the iPad to create sequences of commands that guide Awbie, a playful character, through various adventures in a colorful virtual world.<br>The storytelling revolves around Awbie\'s journey, filled with challenges and rewards, engaging children through a narrative that makes learning enjoyable. The adventure and treasure hunt theme serves as a metaphor for coding, illustrating concepts such as sequencing and logic in a playful context. The app is shown in the figure.',
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
					mainCaption: 'Coding Awbie App selection screen and level gameplay with use of tangible coding blocks',
					altDescription: 'Coding Awbie App level selection screen and level with code blocks to go through the story'
				}
			},
			{
				title: 'How to Code a Sandcastle',
				description: '"How to Code a Sandcastle" is a children\'s book by Josh Funk that introduces young readers to programming concepts through a delightful story. The book follows Pearl and her robot friend Pascal as they try to build the perfect sandcastle on the beach.<br>The book abstracts coding by breaking down the process of building a sandcastle into simple, step-by-step instructions that mirror coding logic. Through its engaging narrative, it explains complex ideas in an accessible way. The story of Pearl and Pascal captures the readers\' imagination, making the learning process fun and relatable. The metaphor of constructing a sandcastle effectively conveys the principles of programming, such as planning, sequencing, and debugging, with Pascal the robot representing a computer following coded commands. The book cover and an inside view of the book is shown in the figure.',
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
					mainCaption: 'Book cover and inside view',
					altDescription: 'Book cover and book content of "How to Code a Sandcastle"'
				}
			},
			{
				title: 'Adventures in Coding',
				description: '"Hello Ruby: Adventures in Coding" by Linda Liukas is a book that introduces children to the world of coding through the adventures of Ruby, a curious and imaginative girl. The book combines storytelling with interactive activities to teach foundational programming concepts.<br>"Hello Ruby" uses narrative and visual abstraction to convey coding principles. Ruby\'s adventures in a whimsical, illustrated world make abstract programming concepts tangible and relatable for young readers. The storytelling is rich and imaginative, capturing children\'s interest and making the learning process enjoyable. Two examples of storytelling are shown in the figure. Each adventure Ruby undertakes serves as a metaphor for various coding concepts. For instance, problem-solving quests and treasure hunts illustrate debugging and algorithmic thinking, allowing children to learn coding in a playful and engaging manner.',
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
					mainCaption: 'Inside view of the book',
					altDescription: 'Book Content'
				}
			}
		]
	},
	{
		id: 'block-based-programming',
		title: 'Block-Based Programming',
		description: 'Bieten Sie interaktive Lernlösungen mit geringem Abstraktionsgrad unter Verwendung der blockbasierten Programmierung.',
		teaserImg: '/images/bbp.png',
		context: 'Learners understand the basic concepts behind programming and algorithmic thinking at a high level of abstraction. They want to expand their knowledge and learn how to write syntactically correct code in order to create a working program.',
		problem: 'There is a considerable discrepancy between understanding algorithmic processes and the ability to code from scratch. This discrepancy can be described as a difference in the levels of abstraction. Algorithmic thinking requires the learner to think about abstract concepts at a high level because its goal is to build a repeatable process. Writing text-based code with syntax requires the learner not only to apply algorithmic thinking (a new way of thinking for them), but also to translate it into syntax with which they may not be entirely familiar. These two points in the process of learning to code leave open a gap that has not been fully organized. There are no steps between these two points that help visualize the structure of the code or resemble syntax at a level of low abstraction. Writing code can be seen as a process that provides low- to medium-interaction, using common editors and syntax. This prevents learners from experimenting with the code and feeling free to change things and explore different solutions.',
		forces: [
			'<ul><li><strong>Cognitive Load</strong>: Linking existing knowledge to new information while aquiring new knowledge can lead to a high cognitive load<sup>[23]</sup>.</li>',
			'<li><strong>Barrier to entry</strong>: The barrier to entry can be high for some learners because they have never worked with code or anything like it before.</li>',
			'<li><strong>Motivation</strong>: Learners\' motivation is influenced by the experience they have while learning. Providing an experience that does not meet learners\' needs for competence, autonomy, and relatedness can lead to a decrease in motivation<sup>[19]</sup>.</li>',
			'<li><strong>Situational interest</strong>: When a learning task has personal relevance, novelty, activity level, and comprehensibility situational interest can be elicited, which is thought to precede and facilitate individual interest. </li>',
			'<li><strong>Prior Knowledge</strong>: The learner\'s prior knowledge plays an important role in learning to code. Additionally, the degree to which that knowledge is embedded in the person\'s mental model can affect their learning experience.</li>',
			'<li><strong>Self-perception of competencies</strong>: Abstract prior knowledge of programming, especially when concepts are applied to everyday situations, can hinder learners\' confidence in their ability to actually write code<sup>[4]</sup>.</li>',
			'<li><strong>Fear to use computers</strong>: Learners may experience the negative emotion of anxiety associated with using computers, which can interfere with the learning experience<sup>[17]</sup>.</li>',
			'<li><strong>Overwhelm</strong>: Text-based programming using syntax can seem complicated and lead to feelings of frustration and overwhelm<sup>[9]</sup>.</li></ul>'
		],
		solution: '<i>Provide high-interaction, low-abstraction learning solutions using Block-Based Programming.</i><br>High-interaction, low-abstraction learning solutions provide something that enables high-frequency interactivity while remaining at a low level of abstraction. This structure can be created using Block-Based Programming, optionally combined with tangible objects such as microcontrollers. Block-Based Programming packages coding logic into individual blocks that can be assembled and nested using drag-and-drop in an editor. Using this type of programming language allows learners to create working programs without writing "real" code. This provides a low level of abstraction from code that uses typical syntax. One or more blocks represent a programming concept. The arrangement of blocks is based on the interrelationships of different concepts. For example, there might be a block to set a variable, or a block to "code" a loop. These visualizations are designed to represent concepts intuitively. For example, a loop has a shape that allows other blocks to fit in between it (see figure), and shows that those other blocks are contained within that loop. The ability to drag and drop code blocks allows learners to interact with the code, such as exploring different ways to solve problems with a few drags and drops. Adding a tangible object to the mix gives learners additional feedback and a tangible representation of their solutions. Some Block-Based Programming editors offer to switch between the block-based view and the actual syntax of a particular programming language (e.g., Python), sometimes displaying both versions simultaneously. This reduces the gap between abstract concept and actual code further.',
		consequences: {
			benefits: [
				'<ul><li><strong>Computer anxiety</strong> can be reduced through regular use with frequent positive experiences<sup>[17]</sup>.</li>',
				'<li>Learner motivation through <strong>relatable application</strong>, <strong>autonomy</strong> while exploring and <strong>high interactivity</strong> is increased.</li>',
				'<li>Learners <strong>gain confidence in their competence</strong> to use programming languages by using Block-Based Programming that resembles text-based code with syntax.</li>',
				'<li>Block-Based Programming <strong>reduces the gap</strong> between prior knowledge and text-based code with syntax. Allowing learners to switch between block-based and actual code helps them build mental models, which reduces the gap between abstract knowledge and text-based code with syntax further.</li>',
				'<li>The interrelationships and nesting of different coding concepts, such as loops within loops, can be <strong>represented in detail</strong> and on a <strong>low abstraction level</strong>.</li>',
				'<li><strong>Code visualization</strong> and <strong>pre-defined blocks</strong> help avoid mistakes like typos. It also rewards knowing important keywords like "loop" by providing options on how to use them.</li></ul>'
			],
			liabilities: [
				'<ul><li>Block-Based Programming provides a <strong>framework</strong> that could be considered <strong>limiting</strong> by learners.</li>',
				'<li>Block-Based Programming is <strong>limited in the concepts</strong> that can be represented, since it is mainly usable for the representation of imperative programming.</li>',
				'<li>Despite the reduced gap, the <strong>transition to text-based code with syntax</strong> can still be challenging for learners and add <strong>additional complexity</strong>.</li>',
				'<li>Using abstract concepts with metaphors can lead to under-challenge and trigger negative learning emotions such as <strong>boredom or frustration</strong>.</li></ul>'
			]
		},
		knownUses: [
			{
				title: 'Editors: MakeCode',
				description: 'MakeCode is a Block-Based Programming editor. It contains an area that displays the available blocks, organized into categories that are color-coded. For example, a category for loops (shown in green in the figure) contains several loop variants that can be added to the programming area on the right by clicking on them. The blocks on the right can be moved around using drag-and-drop and manipulated using keyboard shortcuts. As shown in the top center of the figure, MakeCode allows the user to view the code version of the blocks in programming languages (Python and JavaScript). It allows a side-by-side view or a complete switch between views. The code can also be edited and programs can also be written completely in code. When using MakeCode with supported devices, such as the Calliope mini, it displays the microcontroller on the left side and simulates the code as much as possible on the screen.',
				figure: {
					images: [
						{
							src: '/images/make_code_screenshot.png',
							caption: ''
						}
					],
					mainCaption: 'Screenshot of the MakeCode editor for Calliope with a code for a counter from one to ten.',
					altDescription: 'Screenshot of the MakeCode editor for Calliope with a code for a counter from one to ten.'
				},
				demoLink: 'https://www.microsoft.com/de-de/makecode'
			},
			{
				title: 'Tangible Objects: Calliope mini, micro:bit',
				description: 'There are several tangible objects that are compatible with Block-Based Programming editors such as MakeCode. The Calliope mini and micro:bit are similar microcontrollers that provide a set of built-in sensors that can be controlled through programming. There are also expansion kits that include additional sensors, motors, etc. The figure shows an expansion kit of micro:bit with different servo motors and a distance sensor. Both microcontrollers are easy to set up and use with a Block-Based Programming editor. When using expansion kits, libraries are available that provide blocks that can be used for programming. For example, a kit for building a robot provides blocks for setting the speed of a motor.',
				figure: {
					images: [
						{
							src: '/images/microbit.jpg',
							caption: ''
						}
					],
					mainCaption: 'Image of the micro:bit with the Maqueen extension built into a small robot that can move in all directions and provides sensors as a distance sensor (two "eyes" in front).'
				},
				demoLink: 'https://wiki.dfrobot.com/micro_Maqueen_for_micro_bit_SKU_ROB0148-EN'
			},
			{
				title: 'Tangible Objects: LittleBits',
				description: 'LittleBits are color-coded modular electronic bits that snap together easily with magnets. It is possible to build a variety of working things by snapping the bits together. The figure shows an example project with wiring diagram to illustrate how the bits are used together. The things learners build with littleBits can also be programmed using Block-Based Programming editors.',
				figure: {
					images: [
						{
							src: '/images/littlebits_screenshot.png',
							caption: 'LittleBits Editor'
						},
						{
							src: '/images/littlebits_example.png',
							caption: 'Pictures of a sample project "Tug of War" with the build project on the left side and the wiring diagram on the right side. The images were sourced from the project instructions provided by LittleBits.'
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
		context: 'Learners, particularly beginners, aim to learn programming using games or kits. This learning takes place either at home in a playful and spontaneous setting or in learning environments such as schools, with educators preparing materials for lessons. Both settings may have limited access to additional resources.',
		problem: 'For coding kits or games to be fully functional, additional crafting materials, electronic parts, and connectors are required. This leads to learners not being able to use the materials or incurring additional acquisition effort.',
		forces: [
			'<ul><li><strong>Motivation:</strong> If the need to purchase additional parts is not known in advance, it quickly decreases motivation. In particular in spontaneous use, the desire to experiment is quickly dampened, reducing the likelihood that the kit will be used again.</li>',
			'<li><strong>Acquisition Difficulties:</strong> It can be unclear where the required materials can be sourced. Supply shortages can also prevent the timely acquisition of necessary parts or cause prolonged unavailability.</li>',
			'<li><strong>Financial Resources:</strong> Financial assessment is challenging if the kit is not usable on its own. Individuals with limited financial means or in regions with difficult delivery conditions may not have access to the required additional parts, significantly restricting accessibility.</li>',
			'<li><strong>Project-Dependent Additional Parts:</strong> Different projects may require different additional parts, increasing the complexity and effort for learners and educators.</li>',
			'<li><strong>Preparation Time for Educators:</strong> Educators often have limited time to prepare lesson materials. If kits require additional parts or extensive preparation, it increases the workload and reduces the time available for other teaching activities.</li></ul>'
		],
		solution: '<i>A kit should be used that contains all necessary components.</i><br>Self-containment encompasses both hardware and software. On the hardware side, the kit should include all necessary physical components required for the projects, such as various sensors and actuators, connection materials like cables, connectors, and breadboards, as well as microcontrollers or minicomputers to control the hardware.<br>On the software side, the components should be easily accessible and usable. This includes pre-installed or easily installable software libraries and frameworks needed for the projects, well-documented example codes to serve as starting points for own projects, comprehensive documentation covering all aspects of using the kit from setup to troubleshooting, and step-by-step instructions and tutorials to support the learning process and ease the entry.<br>In addition, manuals, project ideas, instructions, and other additional materials should be included in the kit.',
		consequences: {
			benefits: [
				'<ul><li>Learners can start programming immediately without waiting for additional parts.</li>',
				'<li>The ability to start right away increases the motivation and interest of learners and educators.</li>',
				'<li>Since all necessary components are already included, planning and executing projects becomes simpler and more straightforward for both learners and educators.</li>',
				'<li>A comprehensive kit offers a coherent and integrated learning experience specifically tailored for beginners.</li>',
				'<li>Purchasing a complete kit provides upfront knowledge of costs, facilitating financial planning.</li>',
				'<li>Educators can save preparation time because all necessary materials are already included, allowing them to focus more on teaching and less on material acquisition and preparation.</li>',
				'<li>All-in-one kits save <strong>sourcing effort</strong> and provide a structured <strong>learning path</strong> with a range of <strong>supported projects</strong>.</li></ul>'
			],
			liabilities: [
				'<ul><li>A comprehensive kit with all necessary additional parts will be more expensive than a basic kit containing only the core programmable component, as it includes all required components.</li>',
				'<li>Standardizing the included parts may limit the diversity and possibilities of the projects that can be undertaken.</li>',
				'<li>If a part of the kit is lost or damaged, it may be harder to replace that specific part as the kit is sold as a complete set.</li>',
				'<li>Educators and learners may become reliant on the specific components provided in the kit, potentially reducing the ability to adapt to or utilize different hardware or materials in the future as well as update to newer versions.</li>',
				'<li>Sequencing of projects within all-in-one kits needs <strong>careful planning</strong> to ensure a smooth <strong>learning progression</strong>.</li></ul>'
			]
		},
		knownUses: [
			{
				title: 'Little Bits',
				description: 'LittleBits is an innovative electronics kit designed to teach children the basics of circuitry and engineering. It includes various electronic building blocks, such as sensors, motors, and LEDs, which snap together magnetically to create different projects and inventions. The figure shows the components included in one of the kits, the Code Kit.<br>LittleBits is highly complete as a kit, providing all the necessary components to start building right out of the box. Each kit includes a variety of electronic modules, a power supply, and accessories like mounting boards and connector cables. Additionally, the kits often come with instructional booklets and access to online resources, offering project ideas and tutorials to help users get started and expand their skills.',
				figure: {
					images: [
						{
							src: '/images/littlebits.jpg',
							caption: ''
						}
					],
					mainCaption: 'All contents of the LittleBits Code Kit',
					altDescription: 'Wires, Components and Instructions of the Code Kit'
				},
				demoLink: 'https://littlebits.com/welcome'
			},
			{
				title: 'Dash Robot',
				description: 'Dash Robot is an educational robot designed for children, developed by Wonder Workshop. It can be programmed using simple, block-based coding through a tablet or smartphone app, allowing children to engage in interactive and hands-on learning.<br>The Dash Robot kit is comprehensive, including the robot itself along with necessary accessories like charging cables. It also provides access to a range of free apps for programming and controlling Dash. Many kits include additional accessories like building brick connectors, challenge cards, and activity mats. The robots and one example of expansions are shown in the figures. These elements ensure that users have everything they need to start learning and exploring various programming challenges immediately.',
				figure: {
					images: [
						{
							src: '/images/dashblank.jpg',
							caption: 'Dot and Dash Robots'
						},
						{
							src: '/images/dash2.jpg',
							caption: 'Robots with Launcher Equipment'
						}
					],
					mainCaption: ''
				},
				demoLink: 'https://www.makewonder.com/en/dash/'
			},
			{
				title: 'LEGO® Education SPIKE™ Prime',
				description: 'LEGO® Education SPIKE™ Prime is a STEAM learning solution that combines LEGO® building elements, programmable hardware, and a coding platform. It is aimed at middle school students to help them develop critical thinking and problem-solving skills through hands-on learning.<br>LEGO® Education SPIKE™ Prime is a well-rounded kit, containing a wide range of LEGO® bricks, sensors, motors, and the programmable SPIKE™ Prime Hub, as shown in the figure. It also includes comprehensive building instructions and lesson plans designed for educators. The kit is designed to be used in a classroom setting, but is equally effective for individual learning, providing all the necessary components to build and program various projects right out of the box. Additionally, it offers access to an online community and resources, enhancing the learning experience with collaborative and extended learning opportunities.',
				figure: {
					images: [
						{
							src: '/images/lego2.jpg',
							caption: ''
						}
					],
					mainCaption: 'All contents of the LEGO® Education SPIKE™ Prime kit',
					altDescription: 'LEGO® bricks, wires and components of the kit'
				},
				demoLink: 'https://education.lego.com/de-de/products/lego-education-spike-prime-set/45678/'
			},
			{
				title: 'INTIA',
				description: 'INTIA was a research project that focused on the inclusive development of methods and technologies to help people with disabilities and educational support cope with everyday life. It ran from 2019 to 2023 and included, among other things, a suitcase.<br>The INTIA suitcase is intended to provide initial access to technology and consists of an experience module and a design module. The "Experience" module contains an escape game, a technology fan that acts as an encyclopedia, and various components in the form of sensors. The "Design" module consists of various sets of cards, an idea cube that encourages creativity, and programming tiles that provide an easy introduction to a programming language. The suitcase and its contents are shown in the figure.',
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
					mainCaption: 'INTIA suitcase and contents',
					altDescription: 'Different wires, a tablet and technical building blocks laying on a table. A black suitcase filled with colorful cards, dices and tiles.'
				},
				demoLink: 'https://intia.de/intia-koffer/'
			},
			{
				title: 'MOXD IoT Kit',
				description: 'The MoxdLab at Cologne University of Applied Sciences has developed an IoT kit that can primarily be used for prototyping. Among other things, it is used in the introductory module "Introduction to Media Informatics" and is intended to serve as a first introduction to programming. The kit can be used completely without code, but still offers the possibility to do so.<br>The IoT kit contains a Raspberry Pie in combination with a Groveshield, the Groveshield connectors, and various sensors and actuators, as shown in the figure. It also includes a cheatsheet that lists a description of the nodes and useful combinations of nodes for various use cases. A Node RED instance runs on the Raspberry Pie, which can be used to work with the components of the kit.',
				figure: {
					images: [
						{
							src: '/images/iot-kit_emi.jpeg',
							caption: ''
						}
					],
					mainCaption: 'All contents of the IoT Kit',
					altDescription: 'Different sensors and actuators, and a Raspberry Pie lying in front of a black suitcase on a wooden table.'
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