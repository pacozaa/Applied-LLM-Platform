# Setting Up Qdrant Vector Database

[Qdrant](https://qdrant.tech/documentation/quickstart/) is a high-performance vector database used for similarity search and AI applications.

## 🐳 Docker Installation

### Pull and Run

```bash
docker pull qdrant/qdrant
docker run -d \
    --name qdrant \
    --restart always \
    -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/qdrant_storage:/qdrant/storage:z \
    qdrant/qdrant
```

## 📁 Configure Volume

The `-v` flag mounts the `qdrant_storage` directory as a volume, which is where the Qdrant data will be stored.

You need to configure Docker to have permission to access the volume by:
1. Go to **Docker Desktop Settings** > **Resources** > **File Sharing**
2. Add the `qdrant_storage` directory (or its parent directory) to the list

## ✅ Verify Installation

### Local Deployment
If you've set up a deployment locally with the Qdrant Quickstart, navigate to:
- **Dashboard**: [http://localhost:6333/dashboard](http://localhost:6333/dashboard)

### Cloud Deployment
If you've set up a deployment in a cloud cluster:
1. Find your Cluster URL in your cloud dashboard at [https://cloud.qdrant.io](https://cloud.qdrant.io)
2. Add `:6333/dashboard` to the end of the URL

## 🔧 Environment Variables

Add to your `.env` file:
```bash
QDRANT_URL=http://localhost:6333
```

## 📚 Usage in Applied-LLM-Platform

Qdrant is used in the following examples:
- `/ragQdrant` - RAG with Qdrant vector search
- `/ragAgentic` - Advanced RAG with agentic workflows

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Stop any existing Qdrant container
docker stop qdrant
docker rm qdrant

# Or use different ports
docker run -d \
    --name qdrant \
    -p 6334:6333 -p 6335:6334 \
    qdrant/qdrant
```

### Permission Denied
Make sure Docker has access to the volume directory. See "Configure Volume" section above.

### Container Won't Start
Check Docker logs:
```bash
docker logs qdrant
```

## 📖 Additional Resources

- [Qdrant Documentation](https://qdrant.tech/documentation/)
- [Qdrant Quickstart](https://qdrant.tech/documentation/quickstart/)
- [Qdrant API Reference](https://qdrant.tech/documentation/api-reference/)
