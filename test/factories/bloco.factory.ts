import { faker } from '@faker-js/faker';

import { BlocoEntity } from '../../src/bloco/bloco.entity';

export function createMockBloco(
  overrides: Partial<BlocoEntity> = {},
): BlocoEntity {
  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    nome: faker.location.buildingNumber(),
    salas: [],
    ...overrides,
  };
}
