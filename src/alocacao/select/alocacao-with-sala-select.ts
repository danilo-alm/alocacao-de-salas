import { Prisma } from 'src/generated/prisma/client';
import { salaWithTipoAndBlocoSelect } from 'src/sala/select/sala-with-tipo-and-bloco-select';

import { alocacaoBaseSelect } from './alocacao-base-select';

export const alocacaoWithSalaSelect: Prisma.alocacaoSelect = {
  ...alocacaoBaseSelect,
  sala: { select: salaWithTipoAndBlocoSelect },
};
