# Azure Deployment Guide

Deploy the Applied-LLM-Platform to Azure Container Apps with integrated PostgreSQL database.

## 🏗️ Architecture

The deployment includes:
- **Azure Container Apps** - Hosts the Next.js application
- **Azure Database for PostgreSQL** - Managed PostgreSQL instance
- **Auto-scaling** - Scales based on demand
- **Monitoring** - Built-in observability
- **HTTPS Endpoints** - Secure by default

## 🚀 Quick Deployment

### Prerequisites

- Azure account with active subscription
- Azure CLI installed
- Docker (for local testing)

### Deploy Using ARM Template

1. **Navigate to Azure Templates**
   ```bash
   cd azure/
   ```

2. **Review Configuration**
   - Edit `azure/parameters.json` for your settings
   - Check `azure/template.json` for resources

3. **Deploy to Azure**
   ```bash
   az deployment group create \
     --resource-group your-rg \
     --template-file template.json \
     --parameters parameters.json
   ```

## 📋 Detailed Deployment Steps

### 1. Set Up Azure Resources

```bash
# Login to Azure
az login

# Create resource group
az group create \
  --name applied-llm-rg \
  --location eastus

# Create container registry
az acr create \
  --resource-group applied-llm-rg \
  --name appliedllmregistry \
  --sku Basic
```

### 2. Build and Push Docker Image

```bash
# Build Docker image
docker build -t applied-llm-platform .

# Tag image
docker tag applied-llm-platform appliedllmregistry.azurecr.io/applied-llm:latest

# Login to ACR
az acr login --name appliedllmregistry

# Push image
docker push appliedllmregistry.azurecr.io/applied-llm:latest
```

### 3. Deploy Container App

```bash
# Create Container Apps environment
az containerapp env create \
  --name applied-llm-env \
  --resource-group applied-llm-rg \
  --location eastus

# Deploy container app
az containerapp create \
  --name applied-llm-app \
  --resource-group applied-llm-rg \
  --environment applied-llm-env \
  --image appliedllmregistry.azurecr.io/applied-llm:latest \
  --target-port 3000 \
  --ingress external \
  --registry-server appliedllmregistry.azurecr.io
```

### 4. Set Up Database

```bash
# Create PostgreSQL server
az postgres flexible-server create \
  --resource-group applied-llm-rg \
  --name applied-llm-db \
  --location eastus \
  --admin-user dbadmin \
  --admin-password YourSecurePassword123! \
  --sku-name Standard_B1ms \
  --version 16
```

### 5. Configure Environment Variables

```bash
az containerapp update \
  --name applied-llm-app \
  --resource-group applied-llm-rg \
  --set-env-vars \
    OPENAI_API_KEY=your-key \
    DATABASE_URL=postgresql://dbadmin:password@applied-llm-db.postgres.database.azure.com/postgres
```

## 🔧 Configuration

### Environment Variables

Required:
- `OPENAI_API_KEY` - OpenAI API key
- `DATABASE_URL` - PostgreSQL connection string

Optional:
- `TAVILY_API_KEY` - For ReAct search agent
- `NEO4J_URI` - For graph database features
- `QDRANT_URL` - For vector search features

### Scaling Configuration

```bash
# Configure auto-scaling
az containerapp update \
  --name applied-llm-app \
  --resource-group applied-llm-rg \
  --min-replicas 1 \
  --max-replicas 10
```

## 📊 Monitoring

### View Logs

```bash
# Stream logs
az containerapp logs show \
  --name applied-llm-app \
  --resource-group applied-llm-rg \
  --follow

# View metrics
az monitor metrics list \
  --resource applied-llm-app \
  --metric-names Requests
```

### Application Insights

Enable Application Insights for detailed monitoring:
```bash
az containerapp update \
  --name applied-llm-app \
  --resource-group applied-llm-rg \
  --enable-app-insights true
```

## 🔐 Security

### Enable Managed Identity

```bash
az containerapp identity assign \
  --name applied-llm-app \
  --resource-group applied-llm-rg \
  --system-assigned
```

### Configure Firewall Rules

```bash
# Allow Azure services
az postgres flexible-server firewall-rule create \
  --resource-group applied-llm-rg \
  --name applied-llm-db \
  --rule-name AllowAzureServices \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 0.0.0.0
```

## 💰 Cost Optimization

- Use **Basic tier** for development/testing
- Enable **auto-scaling** to scale down during low usage
- Use **spot instances** where appropriate
- Set up **budget alerts**

## 🆘 Troubleshooting

### Container Won't Start

Check logs:
```bash
az containerapp logs show --name applied-llm-app --resource-group applied-llm-rg
```

### Database Connection Failed

1. Check firewall rules
2. Verify connection string
3. Test connectivity from container

### Image Pull Failed

```bash
# Check registry credentials
az acr credential show --name appliedllmregistry
```

## 📖 Additional Resources

For complete deployment instructions, see:
- **[Azure Deployment Templates](../../azure/)** - ARM templates and configuration
- **[Azure Container Apps Documentation](https://learn.microsoft.com/en-us/azure/container-apps/)**
- **[Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/)**

## 🔄 CI/CD Integration

Set up automated deployments using GitHub Actions:
- See `.github/workflows/azure-deploy.yml` (if exists)
- Configure secrets in GitHub repository settings
- Enable auto-deploy on push to main branch
