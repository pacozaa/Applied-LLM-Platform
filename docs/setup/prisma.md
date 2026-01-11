# Setting Up Prisma with PostgreSQL

This project uses Prisma ORM with PostgreSQL as the database. Here's how to set it up and interact with it.

## 📋 Prerequisites

- Docker Desktop (for PostgreSQL)
- Node.js and npm installed

## 🚀 Initial Setup

### 1. Set up PostgreSQL Locally

Follow the **[PostgreSQL Setup Guide](./postgresql.md)** to run PostgreSQL using Docker.

### 2. Configure Environment Variables

Add to your `.env` file:
```bash
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/playground"
```

### 3. Initialize Prisma

The database schema is defined in `prisma/schema.prisma`. To initialize:

```bash
# Generate Prisma Client
npx prisma generate

# Apply migrations to database
npx prisma migrate dev
```

This will:
- Create a new migration file
- Apply the migration to your database
- Generate the Prisma Client

## 🔧 Common Prisma Commands

### Database Migrations

```bash
# Create and apply a new migration
npx prisma migrate dev

# Apply migrations in production
npx prisma migrate deploy

# Reset database (WARNING: deletes all data)
npx prisma migrate reset
```

### Database Management

```bash
# Push schema changes without migrations (for prototyping)
npx prisma db push

# Seed the database
npx prisma db seed

# Reset and seed
npm run prisma:db:fresh
```

### Prisma Client

```bash
# Generate Prisma Client after schema changes
npx prisma generate
```

## 🎨 Using Prisma Studio

Prisma Studio is a visual database editor for your data.

### Launch Prisma Studio

```bash
npx prisma studio
# or
npm run prisma:studio
```

### Access the Interface

Open your browser and navigate to: [http://localhost:5555](http://localhost:5555)

### What You'll See

When Prisma Studio opens, you should see:
- ✅ All your defined models listed in the left sidebar
- 📝 Empty tables if this is a fresh setup
- ➕ Ability to add, edit, and delete records directly through the interface
- 🔄 Real-time updates as you modify the data

## 📁 Project Structure

```
prisma/
├── schema.prisma    # Database schema definition
├── migrations/      # Migration history
└── seed.js          # Database seeding script
```

## 🆘 Troubleshooting

### "Can't reach database server"

**Solution**: Make sure PostgreSQL is running
```bash
docker ps | grep postgres
# If not running:
docker start postgres
```

### "Error: P1001: Can't reach database server"

**Solution**: Check your DATABASE_URL in `.env`
```bash
# Format:
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

### Migration Failed

**Solution**: Reset and try again
```bash
npx prisma migrate reset
npx prisma migrate dev
```

### Type Errors After Schema Changes

**Solution**: Regenerate Prisma Client
```bash
npx prisma generate
```

### Want to Start Fresh?

```bash
# Reset database, regenerate client, and seed
npm run prisma:db:fresh
```

## 📖 Additional Resources

For detailed Prisma commands and workflows, see the **[Complete Prisma Guide](../archived/PRISMA_Guide.md)**.

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Prisma Client API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
