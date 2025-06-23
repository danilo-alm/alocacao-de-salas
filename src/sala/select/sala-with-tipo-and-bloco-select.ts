import { blocoBaseSelect } from 'src/bloco/select/bloco-base-select';
import { Prisma } from 'src/generated/prisma/client';

import { salaWithTipoSelect } from './sala-with-tipo-select';

export const salaWithTipoAndBlocoSelect: Prisma.salaSelect = {
  ...salaWithTipoSelect,
  bloco: { select: blocoBaseSelect },
};
