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
    Id: faker.number.int({ min: 1, max: 1000 }),
    Data: date,
    DiaDaSemana: date.getDay(),
    HoraInicio: '08:00',
    HoraFim: '10:00',
    DisciplinaId: disciplina.Id,
    Disciplina: disciplina,
    SalaId: sala.Id,
    Sala: sala,
    CreatedAt: faker.date.past(),
    UpdatedAt: faker.date.recent(),
    DeletedAt: undefined,
    ...overrides,
  };
}
