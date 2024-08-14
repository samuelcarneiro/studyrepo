==**Cada linha da tabela é um Registro/TUPLA**==
#### Criar tabelas...
```sql
CREATE TABLE <nome-da-tabela> (
	nome VARCHAR(30),
	idade tinyint(3),
	sexo char(1),
	peso float,
	altura float,
	nacionalidade VARCHAR(20)
);
```

**Mais detalhada:**
```sql
CREATE TABLE <nome-da-tabela> (
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(30) NOT NULL,
	nascimento DATE,
	sexo enum('m', 'f') NOT NULL,
	peso decimal(5,2) NOT NULL,
	altura decimal(3,2) NOT NULL,
	nacionalidade VARCHAR(20) DEFAULT 'Brasil',
	PRIMARY KEY (id)
);
```

```sql
CREATE TABLE IF NOT EXISTS cursos (
	id_curso INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(30) NOT NULL UNIQUE,
	descricao TEXT,
	carga INT UNSIGNED,
	total_aulas INT,
	ano YEAR DEFAULT '2024',
	PRIMAEY KEY (id_curso)
) default charser=utf8;
```

#### Apagar tabela...
```sql
DROP TABLE IF NOT EXISTS <nome-da-tabela>;
```

#### Mostrar tabelas de um banco de dados...
```sql
SHOW TABLES;
```
#### Mostrar campos de uma tabela...
```sql
DESCRIBE <nome-da-tabela>;
```
#### Renomeando a tabela...
```sql
ALTER TABLE pessoas RENAME TO alunos;
```