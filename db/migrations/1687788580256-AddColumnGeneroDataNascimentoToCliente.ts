import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnGeneroDataNascimentoToCliente1687788580256 implements MigrationInterface {
    name = 'AddColumnGeneroDataNascimentoToCliente1687788580256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "computadores" RENAME COLUMN "marca" TO "id_marca"`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "dataNascimento"`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "idnacionalidade"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "data_nascimento" date`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "genero"`);
        await queryRunner.query(`CREATE TYPE "public"."clientes_genero_enum" AS ENUM('F', 'M', 'I')`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "genero" "public"."clientes_genero_enum" DEFAULT 'I'`);
        await queryRunner.query(`ALTER TABLE "marcas" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "marcas" ADD "data" date`);
        await queryRunner.query(`ALTER TABLE "marcas" DROP COLUMN "contato"`);
        await queryRunner.query(`ALTER TABLE "marcas" ADD "contato" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "computadores" DROP COLUMN "id_marca"`);
        await queryRunner.query(`ALTER TABLE "computadores" ADD "id_marca" uuid`);
        await queryRunner.query(`ALTER TABLE "computadores" ADD CONSTRAINT "fk_marca" FOREIGN KEY ("id_marca") REFERENCES "marcas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "computadores" DROP CONSTRAINT "fk_marca"`);
        await queryRunner.query(`ALTER TABLE "computadores" DROP COLUMN "id_marca"`);
        await queryRunner.query(`ALTER TABLE "computadores" ADD "id_marca" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "marcas" DROP COLUMN "contato"`);
        await queryRunner.query(`ALTER TABLE "marcas" ADD "contato" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "marcas" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "marcas" ADD "data" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "genero"`);
        await queryRunner.query(`DROP TYPE "public"."clientes_genero_enum"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "genero" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "data_nascimento"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "idnacionalidade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "dataNascimento" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "computadores" RENAME COLUMN "id_marca" TO "marca"`);
    }

}
