export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "JavaScript, C++",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Reactjs",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Clouds",
			skillName: "AWS(EC2, S3), Heroku, Netlify",
			color: "3",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub, JIRA, Trello",
			color: "7",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Postman, Chrome DevTools",
			color: "3",
			percentage: "80",
		},
		{
			title: "Saas products",
			skillName: "CleverTap, FreshDesk",
			color: "5",
			percentage: "50",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "Programming Diaries",
				image: "images/programmingdiaries.png",
				summary:
					"Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
				preview: "https://programmingdiaries.herokuapp.com/",
				techStack: [
					"Django",
					"SQLite",
					"Bootstrap",
					"JavaScript",
					"Heroku",
				],
			},
			{
				projectName: "Find Your Bank",
				image: "images/findyourbank.png",
				summary:
					"Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
				preview: "https://clever-fermi-0d5d76.netlify.app",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Web Portfolio",
				image: "images/portfolio.png",
				summary:
					"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
				preview: "https://github.com/vinaysomawat/Travographer-Portal",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Resume Builder",
				image: "images/resume-builder.png",
				summary:
					"Browser based editor to build and download Resumes in a customizable templates.",
				preview: "https://vinaysomawat.github.io/Resume-Builder",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		software: [
			{
				projectName: "Pizza Ordering ChatBot",
				image: "images/pizzaorderchatbot.png",
				summary:
					"ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Dailogflow", "Firebase"],
			},
			{
				projectName: "WhatsApp-Bot",
				image: "images/whatsappbot.jpg",
				summary:
					"Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Bill Generator",
				image: "images/billgenerator.png",
				summary:
					"GUI to transfer data to excel sheets and generate bills on the local shops.",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "WSO2 LLC",
			duration: "April 2022 - Present",
			subtitle: "Software Engineer",
			details: [
				"Working as Software Engineer in Open Healthcare Team, Research and Development",
			],
			tags: [
				"Java",
				"Dicom",
				"Asgardeo",
				"Choreo",
				"Ballerina",
			],
			icon: "heartbeat",
		},
		
		{
			title: "CSE, University of Moratuwa",
			duration: "February 2022 - May 2022",
			subtitle: "Visiting Instructor",
			details: [
				"Explain database concepts to students and helped in their project works",
				"Graded multiple assignments, quizzes, ER Diagrams and etc",
				"Helping Students in Practical Assessments in Databases",
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
				"Performing User Testing in Asgardeo use cases",
			],
			tags: [
				"Java",
				"Redis",
				"WSO2 Identity Server",
				"Github",
				"Jmeter",
			],
			icon: "group",
		},
	],
	education: [
		{
			title: "Bachelors of Science in Engineering in Computer Science and Engineering",
			duration: "Four Years",
			subtitle: "University of Moratuwa, Sri Lanka",
			details: [
				"Qualified GATE-2020.",
				"Active Competitive Programmer with CodeChef Rating 1841*.",
				"Received 500+ stars and 300+ forks on GitHub projects.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Data Science",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Physical Science in GCE Advanced Level",
			duration: "",
			subtitle: "Board of Secondary Education, Rajasthan",
			details: [
				"Got all High Distinction Level Passes.",
				"District Rank: 3, Island Rank: 327.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com/users/11291692/thenusan-santhirakumar",
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
				{
					text: "Clone this page",
					link: "https://github.com/sthenusan/sthenusan.github.io",
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
		{
			label: "copyright-text",
			data: [
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
