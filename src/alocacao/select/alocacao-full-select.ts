import { Prisma } from 'src/generated/prisma/client';
import { salaWithTipoAndBlocoSelect } from 'src/sala/select/sala-with-tipo-and-bloco-select';

import { disciplinaBaseSelect } from '../../disciplina/select/disciplina-base-select';
import { alocacaoBaseSelect } from './alocacao-base-select';

export const alocacaoFullSelect: Prisma.alocacaoSelect = {
  ...alocacaoBaseSelect,
  disciplina: { select: disciplinaBaseSelect },
  sala: { select: salaWithTipoAndBlocoSelect },
};
