import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { DomainExceptionFilter } from './common/filters/domain-exception.filter';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter(), new DomainExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Alocação de Salas API')
    .setDescription(
      'API para gerenciamento de alocação de salas em instituições de ensino',
    )
    .setVersion('1.0')
    .addTag('Alocação', 'Endpoints para gerenciamento de alocações')
    .addTag('Bloco', 'Endpoints para gerenciamento de blocos')
    .addTag('Curso', 'Endpoints para gerenciamento de cursos')
    .addTag('Disciplina', 'Endpoints para gerenciamento de disciplinas')
    .addTag('Sala', 'Endpoints para gerenciamento de salas')
    .addTag('Tipo de Sala', 'Endpoints para gerenciamento de tipos de sala')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then(() => {
    console.info('Servidor iniciado com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  });
