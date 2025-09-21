/*
  Warnings:

  - A unique constraint covering the columns `[nome,turma]` on the table `disciplina` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `disciplina_nome_key` ON `disciplina`;

-- AlterTable
ALTER TABLE `disciplina` ADD COLUMN `turma` VARCHAR(191) NOT NULL DEFAULT 'A';

-- CreateIndex
CREATE UNIQUE INDEX `disciplina_nome_turma_key` ON `disciplina`(`nome`, `turma`);
