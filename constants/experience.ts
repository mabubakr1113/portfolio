import type { Education, ExperienceRole } from "@/types";

const role = (
  title: string,
  company: string,
  location: string,
  period: string,
  current: boolean,
  highlights: string[],
  tech: string[]
): ExperienceRole => ({ title, company, location, period, current, highlights, tech });

export const EXPERIENCE: ExperienceRole[] = [
  role(
    "Senior Full-Stack Engineer",
    "Emma Systems",
    "Espoo, Finland",
    "06/2025 – Present",
    true,
    [
      "Architected enterprise full-stack systems using React, TypeScript, and ShadCN, reducing component build time by 30%",
      "Led structured code reviews across 5+ engineers, eliminating flagged anti-patterns before production",
      "Improved dashboard rendering throughput by 40% for thousands of concurrent records",
      "Streamlined CI/CD deployments with Docker, cutting delivery timelines by 25%",
      "Defined system design standards across 3+ Agile squads, reducing production regressions by 35%",
    ],
    ["React 18", "TypeScript", "Next.js 14", "ShadCN", "TailwindCSS", "Zustand", "React Query", "Storybook", "Node.js", "PostgreSQL", "Prisma", "Docker", "Kubernetes", "GitHub Actions", "Datadog", "Sentry"]
  ),
  role(
    "Senior Software Engineer",
    "Devsinc",
    "San Jose, CA (Remote)",
    "03/2023 – 04/2025",
    false,
    [
      "Led full-stack projects across a diverse tech stack, contributing $500K in additional revenue",
      "Implemented microservice architecture on AWS Lambda & Kubernetes, reducing loading times by 75%",
      "Optimised API performance with Next.js SSR and TypeScript, improving speeds by 130%",
      "Automated CI/CD via GitLab, cutting deployment effort by 50%; implemented Cypress with 95% test coverage",
      "Conducted rigorous code reviews increasing code quality by 25% and team efficiency by 10x",
    ],
    ["React", "Next.js", "TypeScript", "Redux Toolkit", "Node.js", "NestJS", "GraphQL", "AWS Lambda", "AWS API Gateway", "AWS ECS", "AWS S3", "Kubernetes", "Helm", "Docker", "Terraform", "Cypress", "Jest", "GitLab CI", "Argo CD"]
  ),
  role(
    "Software Engineer",
    "Devsinc",
    "San Jose, CA (Remote)",
    "03/2022 – 03/2023",
    false,
    [
      "Built 3 production-ready projects using Next.js, React, GraphQL, and Node.js",
      "Engineered scalable B2B SaaS apps, optimising API response times by 40% and downtime by 25%",
      "Developed 10+ React components with Redux and TypeScript for cross-browser compatibility",
      "Managed documentation for 5+ projects, establishing continuous improvement practices",
    ],
    ["Node.js", "Express", "Apollo Server", "GraphQL", "REST", "React", "Redux", "TypeScript", "Webpack", "Styled Components", "PostgreSQL", "TypeORM", "Redis", "Jest", "React Testing Library", "Swagger", "Postman"]
  ),
  role(
    "Software Developer",
    "Upwork",
    "Remote (Freelance)",
    "01/2020 – 03/2022",
    false,
    [
      "Delivered 20+ scalable web solutions using the MERN stack with 100% job success rate",
      "Optimised JSON API responses with Next.js and HeadlessCMS, improving load times by 40%",
      "Reduced database response times by 50% through SQL query optimisation and Bash automation",
      "Improved CI/CD workflows by 60% with robust Git version control and pipeline automation",
    ],
    ["MongoDB", "Express", "React", "Node.js", "Next.js", "MySQL", "PostgreSQL", "SQL", "Strapi", "Contentful", "Sanity", "Tailwind", "Material UI", "Vercel", "DigitalOcean", "Bash", "Git"]
  ),
  role(
    "Web Developer Intern",
    "PTCL",
    "Islamabad, Pakistan",
    "06/2021 – 09/2021",
    false,
    [
      "Designed and maintained responsive web apps using React, Angular, HTML, CSS, and JavaScript",
      "Implemented RESTful API integrations for seamless data exchange between front-end and back-end",
      "Improved page load times by 20% through coding best practices, debugging, and performance tuning",
    ],
    ["React", "Angular", "RxJS", "JavaScript ES6", "TypeScript", "HTML5", "SCSS", "Bootstrap", "REST API", "Axios", "Python", "Flask", "MySQL", "Jira"]
  ),
];

export const EDUCATION: Education[] = [
  {
    degree: "Master's in Software Engineering",
    institution: "University of Turku",
    location: "Turku, Finland",
    period: "09/2024 – 09/2026",
    gpa: "4.4 / 5.0",
    specialisation: "Software Security & AI-assisted Development",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Sciences & Technology (NUST)",
    location: "Islamabad, Pakistan",
    period: "2018 – 2022",
    gpa: "3.56 / 4.0",
    specialisation: "Programming, Databases, Data Structures",
  },
];
