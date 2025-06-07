export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Thenusan Santhirakumar. I'm currently working as a Software Engineer at WSO2 LLC Sri Lanka working in Open Healthcare Team's Research & DEvelopment activities. I did my undergrad in CSE from UOM Sri Lanka.",
				"I'm a Software Developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems to industry space.",
				"I love to Play Cricket and listen to music.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: thenusan1997@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Java",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Python",
			color: "6",
			percentage: "60",
		},
		{
			title: "Languages",
			skillName: "Java Script",
			color: "5",
			percentage: "60",
		},
		{
			title: "Backend",
			skillName: "PHP",
			color: "2",
			percentage: "40",
		},
		{
			title: "Clouds",
			skillName: "WSO2 APIM, IS, MI",
			color: "3",
			percentage: "40",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, CSS",
			color: "4",
			percentage: "40",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "7",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Relational Databases",
			color: "3",
			percentage: "70",
		},
		{
			title: "Saas products",
			skillName: "NoSQL, Redis",
			color: "5",
			percentage: "50",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "6",
			percentage: "70",
		},
		{
			title: "Editor",
			skillName: "Ballerina",
			color: "4",
			percentage: "30",
		},
	],
	projects: {
		web: [
			{
				projectName: "Barter System",
				image: "images/baterSystem.png",
				summary:
					"Developed a barter trading system that enables users to exchange items and services. Implemented features include user authentication, item listing, search functionality, and real-time messaging between users. Built as part of my Master's degree project at Deakin University.",
				preview: "https://github.com/sthenusan/TradeSystem",
				techStack: [
					"Node JS",
					"EJS",
					"Mongo DB",
					"JavaScript",
					"HTML",
					"CSS"
				],
			},
			{
				projectName: "Healthcare Appointment Booking System",
				image: "images/healthcare.png",
				summary:
					"Built a comprehensive healthcare appointment management system that allows patients to book, reschedule, and manage their medical appointments. Features include doctor availability management, appointment scheduling, and automated notifications. Developed as part of my Master's degree project at Deakin University.",
				preview: "https://github.com/sthenusan/sit-727-hd",
				techStack: [
					"Spring Boot",
					"Thymeleaf",
					"Mongo DB",
					"Docker",
					"Kubernetes"
				],
			},
			{
				projectName: "InstaMovies",
				image: "images/findyourbank.png",
				summary:
					"Developed a full stack web application to provide movie ticket booking related services with ticket exchange facility, As a part of Semester three OOSD Project, Group Project",
				preview: "https://github.com/sthenusan/InstaMovies",
				techStack: [
					"PHP",
					"MySQL",
					"Bootstrap",
					"JavaScript",
					"HTML",
					"CSS"
				],
			},
			{
				projectName: "HR Manangement Solution",
				image: "images/findyourbank.png",
				summary:
					"Human Resource Manangement Application, As a part of Semester four Database Project, Group Project",
				preview: "https://github.com/sthenusan/HR-management",
				techStack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
			},
		],
		software: [
			{
				projectName: "WSO2 Session DataStore in Redis",
				image: "images/pizzaorderchatbot.png",
				summary:
					"WSO2 IS Session data store in REDIS in Memory database, Internship Project",
				preview:
					"https://github.com/sthenusan/identity-session-data-store-redis",
				techStack: ["Java", "Redis", "Jmeter", "WSO2 IS", "Relational Databases"],
			}, {
				projectName: "Process Scheduling Algorithm - Simulation",
				image: "images/pizzaorderchatbot.png",
				summary:
					"SRTF process scheduling algorithm simulation for the Operating Systems module.",
				preview:
					"https://github.com/sthenusan/identity-session-data-store-redis",
				techStack: ["Java", "SRTF Algorithm"],
			},
		],
		android: [
			{
				projectName: "Alarm Me",
				image: "images/findyourbank.png",
				summary:
					"Location based Alarm Application. As a part of Semester four Software Engineering Project, Group Project",
				preview: "https://github.com/sthenusan/AlarmMe",
				techStack: ["Fluter", "MySQL", "Google Map API"],
			},
			{
				projectName: "Sieve Mobile Application",
				image: "images/pizzaorderchatbot.png",
				summary:
					"A Application to display privacy policies of different applications in the market.",
				preview: "https://github.com/sthenusan/Sieve_Backend",
				techStack: ["Flutter", "MySQL", "Adope XD", ""],
			},
		],
		freelance: [
		],
	},
	experience: [
		{
			title: "WSO2 LLC",
			duration: "May 2022 - October 2023",
			subtitle: "Software Engineer",
			details: [
				"Implemented Healthcare Ballerina Packages.",
				"DICOM feature support for WSO2 OH Solution.",
				"Asgardeo & APIM Integration Research.",
				"Research on Asgardeo & Choreo Access tokens.",
			],
			tags: [
				"Java",
				"Dicom",
				"Asgardeo",
				"Choreo",
				"Ballerina",
				"FHIR",
			],
			icon: "heartbeat",
		},
		{
			title: "Computer Science & Engineering, UOM",
			duration: "February 2022 - April 2022",
			subtitle: "Visiting Instructor",
			details: [
				"Explain database concepts to students and helped in their project works.",
				"Graded multiple assignments, quizzes, ER Diagrams and etc.",
				"Helping Students in Practical Assessments in Database Module.",
			],
			tags: ["Database", "SQL", "NOSQL", "Python", "SQL Server"],
			icon: "qrcode",
		},
		{
			title: "WSO2 LLC",
			duration: "October 2020 - April 2021",
			subtitle: "Software Engineering Intern",
			details: [
				"Implemented WSO2 IS Session Data Store in Redis.",
				"Improved the design of WSO2 IS Session Data Store.",
				"Performance Testing on Session Data Store Implementations.",
				"Performing User Testing in Asgardeo use cases.",
			],
			tags: [
				"Java",
				"Redis",
				"WSO2 Identity Server",
				"Github",
				"Jmeter",
				"Dbeaver",
				"Relational Databases",
				"NoSQL Databases",
			],
			icon: "group",
		},
	],
	education: [
		{
			title: "Master of Information Technology",
			duration: "October 2023 - June 2025",
			subtitle: "Deakin University, Australia",
			details: [
				"Specializing in Cloud Computing and Software Development",
				"Relevant Coursework: Cloud Architecture, Advanced Software Engineering, Data Analytics",
				"Project: Developed a barter trading system using EJS, Node JS, and MongoDB",
				"Project: Built a healthcare appointment booking system using Spring Boot and MongoDB"
			],
			tags: [
				"Cloud Computing",
				"Software Development",
				"Data Analytics",
				"Node.js",
				"MongoDB",
				"Spring Boot",
				"DevOps",
				"Microservices",
				"API Development"
			],
			icon: "graduation-cap"
		},
		{
			title: "B.S.c in Engineering in Computer Science and Engineering",
			duration: "January 2018 - June 2022",
			subtitle: "University of Moratuwa, Sri Lanka",
			details: [
				"First Class Honours.",
				"CGPA 3.745 / 4.2.",
				"Dean List awards in semester 7 & 8.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Object Oriented Programming",
				"Object Oriented Software Design",
				"Software Engineering",
				"Quality Engineering",
				"Software Architecture",
				"Software Process and Management",
				"Data Science",
				"Cloud Computing",
				"Machine Learning",
				"BioInformatics",
				"Advanced Algorithms",
			],
			icon: "graduation-cap",
		},
		{
			title: "GCE Advanced Level",
			duration: "August 2014 - August 2016",
			subtitle: "Vavuniya Tamil Madya Maha Vidyalayam, Vavuniya",
			details: [
				"Got all high distinction level passes with general knowledge 78 out of 100.",
				"District Rank: 3, Island Rank: 327, Z-Score: 2.1485.",
				"Best physical science student awards in 2015 & 2016.",
			],
			tags: ["Physics", "Chemistry", "Combined Mathematics"],
			icon: "book",
		},

	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com/users/9118100/thenusan-santhirakumar",
				},
				{
					text: "GitHub",
					link: "https://github.com/sthenusan",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/thenusan97/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/sthenusan/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/thenusan97",
				},
			],
		},
	],
};
