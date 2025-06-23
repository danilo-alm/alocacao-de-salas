import { Prisma } from 'src/generated/prisma/client';
import { tipoSalaBaseSelect } from 'src/tipo-sala/select/tipo-sala-base-select';

import { salaBaseSelect } from './sala-base-select';

export const salaWithTipoSelect: Prisma.salaSelect = {
  ...salaBaseSelect,
  tipo: { select: tipoSalaBaseSelect },
};
