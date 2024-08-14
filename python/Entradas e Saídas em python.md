- Permite a interação com o usuário e manipulação de arquivos.
- Pode-se solicitar informações do usuário, mostrar resultados em tela, ler ou escrver dados em arquivos externos.

## Entradas de dados do usuário
```python
nome = input("Insira seu nome: ")
idade = input("Insira sua idade: ")

print("Olá, " + nome + "!")
print("Você tem " + idade + " anos")
```

```python
nome = input("Insira seu nome: ")
anoNascimento = input("Em que ano você nasceu? XXXX: ")

idade = 2024 - int(anoNascimento)

print("Olá, " + nome + "!")
print(f'Você tem {idade} anos')

```

> ==A função **input()** sempre retorna uma string==, para usar outros tipos de dados é necessário realizar a conversão explícita utilizando as funções **int()** ou **float()**

```python
idade = int(input("Insira sua idade: "))

if idade >= 18:
	print("Você é maior de idade.")
else:
	print("Você não é maior de idade")
```

## Saída de dados
- Podemos usar a **f-string** para inserir variáveis diretamente dentro de uma cadeia de texto
```python
nome = "Samuel"
idade = 29

print(f"Olá, meu nome é {nome} e tenho {idade} anos.")
```