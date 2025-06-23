import { Prisma } from 'src/generated/prisma/client';

import { disciplinaBaseSelect } from '../../disciplina/select/disciplina-base-select';
import { alocacaoBaseSelect } from './alocacao-base-select';

export const alocacaoWithDisciplinaSelect: Prisma.alocacaoSelect = {
  ...alocacaoBaseSelect,
  disciplina: { select: disciplinaBaseSelect },
};
