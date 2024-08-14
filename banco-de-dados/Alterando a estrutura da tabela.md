#### Adicionar uma coluna no final da tabela...
```sql
ALTER TABLE pessoas ADD COLUMN profissao VARCHAR(10);
```
#### Remover uma coluna da tabela...
```sql
ALTER TABLE pessoas DROP COLUMN profissao;
```
#### Escolhendo a posição da coluna...
```sql
ALTER TABLE pessoas ADD COLUMN profissao VARCHAR(10) AFTER nome;
```
#### Adicionando na primeira opção...
```sql
ALTER TABLE pessoas ADD COLUMN codigo INT FIRST;
```
#### Alterando a estrutura da coluna...
```sql
ALTER TABLE pessoas MODIFY COLUMN profissao VARCHAR(20) NOT NULL DEFAULT '';
```
#### Renomeando uma coluna...
```sql
ALTER TABLE pessoas CHANGE COLUMN profissao prof VARCHAR(20) NOT NULL DEFAULT '';
```