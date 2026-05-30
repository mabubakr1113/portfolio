import type { Project } from "@/types";

const project = (
  title: string,
  period: string,
  badge: string,
  description: string,
  highlights: string[],
  tech: string[]
): Project => ({ title, period, badge, description, highlights, tech });

export const PROJECTS: Project[] = [
  project(
    "DMP – Airport Data Management Platform",
    "06/2025 – Present",
    "Production",
    "Enterprise airport operations platform featuring real-time flight management, resource allocation, and AOMS integration across multiple airports.",
    [
      "Real-time flight management and intelligent resource allocation dashboard",
      "Alerts system reducing response time to critical events by 60%",
      "Multi-airport data architecture improved efficiency by 40%",
      "ShadCN + TypeScript architecture reduced component build time by 30%",
    ],
    ["React 18", "TypeScript", "Next.js 14", "ShadCN", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Docker", "Kubernetes", "AWS ECS", "GitHub Actions", "Datadog", "Jest", "Playwright", "Storybook"]
  ),
  project(
    "CampLocator – Camp Discovery Platform",
    "2022 – 2023",
    "Full-Stack",
    "Location-based discovery and booking platform with a Go microservice backend, React/Next.js frontend, AWS deployment, and PostgreSQL data layer.",
    [
      "Go microservices architecture reduced API latency by 45%",
      "AWS infrastructure with auto-scaling for seasonal traffic spikes",
      "TypeScript + ChakraUI frontend with map-based search interface",
    ],
    ["Next.js", "TypeScript", "ChakraUI", "React Query", "GoLang", "gRPC", "Gin", "Protocol Buffers", "PostgreSQL", "PostGIS", "Redis", "AWS EC2", "AWS Lambda", "AWS S3", "CloudFront", "Terraform", "GitLab CI"]
  ),
  project(
    "Real-Time Messaging Platform",
    "2022",
    "Real-time",
    "High-throughput messaging app with GraphQL subscriptions, WebSockets, Cassandra time-series storage, and a Next.js frontend.",
    [
      "GraphQL subscriptions + WebSockets enabled sub-100ms message delivery",
      "Cassandra schema handled millions of messages with low latency",
      "Mentored 7 junior developers during the build cycle",
    ],
    ["Node.js", "TypeScript", "Next.js", "Apollo Server", "GraphQL", "GraphQL Subscriptions", "WebSockets", "Socket.io", "Cassandra", "Redis Pub/Sub", "Kafka", "Docker", "Nginx", "PM2", "Grafana"]
  ),
  project(
    "AI Investor–Startup Matching Platform",
    "2025",
    "Award Winner",
    "AI-powered SinceAI Hackathon platform matching investors with startups using semantic search and conversational AI.",
    [
      "Top 3 out of 50+ competing teams at SinceAI Hackathon",
      "Won the ElevenLabs AI Challenge for innovative AI audio integration",
      "Voyage AI semantic vector search + Supabase scalable backend",
    ],
    ["Next.js 14", "React Server Components", "TypeScript", "TailwindCSS", "Supabase", "pgvector", "Edge Functions", "Voyage AI", "OpenAI GPT-4", "LangChain", "ElevenLabs", "Vercel AI SDK", "Vercel"]
  ),
  project(
    "NFT Marketplace",
    "2023",
    "Web3",
    "Decentralised NFT marketplace with optimised smart contracts and efficient on-chain data structuring on the EVM.",
    [
      "300+ transactions/sec through optimised smart contract logic",
      "On-chain data structuring using Solidity + IPFS for asset storage",
      "Full EVM compatibility with Hardhat for testing and deployment",
    ],
    ["Solidity", "Hardhat", "OpenZeppelin", "Ethers.js", "EVM", "ERC-721", "ERC-1155", "IPFS", "Pinata", "Next.js", "Wagmi", "RainbowKit", "WalletConnect", "Chainlink VRF"]
  ),
  project(
    "DeFi Yield Aggregator",
    "2024",
    "DeFi",
    "Cross-chain DeFi aggregator routing liquidity across Uniswap, Aave and Curve while auto-rebalancing for risk-adjusted yield.",
    [
      "Routed ~$2M in TVL across 4 chains with auto-rebalancing strategies",
      "Reduced average gas costs by 62% via Arbitrum / Optimism deployment",
      "Added role-based access control and time-locked admin functions",
      "Subgraph indexing on The Graph for sub-second portfolio analytics",
    ],
    ["Solidity", "Foundry", "OpenZeppelin", "Ethers.js", "Viem", "Wagmi", "The Graph", "Arbitrum", "Optimism", "Base", "Uniswap V3 SDK", "Aave SDK", "Tenderly", "Slither", "Next.js", "TypeScript"]
  ),
  project(
    "DAO Governance & Decentralised Identity",
    "2024",
    "Web3 / DAO",
    "On-chain governance with Sybil-resistant voting backed by decentralised identity, verifiable credentials, and zero-knowledge proofs.",
    [
      "Implemented quadratic voting with ZK-proof Sybil resistance",
      "Identity layer built on Ceramic + DIDs + verifiable credentials",
      "Gasless meta-transactions via EIP-2771 forwarder",
      "Used by a 1,200-member community for 30+ on-chain proposals",
    ],
    ["Solidity", "Hardhat", "OpenZeppelin Governor", "Ceramic", "ComposeDB", "DIDs", "Verifiable Credentials", "Circom", "SnarkJS", "Semaphore", "EIP-2771", "OpenZeppelin Defender", "Wagmi", "Viem", "Next.js 14"]
  ),
  project(
    "Rexia Technology – EdTech Platform",
    "2019 – 2021",
    "Co-founded",
    "Co-founded an EdTech startup and built a gamified online learning platform from zero to one.",
    [
      "Gamification engine with XP, badges, and leaderboards boosted engagement",
      "Built the full product solo from UI design to cloud deployment",
      "Gained foundational startup experience as a technical co-founder",
    ],
    ["React", "Redux", "React Router", "SCSS", "Node.js", "Express", "MongoDB", "Mongoose", "Firebase Auth", "Firebase Cloud Messaging", "Stripe", "Cloudinary", "Heroku", "Netlify"]
  ),
];
