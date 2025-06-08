import { faker } from '@faker-js/faker';

import { DisciplinaEntity } from '../../src/disciplina/disciplina.entity';

export function createMockDisciplina(
  overrides: Partial<DisciplinaEntity> = {},
): DisciplinaEntity {
  return {
    Id: faker.number.int({ min: 1, max: 1000 }),
    Nome: faker.helpers.arrayElement([
      'Matemática',
      'Física',
      'Química',
      'Biologia',
      'História',
      'Geografia',
      'Português',
      'Inglês',
      'Programação',
      'Banco de Dados',
    ]),
    Alocacoes: [],
    ...overrides,
  };
}
