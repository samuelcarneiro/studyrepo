```sql
INSERT INTO <nome-da-tabela>
('campos', 'da', 'tabela', 'e', 'mantendo', 'a', 'mesma', 'sequencia')
VALUES
('valores', 'a', 'serem', 'inseridos', 'na', 'tabela');
```

- Se a ordem de inserção é a mesma ordem dos campos na tabela, não é preciso informar os campos da tabela no comando.
```sql
INSERT INTO <nome-da-tabela> VALUES
('valores', 'a', 'serem', 'inseridos', 'na', 'tabela');
```
