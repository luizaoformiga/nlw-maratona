/* USUARIOS */
SELECT * FROM "information_schema"."tables" 
WHERE "table_schema" = current_schema() 
AND "table_name" = 'migrations'

CREATE TABLE "migrations" (
    "id" SERIAL NOT NULL, 
    "timestamp" bigint NOT NULL, 
    "name" character varying NOT NULL, CONSTRAINT 
    "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id")
)

SELECT * FROM "migrations" "migrations"  
ORDER BY "id" DESC


