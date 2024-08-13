- São blocos de código reutilizáveis que nos permite encapsular tarefas específicas e executá-las quando necessário.

## Definição e chamada de uma função
```python
#definição
def saudacao() :
	print("Olá, mundo!")

#chamada
saudacao() # Imprime "Olá, mundo!"
```

## Parâmetros e argumentos
```python
def saudacao(nome) :
	print(f"Olá, {nome}!")

# Ao chamar a função - fornecemos os argumentos referentes aos parâmetros
saudacao("João") # Imprime "Olá, João!"
saudacao("Maria") # Imprime "Olá, Maria!"
```

## Valores de retorno
```python
def soma(a, b)
	return a + b

resultado = soma(3, 4)
print(resultado) 
# Imprime 7
```

## Funções anônimas (lambda)
```python
quadrado = lambda x: x ** 2
print(quadrado(5))
# Imprime 25
```

## Escopo das variáveis (local vs. global)
```python
def funcao() :
	variavel_local = 10
	print(variavel_local)
	# Acessível dentro da função

variavel_global = 20

def funcao2() :
	print(variavel_global)
	# Acessível em qualquer lugar

funcao() # Imprime 10
funcao2() # Imprime 20
print(variavel_local) # Gera erro - A variável não está definida no escopo
print(variavel_global) # Imprime 20
```

## Documentação de funções (docstrings)
- É uma boa prática documentar nossas funções utilizando [[Docstrings]].
```python
def area_retangulo(base, altura) :
	"""
	Calcula a área de um retângulo
	Args:
		base (float) -> a base do retângulo
		altura (float) -> a altura do retângulo
	Returns:
		float -> a área do retângulo
	"""
return base * altura
```

## Funções com número variável de argumentos
- Permite definir funções com um número variável de argumentos.
- Utiliza o operador * antes do parâmetro.
```python
def soma_variavel(*numeros) :
	total = 0
	for numero in numeros :
		total += numero
	return total

print(soma_variavel(1, 2, 3)) # Imprime 6
print(soma_variavel(4, 5, 6, 7)) # Imprime 22
```