export const siteConfig = {
  name: "Gowtham Kumar N",
  title: "Senior Engineer & Engineering Leader",
  description:
    "Senior Engineer with 12+ years building production AI systems at scale. Currently leading Generative AI infrastructure at WiseTech Global.",
  accentColor: "#c9a84c",
  social: {
    email: "gowthamkumarn@gmail.com",
    linkedin: "https://linkedin.com/in/gowthamkumarn",
    github: "https://github.com/gowthamkumar-nandakishore",
  },
  heroTagline: "I build AI systems at scale and lead the engineers who ship them.",
  heroDescription:
    "12 years of production engineering — from enterprise fintech processing millions of daily transactions to Generative AI document parsing pipelines. Currently owning core AI infrastructure at WiseTech Global.",
  stats: [
    { value: "12+", label: "Years in Production", detail: "Enterprise fintech → Generative AI" },
    { value: "5×", label: "Throughput Delivered", detail: "AI inference service optimization" },
    { value: "$11B", label: "Client Scale", detail: "Tier-1 US leasing, 5M receivables" },
    { value: "12+", label: "Engineers Managed", detail: "IIT grads, cross-timezone teams" },
  ],
  aboutMe:
    "Senior engineer with 12 years of experience building systems that scale — from enterprise financial platforms processing millions of daily transactions, to Generative AI document parsing pipelines at WiseTech Global (CargoWise). Currently I own two production AI services inside an end-to-end document intelligence pipeline using zero-shot LLM extraction, in-context learning via AWS Bedrock (Claude Sonnet), FAISS vector search, and a closed human-feedback loop. I combine deep systems engineering with genuine people leadership, having managed teams of up to 12 engineers including IIT graduates across India and the UK. I hold an M.Tech from BITS Pilani and enjoy working at companies building ambitious, high-impact products.",
  skills: [
    "AWS Bedrock",
    "Claude Sonnet",
    "RAG Pipelines",
    "FAISS",
    "FastAPI",
    "Python",
    "C#",
    ".NET",
    "DynamoDB",
    "PostgreSQL",
    "Amazon SQS",
    "System Design",
    "Distributed Systems",
    "Grafana",
    "Docker",
    "Zero-Shot LLMs",
  ],
  projects: [
    {
      name: "AI Cheatsheet",
      description:
        "A comprehensive, continuously updated reference for Prompt Engineering, Context Engineering, Agentic AI, and .claude/ Architecture — built as an interactive documentation site.",
      link: "https://gowthamkumar-nandakishore.github.io/aicheatsheet/",
      skills: ["AI/ML", "LLMs", "RAG", "Prompt Engineering"],
    },
    {
      name: "Automated Labeling RAG System",
      description:
        "Multi-stage retrieval pipeline for automated document labeling. FAISS vector search, RandomForest reranking, then AWS Bedrock Claude via in-context learning to predict field labels for logistics documents.",
      link: "",
      skills: ["FastAPI", "FAISS", "AWS Bedrock", "RandomForest", "DynamoDB"],
    },
    {
      name: "High-Concurrency Vector Memory System",
      description:
        "SQS-driven multi-process correction service that captures human corrections, diffs JSON to extract field-level changes, deduplicates via cosine similarity, and persists to multiple stores forming a closed feedback loop.",
      link: "",
      skills: ["Amazon SQS", "PostgreSQL", "DynamoDB", "S3", "AsyncIO"],
    },
    {
      name: "Zero-Shot Document Extraction Pipeline",
      description:
        "Zero-shot LLM extraction capability enabling field extraction from documents with unseen layouts using vision-language models and layout-aware LMDX prompting — no ML training data required.",
      link: "",
      skills: ["GPT", "Qwen VL", "LMDX", "Zero-Shot", "FastAPI"],
    },
    {
      name: "High-Scale Financial Data Platform",
      description:
        "Data solutions for a Tier-1 US leasing firm with $11B in assets — 5 million receivables in under 2 minutes. Migration tooling with 6x performance improvement for 10M records with zero data loss.",
      link: "",
      skills: ["C#", "SQL Server", ".NET", "ETL", "Performance Tuning"],
    },
  ],
  experience: [
    {
      company: "WiseTech Global (CargoWise)",
      title: "Data Science Team Leader",
      dateRange: "Jul 2024 — Present",
      bullets: [
        "Built and own the AKBE Retrieve Service — FastAPI application using FAISS vector search, RandomForest classification, and AWS Bedrock Claude via in-context learning",
        "Built and own the AKBE Correction Service — SQS-driven multi-process feedback pipeline persisting corrections to DynamoDB, PostgreSQL, and FAISS on S3",
        "Oversaw delivery of zero-shot LLM extraction using GPT and Qwen VL vision-language models with LMDX prompting",
        "Delivered 500% throughput improvement via algorithmic refactoring and custom Python memoization with SHA-256 cache keys",
        "Implemented production reliability patterns — circuit breakers, async concurrency, and jittered exponential backoff across Bedrock and embedding service calls",
        "Proposed and currently leading architectural migration from FAISS to Elasticsearch for document vector indexing with improved metadata filtering",
        "Managed 4 direct and 4 indirect reports across India and UK including IIT graduates, with full people management responsibilities",
      ],
    },
    {
      company: "Odessa (LeaseWave)",
      title: "Senior Technical Lead",
      dateRange: "Dec 2013 — Jul 2024",
      bullets: [
        "Led teams of 10 to 12 engineers with full EM responsibilities — hiring, PIPs, performance reviews, 1:1s, and exit conversations",
        "Progressed from intern to Senior Technical Lead over 10 years with increasing ownership of critical financial modules",
        "Re-architected core platform modules achieving 60% performance improvement and 10% defect reduction",
        "Delivered high-scale solutions for a Tier-1 US leasing firm ($11B assets) — 5M receivables in under 2 minutes",
        "Engineered data migration tools with 4 to 6x speed improvement — 10M records in under 5 hours, zero data loss",
        "Handpicked to build the Activity Center — a 65-screen enterprise module delivered under aggressive market deadlines with minimal defects",
        "Built end-to-end distributed load testing suite using JMeter, Grafana, and InfluxDB based on client peak-day usage heuristics",
        "Defined HLD/LLD standards for high-risk financial modules and coached team on SOLID/DRY/KISS principles",
      ],
    },
  ],
  certifications: [
    "Secure Large Language Model Applications",
    "Agile Training Certificate",
  ],
  education: [
    {
      school: "BITS Pilani",
      degree: "M.Tech, Software Systems",
      dateRange: "2016 — 2019",
      achievements: [
        "Master of Technology in Software Systems",
        "Completed while working full-time at Odessa",
      ],
    },
    {
      school: "Anna University",
      degree: "B.E., Electrical & Electronics Engineering",
      dateRange: "2010 — 2014",
      achievements: [
        "Karpagam Institute of Technology",
      ],
    },
  ],
};
