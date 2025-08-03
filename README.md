# Alocação de Salas

> Still under development. Not meant to be used for now.

## Development

### Containers

You can use `compose.yml` to test the application or `compose.dev.yml` if you like to develop on containers.

```bash
docker compose up --build  # test
docker compose -f compose.dev.yml up --build  # develop
```

### Locally

For local development, I recommend using Docker at least for the database (mariadb).

```bash
docker compose -f compose.dev.yml up db -d
cp .env.example .env  # or make your own
npx prisma generate
npx prisma migrate dev
npx prisma seed db
```

### Swagger

Under `localhost:3000/docs` by default.