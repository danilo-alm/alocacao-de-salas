-- CreateTable
CREATE TABLE `Curso` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(10) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `QuantidadeAlunos` INTEGER NOT NULL,
    `Turno` ENUM('MANHA', 'TARDE', 'MANHA_TARDE', 'NOITE') NOT NULL,

    UNIQUE INDEX `Curso_Codigo_key`(`Codigo`),
    INDEX `Curso_Turno_idx`(`Turno`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disciplina` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `PreferenciaTurno` ENUM('MANHA', 'TARDE', 'NOITE') NULL,
    `TipoSalaId` INTEGER NOT NULL,
    `CreatedAt` TIMESTAMP(2) NOT NULL DEFAULT CURRENT_TIMESTAMP(2),
    `UpdatedAt` TIMESTAMP(2) NOT NULL,

    UNIQUE INDEX `Disciplina_Codigo_key`(`Codigo`),
    INDEX `Disciplina_TipoSalaId_idx`(`TipoSalaId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sala` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(191) NOT NULL,
    `TipoId` INTEGER NOT NULL,
    `BlocoId` INTEGER NOT NULL,
    `Capacidade` INTEGER NOT NULL,
    `CreatedAt` TIMESTAMP(2) NOT NULL DEFAULT CURRENT_TIMESTAMP(2),
    `UpdatedAt` TIMESTAMP(2) NOT NULL,

    UNIQUE INDEX `Sala_Codigo_key`(`Codigo`),
    INDEX `Sala_TipoId_idx`(`TipoId`),
    INDEX `Sala_BlocoId_idx`(`BlocoId`),
    INDEX `Sala_Capacidade_idx`(`Capacidade`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoSala` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TipoSala_Nome_key`(`Nome`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bloco` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Bloco_Nome_key`(`Nome`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alocacao` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATE NULL,
    `HoraInicio` VARCHAR(191) NOT NULL,
    `HoraFim` VARCHAR(191) NOT NULL,
    `Fixa` BOOLEAN NOT NULL,
    `DisciplinaId` INTEGER NOT NULL,
    `SalaId` INTEGER NOT NULL,
    `CreatedAt` TIMESTAMP(2) NOT NULL DEFAULT CURRENT_TIMESTAMP(2),
    `UpdatedAt` TIMESTAMP(2) NOT NULL,
    `DeletedAt` TIMESTAMP(2) NULL,

    INDEX `Alocacao_DisciplinaId_idx`(`DisciplinaId`),
    INDEX `Alocacao_SalaId_idx`(`SalaId`),
    UNIQUE INDEX `Alocacao_SalaId_Data_HoraInicio_HoraFim_key`(`SalaId`, `Data`, `HoraInicio`, `HoraFim`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CursoToDisciplina` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CursoToDisciplina_AB_unique`(`A`, `B`),
    INDEX `_CursoToDisciplina_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Disciplina` ADD CONSTRAINT `Disciplina_TipoSalaId_fkey` FOREIGN KEY (`TipoSalaId`) REFERENCES `TipoSala`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sala` ADD CONSTRAINT `Sala_TipoId_fkey` FOREIGN KEY (`TipoId`) REFERENCES `TipoSala`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sala` ADD CONSTRAINT `Sala_BlocoId_fkey` FOREIGN KEY (`BlocoId`) REFERENCES `Bloco`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alocacao` ADD CONSTRAINT `Alocacao_DisciplinaId_fkey` FOREIGN KEY (`DisciplinaId`) REFERENCES `Disciplina`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alocacao` ADD CONSTRAINT `Alocacao_SalaId_fkey` FOREIGN KEY (`SalaId`) REFERENCES `Sala`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CursoToDisciplina` ADD CONSTRAINT `_CursoToDisciplina_A_fkey` FOREIGN KEY (`A`) REFERENCES `Curso`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CursoToDisciplina` ADD CONSTRAINT `_CursoToDisciplina_B_fkey` FOREIGN KEY (`B`) REFERENCES `Disciplina`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
