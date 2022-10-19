import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1666204509394 implements MigrationInterface {
  name = 'CreateUserTable1666204509394';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(50) NOT NULL, \`creationDate\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`article\``);
  }
}
