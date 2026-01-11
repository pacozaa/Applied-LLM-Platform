# Setting Up Neo4j Graph Database

[Neo4j](https://neo4j.com/docs/operations-manual/current/docker/introduction/) is a powerful graph database for connected data applications.

## 🐳 Docker Installation

### Pull and Run

```bash
docker run -d \
    --name neo4j \
    --restart always \
    --publish=7474:7474 --publish=7687:7687 \
    -e NEO4J_AUTH=neo4j/yourpassword \
    -e NEO4JLABS_PLUGINS='["apoc"]' \
    -v $PWD/data:/data \
    -v $PWD/logs:/logs \
    neo4j:5.26.0
```

## 🔑 Default Credentials

- **Username**: `neo4j`
- **Password**: `yourpassword`
- **URI**: `neo4j://localhost:7687`

## 🔧 Environment Variables

Add to your `.env` file:
```bash
NEO4J_URI=neo4j://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=yourpassword
```

## ✅ Verify Installation

Open the Neo4j Browser at:
- **Browser UI**: [http://localhost:7474](http://localhost:7474)

Login with the credentials above to access the graph database interface.

## 📚 Usage in Applied-LLM-Platform

Neo4j is used in the following examples:
- `/ragGraph` - RAG with graph database
- `/ragChatGraph` - Chat with graph-based RAG
- `/ragGraphPipeline` - Document processing with graph storage

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Stop any existing Neo4j container
docker stop neo4j
docker rm neo4j

# Or use different ports
docker run -d \
    --name neo4j \
    --publish=7475:7474 --publish=7688:7687 \
    -e NEO4J_AUTH=neo4j/yourpassword \
    neo4j:5.26.0
```

### Authentication Failed
Reset the password:
```bash
docker exec -it neo4j bash
neo4j-admin set-initial-password newpassword
```

### Container Won't Start
Check Docker logs:
```bash
docker logs neo4j
```

## 📖 Additional Resources

- [Neo4j Documentation](https://neo4j.com/docs/)
- [Neo4j Docker Guide](https://neo4j.com/docs/operations-manual/current/docker/)
- [APOC Procedures](https://neo4j.com/labs/apoc/)
- [Cypher Query Language](https://neo4j.com/docs/cypher-manual/)
