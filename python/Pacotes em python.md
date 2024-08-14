- Agrupa módulos relacionados para evitar conflitos de nomes entre os módulos

## Criar e utilizar pacotes
- Criar um diretório ao qual ficará guardados os arquivos do pacote
- **__init__.py** -> arquivo que pode estar vazio ou com o código de inicialização do pacote
```python
# Diretório/Pasta
meu_pacote/
	__init__.py
	modulo1.py
	modulo2.py
```

- Importar e utilizar os módulos do pacote
```python
from meu_pacote import modulo1, modulo2

modulo1.funcao1() # Utilizará a função1 que está dentro do módulo1
modulo2.funcao2() # Utilizará a função2 que está dentro do módulo2
```