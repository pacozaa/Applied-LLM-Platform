# Setting Up PostgreSQL with Docker

This guide shows how to set up PostgreSQL locally using Docker for the Applied-LLM-Platform.

## 🐳 Docker Installation

### Pull and Run PostgreSQL

```bash
docker pull postgres:16

docker run -d \
    --name postgres \
    --restart always \
    -e POSTGRES_USER=myuser \
    -e POSTGRES_PASSWORD=mypassword \
    -e POSTGRES_DB=playground \
    -p 5432:5432 \
    -v postgres_data:/var/lib/postgresql/data \
    postgres:16
```

## 🔧 Environment Variables

Add to your `.env` file:
```bash
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/playground"
```

## ✅ Verify Installation

### Check Container Status
```bash
docker ps | grep postgres
```

### Connect Using psql
```bash
docker exec -it postgres psql -U myuser -d playground
```

### Test Connection
```sql
-- Inside psql
\dt  -- List tables
\l   -- List databases
\q   -- Quit
```

## 🎯 Quick Setup Script

Save this as `setup-postgres.sh`:

```bash
#!/bin/bash
docker pull postgres:16
docker run -d \
    --name postgres \
    --restart always \
    -e POSTGRES_USER=myuser \
    -e POSTGRES_PASSWORD=mypassword \
    -e POSTGRES_DB=playground \
    -p 5432:5432 \
    -v postgres_data:/var/lib/postgresql/data \
    postgres:16

echo "PostgreSQL is running!"
echo "Connection string: postgresql://myuser:mypassword@localhost:5432/playground"
```

Run it:
```bash
chmod +x setup-postgres.sh
./setup-postgres.sh
```

## 🔄 Common Operations

### Start/Stop Container
```bash
# Stop
docker stop postgres

# Start
docker start postgres

# Restart
docker restart postgres
```

### View Logs
```bash
docker logs postgres
docker logs -f postgres  # Follow logs
```

### Backup Database
```bash
docker exec postgres pg_dump -U myuser playground > backup.sql
```

### Restore Database
```bash
cat backup.sql | docker exec -i postgres psql -U myuser -d playground
```

## 🆘 Troubleshooting

### Port 5432 Already in Use
```bash
# Use different port
docker run -d \
    --name postgres \
    -p 5433:5432 \
    postgres:16

# Update .env
DATABASE_URL="postgresql://myuser:mypassword@localhost:5433/playground"
```

### Connection Refused
1. Check if container is running: `docker ps`
2. Check logs: `docker logs postgres`
3. Verify port mapping: `docker port postgres`

### Permission Denied
```bash
# Remove existing container and volume
docker stop postgres
docker rm postgres
docker volume rm postgres_data

# Run the docker run command again
```

## 🔐 Security Notes

For production:
- Use strong passwords
- Don't expose port 5432 publicly
- Use environment variables for credentials
- Enable SSL connections
- Regular backups

## 📖 Additional Resources

For complete setup instructions, see:
- **[Original PostgreSQL Setup Guide](../archived/SETUP_POSTGRESQL_DOCKER_LOCALLY.md)**
- [PostgreSQL Docker Hub](https://hub.docker.com/_/postgres)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
