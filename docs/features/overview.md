# Features Overview

Applied-LLM-Platform includes various LLM integration examples and patterns. Each feature demonstrates different aspects of working with Large Language Models.

## 🤖 Chat Examples

### Basic Chat
**Route**: `/chat`

A simple chat implementation demonstrating:
- Direct interaction with OpenAI's GPT models
- Simple conversation handling
- Basic prompt engineering techniques
- Memory management for contextual conversations

**Perfect for**: Beginners, understanding LLM basics

---

### Chat with Tools
**Route**: `/chatWithTools`

An advanced chat system that incorporates:
- Custom tool integration with LLM
- Function calling capabilities
- Dynamic response handling
- Tool-augmented conversations for enhanced functionality

**Perfect for**: Intermediate users, learning function calling

---

### Chat with Insurance API
**Route**: `/chatInsurance`

A specialized chat implementation that:
- Integrates with insurance-specific APIs
- Handles insurance-related queries and calculations
- Provides policy information and quotes
- Demonstrates real-world API integration with LLM

**Perfect for**: Real-world API integration patterns

---

## 🧠 RAG (Retrieval-Augmented Generation)

### RAG with Raw Text Chunking
**Route**: `/ragRawChunk`

Learn the fundamentals of RAG:
- Text chunking strategies for large documents
- Efficient document processing
- Optimal chunk size determination
- Enhanced context retrieval for more accurate responses

**Perfect for**: Understanding RAG basics, no vector DB required

---

### RAG with Qdrant
**Route**: `/ragQdrant`

Advanced RAG implementation using Qdrant vector database:
- Vector-based similarity search
- Efficient document embedding and storage
- Fast and accurate information retrieval
- Scalable knowledge base management

**Requirements**: Qdrant vector database ([Setup Guide](../setup/qdrant.md))

---

### RAG Agentic
**Route**: `/ragAgentic`

Next-level RAG with agentic workflows:
- Multi-step reasoning
- Autonomous decision making
- Advanced retrieval strategies
- Dynamic query planning

**Requirements**: Qdrant (optional but recommended)

---

### RAG with Graph Database
**Route**: `/ragGraph`

Graph-based RAG implementation:
- Relationship-aware retrieval
- Knowledge graph integration
- Connected data exploration
- Graph-enhanced context

**Requirements**: Neo4j graph database ([Setup Guide](../setup/neo4j.md))

---

## 🔍 Search & Research

### ReAct Agent with Search
**Route**: `/reactSearch`

Internet-connected AI agent:
- Real-time web search integration
- ReAct (Reasoning + Acting) framework
- Multi-step research workflows
- Fact verification and citation

**Requirements**: Tavily API key ([Get API Key](https://tavily.com))

**Documentation**: [ReAct with Tavily Guide](../archived/REACT_TAVILY_SEARCH.md)

---

## 🛠️ Developer Tools

### Developer Agent
**Route**: `/react`

A powerful LLM-powered shell agent that can:
- Execute complex shell operations through natural language
- Handle file system operations and text processing
- Create POC projects (web servers, APIs, etc.)
- Handle Docker, Kubernetes, and containerization tasks
- Provide reasoning before command execution
- Maintain context for multi-step tasks

**Perfect for**: Automation, prototyping, DevOps tasks

**Documentation**: [Developer Agent Guide](../archived/DeveloperAgent.md)

⚠️ **Warning**: This agent executes commands on your machine. Use with caution!

---

## 📄 Document Processing

### Document Pipeline
**Route**: `/documentPipeline`

Process and analyze documents:
- PDF parsing and text extraction
- Batch document processing
- Metadata extraction
- Document classification

**Documentation**: [Pipeline API Guide](../archived/PIPELINE_API_Guide.md)

---

## 🗄️ Database Integration

All examples include integration with:

### Prisma ORM
- Type-safe database access
- Migration management
- Visual database editor (Prisma Studio)

[Setup Prisma](../setup/prisma.md)

### PostgreSQL
- Relational data storage
- Full-text search
- JSON support

[Setup PostgreSQL](../setup/postgresql.md)

### Qdrant Vector Database
- Similarity search
- Embedding storage
- Fast retrieval

[Setup Qdrant](../setup/qdrant.md)

### Neo4j Graph Database
- Relationship mapping
- Graph queries
- Connected data

[Setup Neo4j](../setup/neo4j.md)

---

## 🎯 Feature Comparison

| Feature | Complexity | External Services | Best For |
|---------|-----------|-------------------|----------|
| Basic Chat | ⭐ | OpenAI | Learning basics |
| Chat with Tools | ⭐⭐ | OpenAI | Function calling |
| RAG Raw Chunk | ⭐⭐ | OpenAI | RAG fundamentals |
| RAG Qdrant | ⭐⭐⭐ | OpenAI, Qdrant | Production RAG |
| ReAct Search | ⭐⭐⭐ | OpenAI, Tavily | Research agents |
| Developer Agent | ⭐⭐⭐⭐ | OpenAI | Automation |
| RAG Graph | ⭐⭐⭐⭐ | OpenAI, Neo4j | Connected data |

---

## 🚀 Getting Started

1. **Start Simple**: Begin with Basic Chat or RAG Raw Chunk
2. **Add Databases**: Set up Qdrant or Neo4j for advanced features
3. **Explore Agents**: Try ReAct Search and Developer Agent
4. **Build Custom**: Use examples as templates for your projects

---

## 📚 Additional Documentation

- [Getting Started Guide](../../GETTING_STARTED.md)
- [Setup Guides](../setup/)
- [Testing Guide](../testing/overview.md)
- [Deployment Guide](../deployment/azure.md)
