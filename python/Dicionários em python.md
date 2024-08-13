- Estrutura de dados **mutável** e não ordenada.
- Permite armazenar pares de chave-valor.
- Cada elemento é uma chave única e seu valor correspondente.

## Criação
```python
pessoa = {"nome":"Samuel", "idade":"30", "cidade":"Feira de Santana"}
```
## Acessar os valores em um dicionário
```python
print(pessoa["nome"]) # Imprime "Samuel"
print(pessoa["idade"]) # Imprime 30
print(pessoa["cidade"]) # Imprime "Feira de Santana"
```

## Métodos
- **keys():** *retorna a visualização de todas as chaves do dicionário*
- **values():** *retorna uma visualização de todos os valores do dicionário*
- **items():** *retorna uma visualização de todos os pares chave-valor do dicionário*
- **update(outro_dicionario):** *atualiza o dicionário com os pares chave-valor de outro dicionário*

```python
pessoa = {"nome":"João", "idade":"25", "cidade":"Madri"}

print(pessoa.keys()) # Imprime: dict_keys(["nome", "idade", "cidade])
print(pessoa.values()) # Imprime: dict_values(["João", "25", "Madri"])
print(pessoa.items()) # Imprime: dict_items([("nome":"João", "idade":"25", "cidade":"Madri")])

pessoa.update({"profissao":"ENgenheiro"})
print(pessoa) # Imprime: {"nome":"João", "idade":"25", "cidade":"Madri", "profissao":"Engenheiro"}
```