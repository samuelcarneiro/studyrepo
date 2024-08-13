- Estrutuda de **dados imutável** e ordenada.
- **Os elementos não podem ser alterados, eliminados ou inseridos mais dados na tupla já criada**
- Permite armazenar uma coleção de elementos.
- Úteis para armazenar uma coleção de elementos que não vão ser alterados, como coordenadas ou dados de configurações.

## Criação
```python
ponto = (3, 4)
```
## Acessando os elementos de uma tupla
```python
print(ponto[0]) # Imprime: 3
print(ponto[1]) # Imprime: 4
```
## Métodos de tuplas
- **count(elemento):** *devolve o número de vezes que um elemento aparece na tupla*
- **index(elemento):** *devolve o índice da primeira aparição de um elemento da tupla. Pode-se especificar o início e fim da busca*
- **len(tupla):** *incorpora devolve o comprimeito da tupla*
```python
minha_tupla = (1, 2, 3, 2, 4, 2)

print(minha_tupla.index(2)) # Saída: 1
print(minha_tupla.index(2, 2)) # Saída: 3
print(minha_tupla(2, 2, 4)) # Saída: 3 (tamanho da tupla)
```