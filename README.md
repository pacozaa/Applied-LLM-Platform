# 🚀 Applied-LLM-Platform

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-green?style=flat-square&logo=openai)](https://openai.com/)
[![License](https://img.shields.io/badge/License-Educational-yellow?style=flat-square)](LICENSE)

> 🎓 **Learn by Doing** - Master LLM integration patterns through hands-on examples and real-world implementations

A comprehensive learning platform featuring **20+ production-ready examples** of Large Language Model integrations, from basic chat to advanced RAG systems and autonomous agents.

---

## ✨ Why This Platform?

🎯 **Learn by Building** - Each example is a complete, working implementation  
🔧 **Production Ready** - Battle-tested patterns you can use in real projects  
📚 **Comprehensive** - From basics to advanced: Chat, RAG, Agents, Tools  
🚀 **Easy Setup** - Get started in 5 minutes with our quick start guide  
🔄 **Active Development** - Regularly updated with new patterns and examples

---

## 🎬 Quick Start

Get up and running in **5 minutes**:

```bash
# 1. Clone the repository
git clone https://github.com/pacozaa/Applied-LLM-Platform.git
cd Applied-LLM-Platform

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Add your OPENAI_API_KEY to .env

# 4. Initialize database
npx prisma generate && npx prisma db push

# 5. Start the server
npm run dev
```

🎉 **That's it!** Open [http://localhost:3000](http://localhost:3000) and start exploring.

> 💡 **New here?** Check out the **[Complete Getting Started Guide](GETTING_STARTED.md)** for detailed setup with troubleshooting.

---

## 🎯 What You'll Learn

### 💬 **Chat Implementations**
Master different chat patterns - from basic GPT interactions to tool-augmented conversations and real-world API integrations.

[Explore Chat Examples →](docs/features/overview.md#chat-examples)

### 🧠 **RAG Systems** (Retrieval-Augmented Generation)
Build intelligent knowledge bases with vector search, graph databases, and agentic workflows.

[Explore RAG Examples →](docs/features/overview.md#rag-retrieval-augmented-generation)

### 🤖 **Autonomous Agents**
Create agents that reason, search the web, and execute commands autonomously.

[Explore Agents →](docs/features/overview.md#search--research)

### 🛠️ **Developer Tools**
Automate development tasks with LLM-powered shell agents and document processors.

[Explore Tools →](docs/features/overview.md#developer-tools)

---

## 🌟 Featured Examples

### 🤖 Developer Agent
> Transform natural language into shell commands

A powerful LLM-powered shell agent that understands your intent and executes complex operations:
- 📝 Natural language → Shell commands
- 🐳 Docker & Kubernetes automation
- 🏗️ Quick POC project scaffolding
- 🔄 Multi-step task handling with context

**[Read Guide](docs/archived/DeveloperAgent.md)** | **[Try it live](http://localhost:3000/react)**

https://github.com/user-attachments/assets/1ecab839-f7cd-4ca2-9f12-cf92c7bd96c9

---

### 💬 Interactive Chat
> Learn LLM basics with hands-on chat examples

Start with simple conversations and progress to advanced patterns:
- ✨ **Basic Chat** - Direct GPT-4 interaction
- 🔧 **Chat with Tools** - Function calling & custom tools
- 🏥 **Chat with Insurance API** - Real-world API integration

https://github.com/user-attachments/assets/ab4950d1-9ad7-4f61-a79f-2fbcf72bac08

---

### 🧠 RAG Systems
> Build intelligent knowledge bases

Multiple RAG implementations from beginner to advanced:
- 📄 **RAG with Chunking** - Learn the fundamentals
- 🔍 **RAG with Qdrant** - Production vector search
- 🤖 **RAG Agentic** - Multi-step reasoning
- 🕸️ **RAG with Graph** - Connected knowledge

https://github.com/user-attachments/assets/18f7a74e-968f-44dd-a29c-c91b5ee3098c

---

### 🔍 ReAct Search Agent
> Internet-connected AI that thinks and acts

Combines reasoning with web search for intelligent research:
- 🌐 Real-time web search integration
- 🧩 Multi-step problem solving
- 📚 Fact verification & citations

**[Read Guide](docs/archived/REACT_TAVILY_SEARCH.md)**

https://github.com/user-attachments/assets/9b3ebb4c-b231-417e-9bf7-ebfad94d7d2d

---

**[View All 20+ Examples →](docs/features/overview.md)**

---

## 📚 Documentation

### 📖 **Complete Documentation**

📘 **[Documentation Home](docs/README.md)** - Your guide to everything

### 🚀 **Getting Started**
- **[Setup Guide](GETTING_STARTED.md)** - Get running in 5 minutes
- **[Features Overview](docs/features/overview.md)** - All 20+ examples explained

### 🔧 **Setup Guides**
- **[Qdrant (Vector DB)](docs/setup/qdrant.md)** - For RAG examples
- **[Neo4j (Graph DB)](docs/setup/neo4j.md)** - For graph-based RAG
- **[PostgreSQL](docs/setup/postgresql.md)** - Database setup
- **[Prisma ORM](docs/setup/prisma.md)** - Database management

### 🎯 **Advanced Topics**
- **[Testing Guide](docs/testing/overview.md)** - E2E and unit tests
- **[Azure Deployment](docs/deployment/azure.md)** - Production deployment
- **[Developer Agent](docs/archived/DeveloperAgent.md)** - Shell automation
- **[ReAct with Tavily](docs/archived/REACT_TAVILY_SEARCH.md)** - Search agent

---

## 🏗️ Built With

**Frontend & Framework**
- [Next.js 14+](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components

**LLM & AI**
- [OpenAI](https://openai.com/) - GPT models
- [Langchain](https://www.langchain.com/) - LLM framework
- [Langfuse](https://langfuse.com/) - Observability

**Databases**
- [Prisma](https://www.prisma.io/) - ORM
- [PostgreSQL](https://www.postgresql.org/) - Relational database
- [Qdrant](https://qdrant.tech/) - Vector database
- [Neo4j](https://neo4j.com/) - Graph database

---

## 🧪 Testing

Comprehensive test suite with Playwright & Jest:

```bash
# Run E2E tests
npm run test:e2e

# Run unit tests
npm run test:unit

# Watch mode
npm run test:watch
```

**[View Testing Guide →](docs/testing/overview.md)**

---

## 🚀 Deployment

Deploy to Azure Container Apps with managed PostgreSQL:

**Includes:**
- ✅ Auto-scaling container apps
- ✅ Managed PostgreSQL database
- ✅ HTTPS endpoints
- ✅ Built-in monitoring

**[View Deployment Guide →](docs/deployment/azure.md)** | **[Azure Templates →](azure/)**

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🐛 **Report bugs** - [Open a bug report](https://github.com/pacozaa/Applied-LLM-Platform/issues/new?template=bug_report.md)
2. 💡 **Suggest features** - [Request a feature](https://github.com/pacozaa/Applied-LLM-Platform/issues/new?template=feature_request.md)
3. 📖 **Improve docs** - [Suggest documentation improvements](https://github.com/pacozaa/Applied-LLM-Platform/issues/new?template=documentation.md)
4. ✨ **Add examples** - Create new LLM integration patterns
5. 🧪 **Write tests** - Increase test coverage

See our **[Contributing Guide](CONTRIBUTING.md)** for detailed guidelines.

---

## 📊 Project Status

- ✅ **Examples**: 20+ LLM integration patterns
- ✅ **Documentation**: Comprehensive guides available
- ✅ **CI/CD**: Playwright E2E tests configured
- 📈 **Test Coverage**: ~5% (targeting 60-70%)

See **[NEXT_STEPS.md](NEXT_STEPS.md)** for immediate action items and **[RECOMMENDATIONS.md](RECOMMENDATIONS.md)** for the full roadmap.

---

## 📝 License

This project is for educational purposes. Check the repository for license details.

---

## 🙏 Acknowledgments

Built with amazing open-source tools:
- [Next.js](https://nextjs.org/) - React framework
- [OpenAI](https://openai.com/) - LLM provider
- [Langchain](https://www.langchain.com/) - LLM framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Qdrant](https://qdrant.tech/) - Vector database
- [Neo4j](https://neo4j.com/) - Graph database
- [Prisma](https://www.prisma.io/) - Database ORM

---

<div align="center">

**[⭐ Star this repo](https://github.com/pacozaa/Applied-LLM-Platform)** if you find it helpful!

Made with ❤️ for the developer community

</div>
