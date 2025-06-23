import { blocoBaseSelect } from 'src/bloco/select/bloco-base-select';
import { Prisma } from 'src/generated/prisma/client';

import { salaBaseSelect } from './sala-base-select';

export const salaWithBlocoSelect: Prisma.salaSelect = {
  ...salaBaseSelect,
  bloco: { select: blocoBaseSelect },
};
