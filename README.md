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
docker run -e MARIADB_USER=user -e MARIADB_PASSWORD=secret -e MARIADB_DATABASE=alocacao_de_salas -e MARIADB_ROOT_PASSWORD=root -v alocacao-de-salas_db -n alocacao-de-salas-db -p 3456:3306 -d mariadb:11.7
cp .env.example .env  # or make your own
npx prisma generate
npx prisma migrate dev
npx prisma seed db
yarn start
```

### Swagger

Under `localhost:3000/docs` by default.