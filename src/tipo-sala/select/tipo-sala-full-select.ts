import { Prisma } from 'src/generated/prisma/client';
import { salaWithBlocoSelect } from 'src/sala/select/sala-with-bloco-select';

import { tipoSalaBaseSelect } from './tipo-sala-base-select';

export const tipoSalaFullSelect: Prisma.tipo_salaSelect = {
  ...tipoSalaBaseSelect,
  salas: { select: salaWithBlocoSelect },
};
