## Estruturas condicionais
- Remete à condição verdadeiro ou falso.
- Permite executar diferentes blocos de código segundo se cumpra ou não uma determinada condição.
- IF, IF-ELSE ou IF-ELIF-ELSE

### IF
- Utilizada para executar um bloco de código se uma condição for verdadeira.
```python
if condicao
	# Bloco de código a executar se a condição for verdadeira
	instrucoes
```

```python
idade = 18

if idade >= 18:
	print("Você é marior de idade.")
```

- Posso utilizar IF duas ou mais vezes, exemplo:
```python
idade = 15

if idade >= 18:
	print("Você é maior de idade!")
if idade < 18:
	print("Você é menor de idade")

#resultado: retornará o print da segunda condição
```

### IF-ELSE
- Permite especificar um bloco de código alternativo caso a condição seja Falsa.
```python
idade = 15

if idade >= 18:
	print("Você é maior de idade!")
else:
	print("Você não é maior de idade!")

# Resultado: retornará o print do else
```

### IF-ELIF-ELSE
- Múltiplas condições
```python
nota = 85

if nota >= 90:
	print("Excelente!")
elif nota >= 80:
	print("Muito bom!")
elif nota >= 70:
	print("Bom!")
else:
	print("Precisa melhorar!")

# Resultado: Muito bom!
```
