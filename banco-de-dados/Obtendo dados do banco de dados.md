#### Selecionar todos os registro da tabela...
```sql
SELECT * FROM <nome-da-tabela>;
```
#### Selecionar tudo da tabela e ordenar pela coluna...
```sql
SELECT * FROM <nome-da-tabela> ORDER BY <nome-da-coluna>;
```
#### Selecionar tudo da tabela e ordenar de A a Z...
```sql
SELECT * FROM <nome-da-tabela> ORDER BY <nome-da-coluna> ASC;
```
#### Selecionar tudo da tabela e ordenar de Z a A...
```sql
SELECT * FROM <nome-da-tabela> ORDER BY <nome-da-coluna> DESC;
```
#### Selecionar somente as colunas indicadas...
```sql
SELECT <nome-da-coluna1>,<nome-da-coluna2> FROM <nome-da-tabela>;
```
#### Selecionar tudo da tabela onde o ano é 2018 e ordenar por nome...
```sql
SELECT * FROM <nome-da-tabela> WHERE ano='2018' ORDER BY name;
```
#### Selecionar os cursos registrados com o ano entre 2014 a 2016...
```sql
SELECT name,ano FROM cursos WHERE ano BETWEEN 2014 AND 2016;
```

#### Selecionar todos os cursos dos anos listados e ordenados pelo ano...
```sql
SELECT name,descricao,ano FROM cursos WHERE ano IN(2014,2016) ORDER BY ano;
```

#### Selecionar todos os cursos com carga horária maior que 35 e com o total de aulas menor que 30...
```sql
SELECT name,carga,total_aulas FROM cursos WHERE carga > 35 AND total_aulas < 30;
```

#### Selecionar todos os cursos onde o nome inicia com a letra 'P' seguido de qualquer coisa...
```sql
SELECT * FROM cursos WHERE name LIKE 'p%';
```

**'P%'** -> *Iniciado com a letra P*
**'%P'** -> *Terminadas com a letra P*
**'%P%'** -> *Possui a letra P em qualquer lugar*
**'%__silva%'** -> Busca por um nome que tenha 'silva' e tenha um espaço em branco antes do silva
#### Selecionar todos os registros da tabela, mesmo que a nacionalidade se repita...
```sql
SELECT nacionalidade FROM alunos;
/* Exemplo de saída: Portugal, Brasil, Portugal, Chile, Uruguai, Chile*/
```
#### Selecionar as nacionalidades informando somente uma vez mais de um registro com o mesmo resultado...
```sql
SELECT DISTINCT nacionalidade FROM alunos;
/* Exemplo de saída: Portugal, Brasil, Chile, Uruguai*/
```
#### Contar quantos registros tem na tabela...
```sql
SELECT count(*) FROM cursos;
```
#### Contar quantos cursos tem na tabela com a carga horária maior que 40h...
```sql
SELECT count(*) FROM cursos WHERE carga > 40;
```
#### Somar o total de aulas dos cursos de 2016...
```sql
SELECT sum(total_aulas) FROM cursos WHERE ano='2016';
```
#### Seleciona e agrupa os registros por carga...
```sql
SELECT carga FROM cursos GROUP BY carga;
```
#### Seleciona, agrupa e conta os registros agrupados...
```sql
SELECT carga COUNT(nome) FROM cursos GROUP BY carga;
```
#### Seleciona as cargas horárias dos cursos, agrupa contanto as ocorrências e mostrando somente a que tem ocorrência maior que 3...
```sql
SELECT carga COUNT(name) FROM cursos GROUP BY carga HAVING COUNT(name) > 3;
```