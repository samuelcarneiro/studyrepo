- A programação de computadores é o ato de compor os elementos da linguagem de programação selecionada na ordem que causará o efeito desejado.

- **Em ordem alfabética** -> um programa precisa ser escrito em um script reconhecível
- **Lexicamente** -> cada linguagem de programação tem seu dicionário e que você precisa dominá-lo
- **Sintaticamente** -> cada idioma tem sues regras e elas devem ser obedecidas
- **Semanticamente** -> o programa tem que fazer sentido

### Há duas maneiras de transformar um programa de linguagem de programação de alto nível em linguagem de máquina
- **Compilação**
	- O programa de origem é convertido uma vez *(E esse ato tem quer ser repedito todas vez que haver mudança no código fonte)* 
	- O programa que realiza essa conversão é chamado de **compilador** ou **tradutor**
	- Depois de compilado você pode destribuir o programa para qualquer um

-  **Interpretação**
	- Pode-se traduzir o programa de origem toda vez que ele tiver que ser executado.
	- O programa que executa essa transformação é chamado de **interpretador**
	- Não consegue distribuir o código-fonte como está, pois o usuário final também precisa que o intérprete execute-o também.

## Compilação
- **Vantagens**
	- A execução do código convertido é mais rápido
	- Apenas o usuário precisa ter o compilador - o usuário final pode usar o código sem ele
	- O código traduzido é armazenado usando linguagem de máquina - como é muito difícil de entender, suas pŕoprias invenções e truques de programação provavelmente permanecerão em segredo.
- **Desvantagens**
	- A compilação em si pode ser um processo muito demorado - talvez você não consiga executar o código imediatamente após fazer uma alteração.
	- Você precisa ter tantos compiladores quanto plataformas de hardware nas quais deseja que seu código seja executado.

## Interpretação
- **Vantagens**
	- Você pode executar o código asso, que tiver concluído - não há fases adicionais de conversão
	- O código é armazenado usando linguagem de programação, e não linguagem de máquina - isso significa que pode ser executado em computadores que usam linguagens de máquina diferentes. 
	- Você não compila seu código separadamente para cada arquitetura.
- **Desvantagens**
	- Não espere que a interpretação aumente seu código a alta velocidade - seu código vai compartilhar a capacidade do computador como a intérprete.
	- Você e ousuário final precisam ter o intérprete para executar o código.

> ==Python é uma linguagem interpretada.==

> ==Para programar em Python é necessário ter o **interpretador Python**. Não dá para executar o código sem ele.==

