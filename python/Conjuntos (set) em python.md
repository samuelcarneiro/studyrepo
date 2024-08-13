- Estrutura de dados **mutável** e não ordenada
- Permite armazenar uma coleção de elementos únicos.
- **Suportam operações matemáticas de conjuntos**
	- União (|)
	- Interseção (&)
	- Diferença (-)
	- Diferença simétrica (^)

## Criação
```python
frutas = {"maça", "banana", "laranja"}
numeros = set([1, 2, 3, 4, 5])
```

## Operações
```python
conjunto1 = {1, 2 ,3}
conjunto2 = {3, 4, 5}

uniao = conjunto1 | conjunto2
print(uniao)
# Resultado: {1, 2, 3, 4, 5}

intersecao = conjunto1 & conjunto2
print(intersecao)
# Resultado: {3}

diferenca = conjunto1 - conjunto2
print(diferenca)
# Resultado: {1, 2}

diferenca_simetrica = conjundo1 ^ conjunto2
print(diferenca_simetrica)
# Resultado: {1, 2, 4, 5}
```

## Métodos
- **add(elemento):** *adiciona um elemento ao conjunto*
- **remove(elemento):** *remove um elemento do conjunto - se o elemento não existir, gera erro*
- **discard(elemento):** *remove um elemento do conjunto se estiver presente - se o elemento não existir, não faz nada*
- **clear():**  *remove todos os elementos do conjunto*

```python
frutas = {"maça", "banana", "laranja"}

frutas.add("pera")
print(frutas) # Imprime: {"maça", "banana", "laranja", "pera"}

frutas.remove("banana")
print(frutas)  # Imprime: {"maça", "laranja", "pera"}

frutas.discard("uva")
print(frutas) # Imprime: {"maça", "laranja", "pera"}

frutas.clear()
print(frutas) # Imprime: set()
```

>  [[Listas em python]] (LISTAS )são úteis para coleções ordenadas e mutáveis

> [[Tuplas em python]] para coleções ordenadas e imutáveis

> [[Dicionários em python]] para armazenar pares de chave e valor

> [[Conjuntos (set) em python]] para coleções não ordenadas de elementos únicos