import { Prisma } from 'src/generated/prisma/client';

import { alocacaoWithDisciplinaSelect } from '../../alocacao/select/alocacao-with-disciplina-select';
import { disciplinaBaseSelect } from './disciplina-base-select';

export const disciplinaFullSelect: Prisma.disciplinaSelect = {
  ...disciplinaBaseSelect,
  ...alocacaoWithDisciplinaSelect,
};
