# Alocação de Salas

> Still under development. Not meant to be used for now.

## Development

### Containers

You can use `compose.yml` to test the application.

```bash
docker compose up --build
```

### Development (Locally)

You need mariadb as your database.

```bash
docker compose -f db.compose.yml up -d  # mariadb
cp .env.example .env  # or make your own
npx prisma generate
npx prisma migrate dev
npx prisma seed db
yarn start
```

### Swagger

Under `localhost:3000/docs` by default.