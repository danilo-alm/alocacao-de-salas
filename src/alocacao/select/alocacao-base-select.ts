import { Prisma } from 'src/generated/prisma/client';

export const alocacaoBaseSelect: Prisma.alocacaoSelect = {
  id: true,
  data: true,
  dia_da_semana: true,
  hora_inicio: true,
  hora_fim: true,
};
