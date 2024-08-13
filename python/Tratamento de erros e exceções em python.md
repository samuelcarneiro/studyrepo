## Erros comuns em Python

### Erro de sintaxe (SyntaxError)
- Ocorre quando o código não segue as regras de sintaxe do Python
```python
def minha_funcao()
	print("Olá")
# SYNTAXERROR -> Faltam os 'dois pontos' depois dos ()
```

### Erro de nome (NameError)
- Ocorre quando se faz referência a uma variável ou função que não foi definida
```python
print(variavel_nao_definida)
```

### Erro de tipo (TypeError)
- Ocorre quando se realiza uma operação com tipos de dados incompatíveis, como tentar somar um número com uma string
```python
resultado = 5 + "10"
```

### Erro de índice (IndexError)
- Ocorre quando se tenta acessar um índice fora do intervalo válido de uma lista ou sequência
```python
lista = [1, 2, 3]
print(lista[3])
# INDEXERROR -> O índice 3 está fora do intervalo
```
