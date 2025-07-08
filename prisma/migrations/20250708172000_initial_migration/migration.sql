-- CreateTable
CREATE TABLE `tipo_sala` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tipo_sala_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bloco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `bloco_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sala` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(191) NOT NULL,
    `tipo_id` INTEGER NOT NULL,
    `bloco_id` INTEGER NOT NULL,
    `capacidade` INTEGER NOT NULL,
    `created_at` TIMESTAMP(2) NOT NULL DEFAULT CURRENT_TIMESTAMP(2),
    `updated_at` TIMESTAMP(2) NOT NULL,

    UNIQUE INDEX `sala_codigo_key`(`codigo`),
    INDEX `sala_tipo_id_idx`(`tipo_id`),
    INDEX `sala_bloco_id_idx`(`bloco_id`),
    INDEX `sala_capacidade_idx`(`capacidade`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disciplina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `disciplina_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alocacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATE NULL,
    `dia_da_semana` TINYINT NOT NULL,
    `hora_inicio` VARCHAR(191) NOT NULL,
    `hora_fim` VARCHAR(191) NOT NULL,
    `sala_id` INTEGER NOT NULL,
    `disciplina_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(2) NOT NULL DEFAULT CURRENT_TIMESTAMP(2),
    `updated_at` TIMESTAMP(2) NOT NULL,
    `deleted_at` TIMESTAMP(2) NULL,

    INDEX `alocacao_disciplina_id_idx`(`disciplina_id`),
    UNIQUE INDEX `alocacao_sala_id_data_hora_inicio_hora_fim_deleted_at_key`(`sala_id`, `data`, `hora_inicio`, `hora_fim`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sala` ADD CONSTRAINT `sala_tipo_id_fkey` FOREIGN KEY (`tipo_id`) REFERENCES `tipo_sala`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sala` ADD CONSTRAINT `sala_bloco_id_fkey` FOREIGN KEY (`bloco_id`) REFERENCES `bloco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alocacao` ADD CONSTRAINT `alocacao_sala_id_fkey` FOREIGN KEY (`sala_id`) REFERENCES `sala`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alocacao` ADD CONSTRAINT `alocacao_disciplina_id_fkey` FOREIGN KEY (`disciplina_id`) REFERENCES `disciplina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
