import { alocacaoWithDisciplinaSelect } from 'src/alocacao/select/alocacao-with-disciplina-select';
import { Prisma } from 'src/generated/prisma/client';

import { salaWithTipoAndBlocoSelect } from './sala-with-tipo-and-bloco-select';

export const salaFullSelect: Prisma.salaSelect = {
  ...salaWithTipoAndBlocoSelect,
  alocacoes: { select: alocacaoWithDisciplinaSelect },
};
