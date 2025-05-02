export enum ProjectCategory {
  ALL = "all",
  SYSTEM = "system",
  MOBILE = "mobile",
  WEB = "web",
  CONSULTANCY = "consultancy",
  BLOCKCHAIN = "blockchain"
}

export enum ProjectTag {
  REACT = "React",
  ETHEREUM = "Ethereum",
  POLYGON = "Polygon",
  THE_GRAPH = "The Graph",
  WEB3_JS = "Web3.js",
  DEFI = "DeFi",
  MULTIPLE_CHAINS = "Multiple Chains",
  NEXT_JS = "Next.js",
  SOLIDITY = "Solidity",
  IPFS = "IPFS",
  ERC_721 = "ERC-721",
  REACT_NATIVE = "React Native",
  BLOCKCHAIN = "Blockchain",
  HEALTHCARE = "Healthcare",
  PRIVACY = "Privacy",
  ANGULAR = "Angular",
  HYPERLEDGER_FABRIC = "Hyperledger Fabric",
  IOT = "IoT",
  SUPPLY_CHAIN = "Supply Chain",
  VUE_JS = "Vue.js",
  CHART_JS = "Chart.js",
  CRYPTO_APIS = "Crypto APIs",
  REAL_TIME_DATA = "Real-time Data",
  NATIVE_ANDROID = "Native Android",
  CACHING = "Caching",
  CACHING_FIRST = "Caching First",
  FLUTTER = "Flutter",
  HIVE = "Hive",
  SqlLite = "SqlLite",
  MySql = "MySql",
  Redis = "Redis",
  NATIVE_FLUTTER_COMMUNICATION = "Native Flutter Communication",
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  images: string[];
  tags: ProjectTag[];
  link?: string;
  github?: string;
  playStoreLink?: string;
  appleStoreLink?: string;
  fullDescription: string;
  contribution: string[];
}

export interface CategoryOption {
  id: ProjectCategory;
  name: string;
}

export const categories: CategoryOption[] = [
    { id: ProjectCategory.ALL, name: "All" },
    { id: ProjectCategory.SYSTEM, name: "Full System" },
    { id: ProjectCategory.MOBILE, name: "Mobile" },
    { id: ProjectCategory.WEB, name: "Backend" },
    { id: ProjectCategory.CONSULTANCY, name: "Consultancy" },
];
