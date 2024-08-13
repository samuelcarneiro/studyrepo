## Listas
- Estrutura de dados mutável e ordenada.
- Permite o armazenamento de uma coleção de elementos.
- Pode ter diferentes tipos de dados.

### Criação e acesso
- Para criar uma lista:
```python
frutas = ["maça", "banana", "laranja"]
```
- Para acessar os elementos de uma lista:
```python
print(frutas[0]) # Resultado: "maça"
print(frutas[1]) # Resultado: "banana"
print(frutas[2]) # Resultado: "laranja"
```
- Pode-se acessar usando indices negativos - indicam o contrário da lista:
```python
print(frutas[-1]) # Resultado: "laranja"
print(frutas[-2]) # Resultado: "banana"
print(frutas[-3]) # Resultado: "maça"
```

### Métodos de lista
- **append(elemento):** *adiciona um elemento ao final da lista*
- **insert(indice, elemento):** *insere um elemento em uma posição específica da lista*
- **remove(elemento):** *remove a primeira ocorrência de um elemento na lista*
- **pop(indice):** *remove e retorna o elemento em uma posição específica da lista*
- **sort():** *ordena os elementos da lista em ordem ascentende (a->z)*
- **reverse():** *inverte a ordem dos elementos na lista (z->a)*

```python
frutas = ["maça", "banana", "laranja"]

frutas.append("pera")
print(frutas)
# Resultado: ["maça", "banana", "laranja", "pera"]

frutas.insert(1, "uva")
print(frutas)
# Resultado: ["maça", "uva", "banana", "laranja", "pera"]

frutas.remove("banana")
print(frutas)
# Resultado: ["maça", "uva", "laranja", "pera"]

fruta_removida = frutas.pop(2)
print(frutas) # Resultado: ["maça", "uva", "pera"]
print(fruta_removida) # Resultado: "laranja"

frutas.sort()
print(frutas)
# Resultado: ["maça", "pera", "uva"]

frutas.inverse()
print(frutas)
# Resultado: ["uva", "pera", "maça"]
```

### Lista de compreensão
```python
nova_lista = [expressao for elemento in sequencia if codigo]
```

```python
numeros = [1, 2, 3, 4, 5]
quadrados = [x ** 2 for x in numeros if x % 2 == 0]
print(quadrados)

# Resultado: [4, 16]
# Imprimiu o quadrado dos números pares

```