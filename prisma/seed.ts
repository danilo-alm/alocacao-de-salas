import { PrismaClient } from '../src/generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tiposSala = ['Sala de Aula', 'Laboratório'];
  const blocos = [
    'Bloco A',
    'Bloco B',
    'Bloco C',
    'Bloco das Coordenações',
    'NCEX',
  ];

  for (const nome of tiposSala) {
    await prisma.tipoSala.upsert({
      where: { Nome: nome },
      update: {},
      create: { Nome: nome },
    });
    console.info('Seeding TipoSala:', nome);
  }

  for (const nome of blocos) {
    await prisma.bloco.upsert({
      where: { Nome: nome },
      update: {},
      create: { Nome: nome },
    });
    console.info('Seeding Bloco:', nome);
  }

  console.info('Finalizado o seeding do banco de dados');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
