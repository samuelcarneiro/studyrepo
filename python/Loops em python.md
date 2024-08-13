- Permite repetir um bloco de código quantas vezes forem necessárias.
- Loops mais comuns em Python: `for`,`while`

### For
```python
for variavel in sequencia:
	# BLoco de código a repetir
	instrucoes
```

```python
frutas = ["maça", "banana", "laranja"]

for fruta in frutas:
	print(fruta)

"""
Resultado: 
maça
banana
laranja
"""
```

### While
```python
while condicao:
	# Bloco de código a repetir
	instrucoes
```

```python
contator = 0

while contator < 5:
	print(contator)
	contador++

"""
Resultado:
0
1
2
3
4


'enquanto contator for menor que 5 faça:
imprima o valor do contator
depois incremente +1 no valor do contator
o while parará quando o valor do contador atingir o valor 5'
"""

```

### Controle de loops
#### Break
- Interrompe o loop independentemente da condição.
- Quando um Break é encontrado o loop é interrompido e o fluxo de execução continua com a próxima instrução
```python
contador = 0

while True:
	print(contador)
	contador += 1

	if contador == 5:
		break
"""
Resultado:
Quando o valor do contador for igual a 5 a instrução break será ativada interrompendo o loop
"""
```

#### Continue
- Utilizada para pular o restante do código dentro de um loop
```python
for i in range(10):
	if i % 2 == 0:
		continue
	print(i)

"""
O loop rodará dos números 0 ao 9 utilizando a função range()
Dentro do loop ele verifica se o número é divisível por 2 (par) e a instrução é continue
fazendo com que o restante do bloco seja pulado.
Como resultado só os números impares serão impressos
1
3
5
7
9
"""
```

### Pass
- É uma operação **nula** que não faz nada.
- É utilizada com um marcador de posição.
- Faz-se útil quando se está desenvolvendo um programa e se deseja reservar um bloco de código para implementá-lo mais tarde.
```python
for i in range(5):
	pass
```


>As estruturas de controle são ferramentas poderosas que nos permitem controlar o fluxo de execução de nossos programas.

>Com as estruturas condicionais (IF, IF-ELSE, IF-ELIF-ELSE) podemos tomar decisões baseadas em condições.

>Com os loops (FOR, WHILE) podemos repetir blocos de códigos várias vezes.

>Com as instruções BREAK, CONTINUE e PASS podemos ter um controle adicional sobre o comportamento dos loops.