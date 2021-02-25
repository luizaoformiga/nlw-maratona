/* TABELAS SURVEYS */
SELECT * FROM "information_schema"."tables" 
WHERE "table_schema" = current_schema() 
AND "table_name" = 'migrations'

SELECT * FROM "migrations" "migrations"  
ORDER BY "id" DESC