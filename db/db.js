export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Thenusan Santhirakumar. I’m currently working as a Software Engineer at WSO2 LLC Sri Lanka working in Open Healthcare Team's Research & DEvelopment activities. I did my undergrad in CSE from UOM Sri Lanka.",
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
			duration: "May 2022 - Present",
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
			title: "Bachelors of Science in Engineering in Computer Science and Engineering",
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
			title: "Physical Science Stream in GCE Advanced Level",
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
		{
			title: "GCE Ordinary Level",
			duration: "January 2012 - December 2013",
			subtitle: "Nelukkulam Kalaimahal Maha Vidyalayam, Vavuniya",
			details: [
				"Got all high distinction level passes in GCE ordinary level examination.",
				"Best student awards multiple times in secondary education.",
				"Got pass marks of 168 out of 200 in grade five schoolarship examination.",
			],
			tags: ["Mathematics", "Science", "English", "History", "Tamil", "Religion", "Information and Communication Technology","Music","Commerce"],
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
