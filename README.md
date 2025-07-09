# Alocação de Salas

> Still under development. Not meant to be used for now.

## Development

### Install appropriate dependencies

```bash
yarn install
```

### Database

Database should be started with:

```bash
docker compose up -d
cp .env.example .env  # or make your own
npx prisma generate
npx prisma migrate dev
npx prisma seed db
```

### Nest

Use the script:

```bash
yarn start:dev
```

### Swagger

Under `localhost:3000/docs` by default.

### License

No info yet.