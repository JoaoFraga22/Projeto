import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCliente1687215818887 implements MigrationInterface {
    name = 'CreateCliente1687215818887'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "genero" character varying NOT NULL, "dataNascimento" character varying NOT NULL, "idnacionalidade" character varying NOT NULL, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "computadores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "descricao" character varying NOT NULL, "marca" character varying NOT NULL, "valor" integer NOT NULL, "garantia" integer NOT NULL, CONSTRAINT "PK_820c9f9523925d91eb05815a181" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "marcas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "sede" character varying NOT NULL, "data" character varying NOT NULL, "representante" character varying NOT NULL, "contato" integer NOT NULL, CONSTRAINT "PK_0dabf9ed9a15bfb634cb675f7d4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "marcas"`);
        await queryRunner.query(`DROP TABLE "computadores"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
