import { faker } from '@faker-js/faker';

import { TipoSalaEntity } from '../../src/tipo-sala/tipo-sala.entity';

export function createMockTipoSala(
  overrides: Partial<TipoSalaEntity> = {},
): TipoSalaEntity {
  return {
    Id: faker.number.int({ min: 1, max: 1000 }),
    Nome: faker.helpers.arrayElement([
      'Laboratório',
      'Sala de Aula',
      'Auditório',
      'Sala de Reunião',
    ]),
    Salas: [],
    ...overrides,
  };
}
