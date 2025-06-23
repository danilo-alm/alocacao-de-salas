import { faker } from '@faker-js/faker';

import { AlocacaoEntity } from '../../src/alocacao/alocacao.entity';
import { createMockDisciplina } from './disciplina.factory';
import { createMockSala } from './sala.factory';

export function createMockAlocacao(
  overrides: Partial<AlocacaoEntity> = {},
): AlocacaoEntity {
  const disciplina = createMockDisciplina();
  const sala = createMockSala();
  const date = faker.date.future();

  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    data: date,
    dia_da_semana: date.getDay(),
    hora_inicio: '08:00',
    hora_fim: '10:00',
    disciplina_id: disciplina.id,
    disciplina: disciplina,
    sala_id: sala.id,
    sala: sala,
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
    deleted_at: null,
    ...overrides,
  };
}
