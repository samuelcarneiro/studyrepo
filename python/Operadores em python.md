## Aritméticos
- **Soma (+)**
- **Subtração (-)** 
- **Multiplicação (\*)**
- **Divisão (/)**
- **Divisão inteira (//)** *Devolve o resultado sem a parte decimal, somente o número inteiro*
- **Módulo (%)** *Devolve o resto da divisão*
- **Exponenciação (\*\*)** *Eleva o primeiro valor à potẽncia do segundo*

```python
a = 10
b = 3

soma = a + b #resultado: 13
subtracao = a - b #resultado: 7
multiplicacao = a * b #resultado: 30
divisao = a / b #resultado: 3.33333333
divisao_inteira = a // b #resultado: 3
modulo = a % b #resultado: 1
exponenciacao = a ** b #resultado: 1000
```

## Comparação
- **igual a (=\=)** *Devolve True se ambos os valores são iguais*
- **Diferente de (!=)** *Devolve True se os valores são diferentes*
- **Maior que (>)** *Devolte True se o primeiro valor é maior que o segundo*
- **Menor que (<)** *Devolve True se o primeiro valor é menor que o segundo*
- **Maior ou igual que (>=)** *Devolve True se o primeiro valor é maior ou igual ao segundo valor*
- **Menor ou igual que (<=)** *Devolve True se o primeiro valor é menor ou igual ao segundo*

```python
a = 10
b = 3

igual = a == b #resultado: False
diferente = a != b #resultado: True
maior_que = a > b #resultado: True
menor_que = a < b #resultado: False
maior_ou_igual = a >= b #resultado: True
menor_ou_igual = a <= b #resultado: False
```

## Lógicos
- **AND (and)** *Devolve True se ambas as condições são verdadeiras*
- **OR (or)** *Devolve True se ao menos uma das condição são verdadeiras*
- **NOT (not)** *Inverte o valor da condição - Se True -> False, se False -> True*

```python
a = 10
b = 3

resultado_and = (a > 5) and (b < 5) #resultado: True
resultado_or = (a > 15) or (b < 5) #resultado: True
resultado_not = not(a > 5) #resultado: False
```


>Python segue as regras de precedência de operadores, onde certos operadores têm prioridade sobre outros. Em geral, a precedência segue a ordem: parênteses, exponenciação, multiplicação/divisão, soma/subtração, operadores de comparação e operadores lógicos.