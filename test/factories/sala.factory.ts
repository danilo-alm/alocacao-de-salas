import { faker } from '@faker-js/faker';

import { SalaEntity } from '../../src/sala/sala.entity';
import { createMockBloco } from './bloco.factory';
import { createMockTipoSala } from './tipo-sala.factory';

export function createMockSala(
  overrides: Partial<SalaEntity> = {},
): SalaEntity {
  const bloco = createMockBloco();
  const tipoSala = createMockTipoSala();

  return {
    Id: faker.number.int({ min: 1, max: 1000 }),
    Codigo:
      faker.helpers.arrayElement(['LAB', 'SALA', 'AUD']) +
      '-' +
      faker.number.int({ min: 1, max: 999 }),
    TipoId: tipoSala.Id,
    Tipo: tipoSala,
    BlocoId: bloco.Id,
    Bloco: bloco,
    Capacidade: faker.number.int({ min: 20, max: 100 }),
    Alocacoes: [],
    CreatedAt: faker.date.past(),
    UpdatedAt: faker.date.recent(),
    ...overrides,
  };
}
