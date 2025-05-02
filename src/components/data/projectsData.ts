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
        image: "https://polygontechnology.io/wp-content/uploads/2023/11/Ranks-Offline-Sales-Tracker-_-Campaign-Solution-Mid-Photo.jpg",
        images: [
            "https://polygontechnology.io/wp-content/uploads/2023/11/Ranks-Offline-Sales-Tracker-_-Campaign-Solution-Mid-Photo.jpg",
            "https://raw.githubusercontent.com/nuhin13/nuhin13-protfolio/refs/heads/development/img/screenshot/dizi.png",
            "https://polygontechnology.io/wp-content/uploads/2024/10/Ami-Probashi-Case-Study-First-Image.jpg"
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