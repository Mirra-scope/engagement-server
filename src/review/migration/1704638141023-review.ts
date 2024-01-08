import { MigrationInterface, QueryRunner } from "typeorm";

export class Review1704638141023 implements MigrationInterface {
    name = 'Review1704638141023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`episode_id\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`series_id\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`movie_id\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`trailer_id\``);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`context_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`context_type\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`user_id\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`user_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`context_type\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`context_id\``);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`trailer_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`movie_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`series_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`episode_id\` varchar(36) NULL`);
    }

}
