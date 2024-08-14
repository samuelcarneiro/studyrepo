- **MÓDULO** -> Arquivo que contém definições de funções, classes e variáveis que podem ser utilizadas em outros programas.

> Python vem com uma ampla biblioteca de módulos que fornecem funcionalidades adicionais.
> Estão disponíveis sem a necessidade de instalá-los separadamente.

## Importar módulos
```python
import math # importará TODA a biblioteca Math
# OU
from math import sqrt # Importará a função específica sqrt da biblioteca math

resultado = math.sqrt(25)
print(resultado)

# Imprime: 5.0
```

## Funções e classes de módulos padrão
```python
import random
import datetime

numero_aleatorio = random.randint(1, 10)
print(numero_aleatorio)
# Imprime um número inteiro aleatório entre 1 e 10

data_atual = datetime.datetime.now()
print(data_atual)
# Imprime a data e hora atual
```

## Criar e utilizar módulos personalizados
- Criar um arquivo com o nome do módulo e definir as funções, classes e variáveis.
```python
#meu_modulo.py
def saudar(nome):
	print(f"Olá, {nome}!")

def calcular_soma(a, b):
	return a + b
```
- Importar o módulo criado para utilizar as funções dele em outro arquivo:
```python
# OUTRO ARQUIVO
import meu_modulo #Impirtanto o arquivo meu_modulo.py

meu_modulo.saudar("Samuel") # Imprime "Olá, Samuel!"

resultado = meu_modulo.calcular_soma(5, 3)
print(resultado) # Imprime 8
```

## Organização do código em módulos
```python
# operacoes.py  
def somar(a, b):  
    return a + b  

def subtrair(a, b):  
    return a - b  

# utilidades.py  
def imprimir_mensagem(mensagem):  
    print(mensagem)  

def obter_nome_usuario():  
    return input("Digite seu nome: ")
```

```python
import operacoes
import utilidades

resultado = operacoes.somar(5, 3)
utilidades.imprimir_mensagem(f"O resultado da soma é: {resultado}")

nome = utilidades.obter_nome_usuario()
utilidades.imṕrimir_mensagem(f"Olá, {nome}!")
```