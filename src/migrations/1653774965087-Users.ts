import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1653774965087 implements MigrationInterface {
  name = 'Users1653774965087';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "user" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "version" integer NOT NULL,
            "firstName" character varying(64) NOT NULL,
            "lastName" character varying(64) NOT NULL,
            "patronymic" character varying(64),
            CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
