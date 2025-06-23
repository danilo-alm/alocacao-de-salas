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
    id: faker.number.int({ min: 1, max: 1000 }),
    codigo:
      faker.helpers.arrayElement(['LAB', 'SALA', 'AUD']) +
      '-' +
      faker.number.int({ min: 1, max: 999 }),
    tipo_id: tipoSala.id,
    tipo: tipoSala,
    bloco_id: bloco.id,
    bloco: bloco,
    capacidade: faker.number.int({ min: 20, max: 100 }),
    alocacoes: [],
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
    ...overrides,
  };
}
