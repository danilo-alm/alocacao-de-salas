# Alocação de Salas

> Still under development. Not meant to be used for now.

## Running

You can use `compose.yml` to run the app.

```bash
docker compose up --build
```

## Development

You will need mariadb as your database. It's easier to use docker:

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