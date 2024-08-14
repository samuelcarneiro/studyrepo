- Pode-se abrir arquivos em dferentes modos:
	- **leitura(r)**
	- **escrita(w)**
	- **anexar(a)**

## Leitura de arquivos
- Utiliza-se a função ***open()*** para abrir o arquivo em modo leitura.
- Utiliza-se a função ***read()*** ou ***readlines()*** para ler o conteúdo do arquivo
```python
arquivo = open("dados.txt", "r")
# O arquivo dados é aberto pela open() em modo leitura "r"
conteudo = arquivo.read()
# O conteúdo do arquivo é lido pela read() e armazena-o na variável conteúdo
print(conteudo)
arquivo.close()
# Arquivo é fechado utilizando o close()
```

> ==É importante fechar sempre os arquivos depois de utilizá-los para liberar recursos do sistema.==

```python
with open("dados.txt", "r") as arquivo:
	conteudo = arquivo.read()
	print(conteudo)
```
*Utilizando a declaração **with** para abrir e o arquivo é fechado de maneira automática.* 