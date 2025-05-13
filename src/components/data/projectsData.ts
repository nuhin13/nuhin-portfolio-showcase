import {Project, ProjectCategory, ProjectTag} from "../type/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "sManager: ব্যবসার সুপার অ্যাপ",
        description: "Super app to manage any business – from daily sales, balance calculations, to digital payments, installment sales, and stock/income reports.",
        category: ProjectCategory.MOBILE,
        image: "https://polygontechnology.io/wp-content/uploads/2024/10/Ami-Probashi-Case-Study-First-Image.jpg",
        images: [
            "https://polygontechnology.io/wp-content/uploads/2024/10/Ami-Probashi-Case-Study-First-Image.jpg",
            "https://polygontechnology.io/wp-content/uploads/2023/11/Ranks-Offline-Sales-Tracker-_-Campaign-Solution-Mid-Photo.jpg",
            "https://raw.githubusercontent.com/nuhin13/nuhin13-protfolio/refs/heads/development/img/screenshot/dizi.png"
        ],
        tags: [ProjectTag.REACT, ProjectTag.ETHEREUM, ProjectTag.POLYGON, ProjectTag.THE_GRAPH],
        link: "https://example.com/project1",
        github: "https://github.com/nuhin13/project1",
        fullDescription: "Led the development of a user-friendly bridge explorer to improve transparency and user experience for cross-chain transactions between Ethereum and Polygon. The application provides real-time monitoring, detailed transaction history, and analytics that help users understand and resolve issues with their bridge transactions.",
        contribution: [
            "Architected the overall application structure following best practices",
            "Implemented real-time transaction monitoring using The Graph and Polygon APIs",
            "Built a robust error reporting system to help users troubleshoot failed transactions",
            "Optimized performance to handle large transaction volumes with minimal latency",
            "Led a team of 3 developers and coordinated with the design team for UI implementation"
        ]
    },
    {
        id: 2,
        title: "DeFi Dashboard",
        description: "A unified dashboard for managing DeFi investments across multiple protocols and blockchains.",
        category: ProjectCategory.BLOCKCHAIN,
        image: "https://polygontechnology.io/wp-content/uploads/2023/11/Ranks-Offline-Sales-Tracker-_-Campaign-Solution-Mid-Photo.jpg",
        images: [
            "https://polygontechnology.io/wp-content/uploads/2023/11/Ranks-Offline-Sales-Tracker-_-Campaign-Solution-Mid-Photo.jpg",
            "https://raw.githubusercontent.com/nuhin13/nuhin13-protfolio/refs/heads/development/img/screenshot/dizi.png",
            "https://polygontechnology.io/wp-content/uploads/2024/10/Ami-Probashi-Case-Study-First-Image.jpg"
        ],
        tags: [ProjectTag.REACT, ProjectTag.WEB3_JS, ProjectTag.DEFI, ProjectTag.MULTIPLE_CHAINS],
        link: "https://example.com/project2",
        github: "https://github.com/nuhin13/project2",
        fullDescription: "Created a comprehensive DeFi dashboard that aggregates data from multiple protocols across different blockchains, providing users with a unified view of their investments, yields, and opportunities. The platform supports portfolio tracking, yield farming analytics, and smart notifications for important events.",
        contribution: [
            "Designed and implemented cross-chain data aggregation system",
            "Developed yield optimization algorithms to suggest best investment strategies",
            "Integrated with 15+ DeFi protocols across 5 different blockchains",
            "Created a responsive UI that works seamlessly on both desktop and mobile",
            "Implemented robust security measures to protect user data and wallet connections"
        ]
    },
    {
        id: 3,
        title: "Dizi Cashier",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/dizi.png",
        images: [
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/dizi.png",
            "https://raw.githubusercontent.com/nuhin13/nuhin-portfolio-showcase/refs/heads/main/project%20images/dizi3.png"
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
        id: 4,
        title: "Sheba.xyz",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/sheba1.png",
        images: [
            "/project images/sheba1.png"
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
        id: 5,
        title: "sManager",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/smanager2.png",
        images: [
            "/project images/smanager1.jpg",
            "/project images/smanager2.png",
            "/project images/smanager3.png"
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
        id: 6,
        title: "sPro",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/spro1.png",
        images: [
            "/project images/spro1.png",
            "/project images/spro2.png"
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
        id: 7,
        title: "digiGo",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/digi1.png",
        images: [
            "/project images/digi1.png",
            "/project images/digi2.png",
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
        id: 8,
        title: "sDelivery",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/sdelivery.png",
        images: [
            "/project images/sdelivery.png"
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
        id: 9,
        title: "sBondhu",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/bondhu1.png",
        images: [
            "/project images/bondhu1.png"
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
        id: 10,
        title: "Agave",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/agave1.png",
        images: [
            "/project images/agave1.png",
            "/project images/agave2.png",
            "/project images/agave3.png",
            "/project images/agave4.png",
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
        id: 11,
        title: "DrugN",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/drugN1.png",
        images: [
            "/project images/drugN1.png",
            "/project images/drugN2.png",
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
        id: 12,
        title: "eDucation",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/education1.png",
        images: [
            "/project images/education1.png",
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
        id: 13,
        title: "Knower",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/knower.png",
        images: [
            "/project images/knower.png",
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
        id: 14,
        title: "Source?. Manga",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/manga2.png",
        images: [
            "/project images/manga1.png",
            "/project images/manga2.png",
            "/project images/manga3.png",
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
        image: "/project images/abg1.jpg",
        images: [
            "/project images/abg1.jpg",
            "/project images/abg2.jpg",
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
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/beat1.png",
        images: [
            "/project images/beat1.png",
            "/project images/beat2.png",
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
        id: 17,
        title: "Resume Builder SDK",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/resume1.png",
        images: [
            "/project images/resume1.png",
            "/project images/resume2.png",
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
        id: 18,
        title: "Shell BD Apps",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/shell1.png",
        images: [
            "/project images/shell1.png",
            "/project images/shell2.png",
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
        image: "/project images/shell-web1.png",
        images: [
            "/project images/shell-web1.png",
            "/project images/shell-web2.png",
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
        title: "We Grow",
        description: "Sales, Stock and Account Management Software",
        category: ProjectCategory.MOBILE,
        image: "/project images/wegrow1.png",
        images: [
            "/project images/wegrow1.png",
            "/project images/wegrow2.png",
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
        image: "/project images/vwb1.png",
        images: [
            "/project images/vwb1.png"
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
        image: "/project images/cyberwise1.png",
        images: [
            "/project images/cyberwise1.png",
            "/project images/cyberwise2.png",
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
        id: 23,
        title: "Priyojon - Chartered Life",
        description: "Chartered Life Simple Insurance Management Application.",
        category: ProjectCategory.SYSTEM,
        image: "/project images/priyojon1.png",
        images: [
            "/project images/priyojon1.png",
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
]