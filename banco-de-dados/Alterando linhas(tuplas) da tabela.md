#### Modificando linhas incorretas...
```sql
UPDATE pessoas SET name='HTML5' WHERE id_curso='1';
# Alterando o o atributo name para HTML5

```

```sql
UPDATE pessoas SET name='PHP', ano='2024' WHERE id_curso='4';
/* Alterando o o atributo name para PHP e o ano para 2024 */
```

```sql
UPDATE cursos SET name='Java',carga='40',ano='2024' WHERE id_curso='5' LIMIT=1;
/* Alterando o atributo name para Java, a carga para 40 e o ano para 2024 do curso de id = 5 */
```

#### Apagando uma linha da tabela
```sql
DELETE FROM cursos WHERE id_curso='1';
/* Apagará a linha/tupla de ID = 1 */
```