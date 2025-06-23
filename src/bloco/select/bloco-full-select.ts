import { Prisma } from 'src/generated/prisma/client';
import { salaWithTipoSelect } from 'src/sala/select/sala-with-tipo-select';

import { blocoBaseSelect } from './bloco-base-select';

export const blocoFullSelect: Prisma.blocoSelect = {
  ...blocoBaseSelect,
  salas: { select: salaWithTipoSelect },
};
