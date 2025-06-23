import { Prisma } from 'src/generated/prisma/client';

export const salaBaseSelect: Prisma.salaSelect = {
  id: true,
  codigo: true,
  capacidade: true,
};
