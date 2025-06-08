import { faker } from '@faker-js/faker';

import { BlocoEntity } from '../../src/bloco/bloco.entity';

export function createMockBloco(
  overrides: Partial<BlocoEntity> = {},
): BlocoEntity {
  return {
    Id: faker.number.int({ min: 1, max: 1000 }),
    Nome: faker.location.buildingNumber(),
    Salas: [],
    ...overrides,
  };
}
