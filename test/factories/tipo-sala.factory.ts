import { faker } from '@faker-js/faker';

import { TipoSalaEntity } from '../../src/tipo-sala/tipo-sala.entity';

export function createMockTipoSala(
  overrides: Partial<TipoSalaEntity> = {},
): TipoSalaEntity {
  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    nome: faker.helpers.arrayElement([
      'Laboratório',
      'Sala de Aula',
      'Auditório',
      'Sala de Reunião',
    ]),
    salas: [],
    ...overrides,
  };
}
