- Para criar uma exceção personalizada, você deve criar uma classe que herde da classe base Exception ou de uma de suas subclasses
```python
def funcao():
	# Código que pode gerar uma exceção personalizada
	if condicao:
		raise Exception("Descrição do erro")

try:
	funcao()
except Exception as e:
	print(f"Erro: {str(e)}")
```
*Define-se uma função chamada funcao(). Dentro da função, verifica-se se uma condição e, se for satisfeita, gera-se uma exceção utilizando a declaração raise.*


> Considere os possíveis erros que podem ocorrer no seu código e utilize o tratamento de exceções adequado para lidar com eles de maneira apropriada. Isso tornará seus programas mais robustos e confiáveis.