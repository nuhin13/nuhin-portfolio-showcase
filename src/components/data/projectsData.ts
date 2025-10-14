import {Project, ProjectCategory, ProjectTag} from "../type/project";

export const MINIO_CONFIG = {
    BASE_URL: process.env.REACT_APP_MINIO_URL || "http://localhost:1901",
    BUCKET_NAME: "project-images"
};


const getMinIOImageUrl = (imageName: string) =>
    `${MINIO_CONFIG.BASE_URL}/${MINIO_CONFIG.BUCKET_NAME}/${imageName}`;


export const projects: Project[] = [
    {
        id: 1,
        title: "sManager: ব্যবসার সুপার অ্যাপ",
        description: "A business management app for tracking sales, payments, installments, and reports.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/smanager2.png",
        images: [
            getMinIOImageUrl("smanager1.jpg"),
            getMinIOImageUrl("smanager2.png"),
            getMinIOImageUrl("smanager3.png")
        ],
        tags: [ProjectTag.NATIVE_ANDROID, ProjectTag.FLUTTER,
            ProjectTag.NATIVE_FLUTTER_COMMUNICATION, ProjectTag.CACHING_FIRST, ProjectTag.HIVE, ProjectTag.CACHING],
        link: "https://sheba-platform.xyz/",
        playStoreLink: "https://play.google.com/store/apps/details?id=xyz.sheba.managerapp",
        fullDescription: "The Supper App to run any kind of Business It has everything you need to manage your business including daily sales, balance calculation, digital payment collection, installment sales, stock management, business income growth reports and many more feature.",
        contribution: [
            "Initiated and led the project, implementing core features, tests, and bug fixes",
            "Managed a team of 5, led the mobile wing, and handled product management and UAT",
            "Oversaw project management tasks (PRD, BRD) and followed Agile methodology",
            "Worked with Kotlin, Java, Flutter, Firebase, OneSignal, modular architecture, coroutines, RxJava, microservices, background services, Crashlytics, Sentry, Remote Config, Room, Hive, native-Flutter communication, and analytics",
            "Achieved over 2 million downloads and 20k+ daily active users"
        ]
    },
    {
        id: 4,
        title: "Sheba.xyz",
        description: "Your pddddersonal assistant app for ordering any service, anytime.",
        category: ProjectCategory.MOBILE,
        image: getMinIOImageUrl("sheba1.png"),
        images: [
            getMinIOImageUrl("sheba1.png")
        ],
        tags: [ProjectTag.NATIVE_ANDROID, ProjectTag.FLUTTER, ProjectTag.CACHING_FIRST, ProjectTag.HIVE, ProjectTag.Isolation],
        link: "https://www.sheba.xyz/",
        playStoreLink: "https://play.google.com/store/apps/details?id=xyz.sheba.customersapp&hl=en",
        fullDescription: "Your one-stop solution for services. Order any kind of service to your home with features like service selection, saved locations, and custom views. Built for Dhaka-based users with a focus on convenience and performance.",
        contribution: [
            "Implemented core features, tests, and bug fixes for the app",
            "Managed a team of 3 and monitored their performance during development",
            "Led migration from Kotlin to Flutter for cross-platform support",
            "Integrated push notifications using Firebase and OneSignal",
            "Enhanced user experience with custom animations and views",
            "Monitored app performance using Firebase Analytics",
            "Supported over 1,000 daily active users in Dhaka"
        ]
    },
    {
        id: 6,
        title: "sPro",
        description: "Resource app for Sheba.xyz service providers to manage and monitor their tasks.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/spro1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/spro1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/spro2.png"
        ],
        tags: [
            ProjectTag.FLUTTER,
            ProjectTag.CACHING_FIRST,
            ProjectTag.HIVE,
            ProjectTag.Isolation
        ],
        playStoreLink: "https://play.google.com/store/apps/details?id=xyz.sheba.resource&hl=en",
        fullDescription: "A resource management app for Sheba.xyz service providers to track jobs, monitor tasks, and receive notifications. Built with Flutter using MVP architecture, background services, and push notifications.",
        contribution: [
            "Implemented core features for job tracking and task monitoring",
            "Integrated push notifications and background services",
            "Adopted MVP architecture for scalable codebase",
            "Optimized caching and data storage with Hive",
            "Supported both Android and iOS platforms"
        ]
    },
    {
        id: 7,
        title: "digiGo",
        description: "HR management tool for attendance, leave, payroll, and employee management.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/digi1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/digi1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/digi2.png",
        ],
        tags: [
            ProjectTag.FLUTTER,
            ProjectTag.CACHING_FIRST,
            ProjectTag.HIVE,
            ProjectTag.Isolation
        ],
        link: "https://www.sbusiness.xyz/digigo",
        playStoreLink: "https://play.google.com/store/apps/details?id=xyz.sheba.emanager",
        fullDescription: "digiGo is an HR management tool used by 150+ companies for employee attendance, leave management, expense tracking, payslips, and more. Features include custom calendar, phonebook, and hyper-local attendance, built with Flutter and MVC architecture.",
        contribution: [
            "Developed key features such as custom calendar, phonebook, and hyper-local attendance",
            "Managed a team of 2 and monitored their performance during development",
            "Implemented animations and followed MVC architecture for maintainable code",
            "Optimized app performance and data storage with Hive",
            "Supported daily usage by over 5,000 employees across 150+ companies"
        ]
    },
    {
        id: 8,
        title: "sDelivery",
        description: "A delivery system app with real-time GPS tracking and route optimization.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/sdelivery.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/sdelivery.png"
        ],
        tags: [
            ProjectTag.NATIVE_ANDROID,
            ProjectTag.GPS_Tracking,
            ProjectTag.Socket,
        ],
        fullDescription: "sDelivery is a delivery management app that continuously tracks GPS location, communicates via Socket.io, and displays optimal routes for pickups and destinations using Google Maps. Features include job receiving, push notifications, and animated route design.",
        contribution: [
            "Implemented real-time GPS tracking and socket communication",
            "Integrated Google Maps for route optimization and navigation",
            "Developed job receiving and push notification services",
            "Designed animated route and map interactions",
            "Worked with Kotlin, Socket.io, and custom background services"
        ]
    },
    {
        id: 9,
        title: "sBondhu",
        description: "A reselling and referral app for small and medium businesses in Bangladesh.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/bondhu1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/bondhu1.png"
        ],
        tags: [
            ProjectTag.FLUTTER,
            ProjectTag.TOP_UP
        ],
        playStoreLink: "https://play.google.com/store/apps/details?id=xyz.sheba.bondhu&hl=en",
        fullDescription: "Bandhu App is a reselling and referral platform by Sheba Platform Limited, designed for small and medium businesses in Bangladesh. It enables users to source products and services from manufacturers, with features like Top-up, OTF, Reseller Shop, and Bus Ticket booking. Built with Flutter, Firebase, and custom input views.",
        contribution: [
            "Implemented key features such as Top-up, OTF, and reseller shop",
            "Migrated the app from Kotlin to Flutter for cross-platform support",
            "Integrated Firebase for analytics and performance monitoring",
            "Developed custom input views and optimized user experience",
            "Ensured scalability and maintainability for growing user base"
        ]
    },
    {
        id: 3,
        title: "Dizi Cashier",
        description: "Comprehensive sales, stock, and account management software with performance consultancy.",
        category: ProjectCategory.CONSULTANCY,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/dizi.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/dizi.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/dizi3.png"
        ],
        tags: [
            ProjectTag.NATIVE_ANDROID,
            ProjectTag.FLUTTER_MIGRATION,
            ProjectTag.CACHING_FIRST,
        ],
        link: "https://dizicashier.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dizinova.dizicashier&hl=en&gl=US",
        fullDescription: "Dizi Cashier is a robust sales, stock, and account management solution. Provided performance monitoring and consultancy, introducing coroutine support for efficient I/O operations. Built with Kotlin, Android Architecture Components, Hilt, Retrofit 2, sqLite, Gson, and Coroutines.",
        contribution: [
            "Provided performance monitoring and consultancy for the app",
            "Introduced coroutine support for I/O operations, replacing manual thread management",
            "Led native to Flutter migration for cross-platform support",
            "Established best practices guidelines for the development team",
            "Optimized caching mechanism to improve application performance",
            "Implemented iOS support to expand the user base"
        ]
    },
    {
        id: 13,
        title: "Knower",
        description: "Influencer engagement platform for shop and restaurant campaigns.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/knower.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/knower.png",
        ],
        tags: [
            ProjectTag.FLUTTER,
            ProjectTag.CACHING_FIRST,
            ProjectTag.Isolation
        ],
        fullDescription: "Knower is an influencer engagement platform for a Japanese startup, designed to attract influencers to visit and rate shops or restaurants through campaign offers. The solution includes an Influencer app (Flutter), Admin panel, and Enterprise web portal, with backend powered by Java Spring Boot. Features include custom Google Map data manipulation, offline caching, and microservice architecture.",
        contribution: [
            "Developed core features for the Influencer app using Flutter and Bloc pattern",
            "Implemented custom Google Map data manipulation and campaign logic",
            "Worked on backend microservices with Java Spring Boot",
            "Adopted Clean Architecture for scalable and maintainable code",
            "Enabled offline caching and seamless user experience"
        ]
    },
    {
        id: 11,
        title: "DrugN",
        description: "NFT-based medication tracking web app for a Japanese startup.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/drugN1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/drugN1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/drugN2.png",
        ],
        tags: [
            ProjectTag.REACT,
            ProjectTag.Expo
        ],
        link: "https://app.drugn.life/",
        fullDescription: "DrugN is a React Native Web app for a Japanese startup, providing NFTs to users for submitting daily medication data. Managed a distributed team across three countries, contributed to UI design, and project management. The app is built with React Native and targets web only.",
        contribution: [
            "Designed and implemented core UI components for the web app",
            "Managed a distributed team of developers from three countries",
            "Coordinated project management and task allocation",
            "Ensured smooth integration of NFT reward logic",
            "Optimized for web-only deployment using React Native"
        ]
    },
    {
        id: 12,
        title: "AWARENESS動画アプリ",
        description: "E-learning video app for children in Japan, available on Apple Store.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/education1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/education1.png",
        ],
        tags: [
            ProjectTag.REACT_NATIVE,
            ProjectTag.FLUX,
        ],
        link: "https://www.awareness.co.jp/app/index.html",
        appleStoreLink: "https://apps.apple.com/jp/app/awareness%E5%8B%95%E7%94%BB%E3%82%A2%E3%83%97%E3%83%AA/id1517787895?platform=ipad",
        fullDescription: "AWARENESS動画アプリ is an E-learning app for children in Japan, built with React Native and Expo. Features include video playback with picture-in-picture mode, API integration with axios, and efficient pagination for large data sets. Available exclusively on the Apple Store.",
        contribution: [
            "Developed core video playback features with picture-in-picture support",
            "Integrated API calls using axios and implemented efficient pagination",
            "Worked within the Expo framework to extend video player capabilities",
            "Contributed to UI/UX for a child-friendly experience",
            "Ensured smooth performance and reliability on iOS devices"
        ]
    },
    {
        id: 10,
        title: "Agave",
        description: "Comprehensive plant e-commerce platform for the Japanese market.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/agave1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/agave1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/agave2.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/agave3.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/agave4.png",
        ],
        tags: [
            ProjectTag.Springboot,
            ProjectTag.Nodejs,
            ProjectTag.Microservice,
            ProjectTag.FLUTTER,
            ProjectTag.Redis,
            ProjectTag.MySql
        ],
        fullDescription: "Plant E-commerce\n\nThis platform enables users to conveniently buy and sell a wide variety of plants, from rare cacti to popular houseplants. Key features include a rich selection, 24/7 purchasing, easy checkout, an online community, and competitive pricing. Consumers benefit from convenience, diversity, price comparison, and access to plant care information. Challenges include physical inspection, shipping risks, and quality assurance. With ongoing technological advancements, features like virtual/augmented reality and improved shipping will further enhance the plant e-commerce experience.",        contribution: [
            "Led a cross-functional team of 10 from project inception to deployment",
            "Architected and developed backend microservices using Spring Boot, Node.js, and Laravel",
            "Oversaw deployment and infrastructure on AWS (EC2, RDS, S3, Route53, Load Balancer)",
            "Implemented Kubernetes for development server orchestration",
            "Managed databases and caching with MySQL and Redis",
            "Established best practices for code quality, security, and scalability",
            "Coordinated end-to-end project delivery, ensuring timely and successful launch"
        ]
    },
    {
        id: 14,
        title: "Source?. Manga",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/manga2.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/manga1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/manga2.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/manga3.png",
        ],
        tags: [ProjectTag.NATIVE_ANDROID, ProjectTag.FLUTTER, ProjectTag.CACHING_FIRST, ProjectTag.HIVE],
        link: "https://dizicashier.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dizinova.dizicashier&hl=en&gl=US",
        fullDescription: "Dizi Cashier is a comprehensive sales, stock, and account management software built with Flutter. The application helps businesses manage their daily operations with features for inventory tracking, sales reporting, and financial management.",
        contribution: [
            "Led native to Flutter migration for cross-platform support",
            "Established best practices guidelines for the development team",
            "Optimized caching mechanism to improve application performance",
            "Implemented iOS support to expand the user base",
        ]
    },
    {
        id: 15,
        title: "eKYC in ABG Pocket App",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/abg1.jpg",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/abg1.jpg",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/abg2.jpg",
        ],
        tags: [ProjectTag.NATIVE_ANDROID, ProjectTag.FLUTTER, ProjectTag.CACHING_FIRST, ProjectTag.HIVE],
        link: "https://dizicashier.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dizinova.dizicashier&hl=en&gl=US",
        fullDescription: "Dizi Cashier is a comprehensive sales, stock, and account management software built with Flutter. The application helps businesses manage their daily operations with features for inventory tracking, sales reporting, and financial management.",
        contribution: [
            "Led native to Flutter migration for cross-platform support",
            "Established best practices guidelines for the development team",
            "Optimized caching mechanism to improve application performance",
            "Implemented iOS support to expand the user base",
        ]
    },
    {
        id: 16,
        title: "Beats App",
        description: "A music sharing social media app with real-time music playback and sharing features.",
        category: ProjectCategory.OTHERS,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/beat1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/beat1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/beat2.png",
        ],
        tags: [
            ProjectTag.NATIVE_ANDROID,
            ProjectTag.FLUTTER,
            ProjectTag.CACHING_FIRST,
            ProjectTag.HIVE
        ],
        link: "https://www.thebeats.app/",
        playStoreLink: "https://play.google.com/store/apps/details?id=app.beats",
        fullDescription: "Beats App is a music sharing social media platform enabling users to share, play, and discover music. Features include real-time music playback using Media3 ExoPlayer, social sharing, and instant app support. Built with Kotlin, Firebase, and Google Play Instant.",
        contribution: [
            "Added new features and fixed bugs to enhance user experience",
            "Integrated Media3 ExoPlayer for seamless music playback",
            "Implemented social sharing and music discovery features",
            "Worked with Kotlin, Firebase, and Google Play Instant for robust performance"
        ]
    },
    {
        id: 17,
        title: "Resume Builder SDK (Ami Probashi)",
        description: "Automatic resume builder module for the Ami Probashi app.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/resume1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/resume1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/resume2.png",
        ],
        tags: [
            ProjectTag.NATIVE_ANDROID,
            ProjectTag.CACHING_FIRST,
        ],
        link: "https://www.amiprobashi.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.thane.amiprobashi&hl=en",
        fullDescription: "A vital module in the large-scale Ami Probashi app, the Resume Builder SDK is an Android native SDK that automatically generates resumes based on user-provided information. Features include complex UI with custom chat behavior, editable chat history, and seamless navigation. Integrated Mixpanel for analytics and followed best practices for SDK-app communication.",
        contribution: [
            "Developed an Android native SDK for automatic resume building",
            "Designed and implemented complex UI with custom chat and editable history",
            "Used Navigation Component for robust navigation flow",
            "Integrated Mixpanel for analytics and event tracking",
            "Followed best practices for communication between SDK and main app",
            "Managed a team to deliver the module efficiently"
        ]
    },
    {
        id: 18,
        title: "Shell BD Apps",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shell1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shell1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shell2.png",
        ],
        tags: [ProjectTag.NATIVE_ANDROID, ProjectTag.FLUTTER, ProjectTag.CACHING_FIRST, ProjectTag.HIVE],
        link: "https://dizicashier.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dizinova.dizicashier&hl=en&gl=US",
        fullDescription: "Dizi Cashier is a comprehensive sales, stock, and account management software built with Flutter. The application helps businesses manage their daily operations with features for inventory tracking, sales reporting, and financial management.",
        contribution: [
            "Led native to Flutter migration for cross-platform support",
            "Established best practices guidelines for the development team",
            "Optimized caching mechanism to improve application performance",
            "Implemented iOS support to expand the user base",
        ]
    },
    {
        id: 19,
        title: "Shell BD e-Store Website",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shell-web1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shell-web1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shell-web2.png",
        ],
        tags: [ProjectTag.NATIVE_ANDROID, ProjectTag.FLUTTER, ProjectTag.CACHING_FIRST, ProjectTag.HIVE],
        link: "https://dizicashier.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dizinova.dizicashier&hl=en&gl=US",
        fullDescription: "Dizi Cashier is a comprehensive sales, stock, and account management software built with Flutter. The application helps businesses manage their daily operations with features for inventory tracking, sales reporting, and financial management.",
        contribution: [
            "Led native to Flutter migration for cross-platform support",
            "Established best practices guidelines for the development team",
            "Optimized caching mechanism to improve application performance",
            "Implemented iOS support to expand the user base",
        ]
    },
    {
        id: 20,
        title: "We Gro",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/wegrow1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/wegrow1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/wegrow2.png",
        ],
        tags: [ProjectTag.NATIVE_ANDROID, ProjectTag.FLUTTER, ProjectTag.CACHING_FIRST, ProjectTag.HIVE],
        link: "https://dizicashier.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dizinova.dizicashier&hl=en&gl=US",
        fullDescription: "Dizi Cashier is a comprehensive sales, stock, and account management software built with Flutter. The application helps businesses manage their daily operations with features for inventory tracking, sales reporting, and financial management.",
        contribution: [
            "Led native to Flutter migration for cross-platform support",
            "Established best practices guidelines for the development team",
            "Optimized caching mechanism to improve application performance",
            "Implemented iOS support to expand the user base",
        ]
    },
    {
        id: 21,
        title: "VWB",
        description: "A World Food Program project from Department of Women Affairs for vulnerable women in Bangladesh.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/vwb1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/vwb1.png"
        ],
        tags: [ProjectTag.NATIVE_ANDROID, ProjectTag.FLUTTER, ProjectTag.CACHING_FIRST, ProjectTag.HIVE],
        link: "https://dizicashier.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dizinova.dizicashier&hl=en&gl=US",
        fullDescription: "Dizi Cashier is a comprehensive sales, stock, and account management software built with Flutter. The application helps businesses manage their daily operations with features for inventory tracking, sales reporting, and financial management.",
        contribution: [
            "Led native to Flutter migration for cross-platform support",
            "Established best practices guidelines for the development team",
            "Optimized caching mechanism to improve application performance",
            "Implemented iOS support to expand the user base",
        ]
    },
    {
        id: 22,
        title: "CyberWise (Phishing Simulation Tool)",
        description: "A Simple phishing simulation tool to test the security awareness of employees.",
        category: ProjectCategory.SYSTEM,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/cyberwise1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/cyberwise1.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/cyberwise2.png",
        ],
        tags: [ProjectTag.GRPC, ProjectTag.Springboot, ProjectTag.go, ProjectTag.goPhish, ProjectTag.LMS],
        link: "https://wlp.dev-polygontech.xyz/",
        fullDescription: "CyberWise is a security awareness platform, similar to Wizer and KnowBe4, that helps organizations assess and improve employee resilience against phishing attacks. It enables realistic phishing simulations, automated reporting, and targeted training via a built-in LMS. Built on a microservice architecture with gRPC and GoPhish integration, CyberWise streamlines campaign management and security training.",
        contribution: [
            "Led the project as both Project Lead and Team Lead, including client demos for banks and organizations",
            "Designed and implemented a full-phase LMS system",
            "Architected the solution using Microservice Architecture (Go, Java Spring Boot, Kotlin Spring Boot)",
            "Implemented gRPC protocol for efficient inter-service communication",
            "Applied Command design pattern for modular and maintainable code",
            "Integrated and contributed to open-source GoPhish for email phishing campaigns",
            "Handled SMTP protocol for email phishing and automated report generation"
        ]
    },
    {
        id: 23,
        title: "Priyojon - Chartered Life",
        description: "Insurance management app for Chartered Life, built with MVVM architecture.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/priyojon1.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/priyojon1.png",
        ],
        tags: [
            ProjectTag.NATIVE_ANDROID, ProjectTag.CACHING, ProjectTag.MVVM
        ],
        playStoreLink: "https://play.google.com/store/apps/details?id=clil.sales.priyojonpro",
        fullDescription: "Priyojon is a simple insurance management application for Chartered Life, developed as a native Android app. The project follows MVVM architecture, supports dynamic forms with 20+ input fields in a single view, background data fetching. Built with Kotlin and Navigation Component.",
        contribution: [
            "Delivered as a contractual project for an insurance company to collect customer data",
            "Developed two separate apps for customer and company, each with unique complexities",
            "Followed MVVM architecture for maintainable and scalable code",
            "Handled 20+ input fields in a single screen with optimized performance and robust validation",
            "Managed complex JSON data formats for backend integration"
        ]
    },
    {
        id: 24,
        title: "Shukhee & Shukhee Expert Apps",
        description: "E-health platform by GDHS connecting patients and providers for easy care.",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shukhee-1.webp",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shukhee-4.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shukhee-2.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/shukhee-3.png",
        ],
        tags: [
            ProjectTag.FLUTTER,
        ],
        link: "https://shukhee.com/",
        playStoreLink: "https://play.google.com/store/apps/developer?id=GTT-DIGITAL+HEALTHCARE+SOLUTIONS",
        fullDescription: "Shukhee is a pioneering e-health platform launched by Grameen Digital Healthcare Solutions (GDHS). Our team comprises experienced healthcare professionals, technologists, and customer service experts who are passionate about making healthcare accessible to all. We are committed to leveraging technology to bridge the gap between patients and healthcare providers, making it easier for you to manage your health.",
        contribution: [
            "Built a dynamic home page in Flutter for flexible content rendering",
            "Integrated Agora VideoUIKit for real-time video calling in both patient and doctor apps",
            "Handled background data fetching and synchronization tasks",
            "Ensured smooth user experience and robust performance"
        ]
    },
    {
        id: 25,
        title: "Paperless",
        description: "Robust payment gateway for Paperless Limited",
        category: ProjectCategory.SYSTEM,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/paperless.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/paperless-1.png",
        ],
        tags: [
            ProjectTag.FLUTTER, ProjectTag.Kafka, ProjectTag.Microservice
        ],
        link: "https://www.paperlessltd.com/",
        fullDescription: "Paperless is a robust payment gateway solution developed for Paperless Limited, designed to facilitate secure and efficient transactions. The platform supports various payment methods and integrates seamlessly with existing systems.",
        contribution: [
            "Set up the initial project architecture and infrastructure",
            "Integrated event-driven architecture using Kafka for service-to-service communication",
            "Managed a multi-stack backend (Laravel, Node.js, Spring Boot)",
            "Guided the Flutter team in designing complex floating UI components and secure payment gateway integration",
            "Ensured robust security practices for payment processing",
            "Developed dynamic form handling for 50+ input fields in a single component",
            "Implemented MVVM architecture for maintainable and scalable code",
            "Handled background data fetching and synchronization tasks",
            "Ensured smooth user experience and robust performance"
        ]
    }
]