## Try
- O bloco **Try** contém o código que pode gerar uma exceção
- Se ocorrer uma exceção dentro do bloco **try** o fluxo de execução é transferido para o bloco **except**
```python
try:
	# Código que pode gerar uma exceção
	resultado = 10 / 0
	print(resultado)
except:
	print("Erro: Divisão por zero")
```

## Except
- Você pode ter vários blocos **except** para lidar com diferentes tipos de exceções
```python
try:
	# Código que pode gerar uma exceção
	resultado = 10 / 0
	print(resultado)
except:
	print("Erro: Divisão por zero")
except:
	print("Erro: Valor inválido!")
```

## Finally
- É opcional e é executado sempre, independentemente de ter ocorrido uma exceção ou não.
- Utilizado para realizar tarefas de limpeza ou liberação de recursos
```python
try:
	# Código que pode gerar exceção
	arquivo = open("arquivo.txt", "r")
	#Realizar operações com o arquivo
except FileNotFoundError:
	print("Erro: Arquivo não encontrado")
finally:
	arquivo.close()
	# Fecha o arquivo sempre, mesmo se ocorrer uma exceção
```