import { Prisma } from 'src/generated/prisma/client';
import { salaBaseSelect } from 'src/sala/select/sala-base-select';

import { alocacaoBaseSelect } from './alocacao-base-select';

export const AlocacaoWithSalaBaseSelect: Prisma.alocacaoSelect = {
  ...alocacaoBaseSelect,
  sala: { select: salaBaseSelect },
};
