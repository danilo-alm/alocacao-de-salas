import { Prisma } from 'src/generated/prisma/client';

export const disciplinaBaseSelect: Prisma.disciplinaSelect = {
  id: true,
  nome: true,
};
