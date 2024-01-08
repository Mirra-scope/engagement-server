import { MigrationInterface, QueryRunner } from 'typeorm';

export class Review1704638308359 implements MigrationInterface {
  name = 'Review1704638308359';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`review\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`rating\` decimal(3,1) NOT NULL DEFAULT '0.0', \`comment\` text NOT NULL, \`user_id\` varchar(255) NOT NULL, \`context_id\` varchar(255) NOT NULL, \`context_type\` varchar(255) NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`review\``);
  }
}
