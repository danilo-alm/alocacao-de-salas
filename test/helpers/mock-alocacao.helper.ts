import { faker } from '@faker-js/faker';

// Mock simples para AlocacaoEntity sem dependências circulares
export interface MockAlocacaoEntity {
  id: number;
  data: Date;
  dia_da_semana: number;
  hora_inicio: string;
  hora_fim: string;
  disciplina_id: number;
  sala_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
  disciplina?: {
    id: number;
    nome: string;
  };
  sala?: {
    id: number;
    codigo: string;
    capacidade: number;
  };
}

export function createSimpleMockAlocacao(
  overrides: Partial<MockAlocacaoEntity> = {},
): MockAlocacaoEntity {
  const date = faker.date.future();

  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    data: date,
    dia_da_semana: date.getDay(),
    hora_inicio: '08:00',
    hora_fim: '10:00',
    disciplina_id: faker.number.int({ min: 1, max: 100 }),
    sala_id: faker.number.int({ min: 1, max: 100 }),
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
    deleted_at: null,
    disciplina: {
      id: faker.number.int({ min: 1, max: 100 }),
      nome: faker.helpers.arrayElement([
        'Matemática',
        'Física',
        'Química',
        'Programação',
      ]),
    },
    sala: {
      id: faker.number.int({ min: 1, max: 100 }),
      codigo: 'LAB-' + faker.number.int({ min: 1, max: 999 }),
      capacidade: faker.number.int({ min: 20, max: 100 }),
    },
    ...overrides,
  };
}
