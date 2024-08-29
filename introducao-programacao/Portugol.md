- Pseudolinguagem que permite ao leitor desenvolver algoritmos estruturados em português de forma simples e intuitiva, independentemente de linguagem de programação.

```portugol
funcao inicio {
	real nota1, nota2, nota3, nota4, media
	cadeia aluno
	
	escreva("Digite seu nome: ")
	leia(aluno)
	escreva("Digite sua nota1: ")
	leia(nota1) 
	escreva("Digite sua nota2: ") 
	leia(nota2) 
	escreva("Digite sua nota3: ") 
	leia(nota3) 
	escreva("Digite sua nota4: ") 
	leia(nota4) 
	media := (nota1 + nota2 + nota3 + nota4) / 4 escreva("Sua média é ", media:4:2) // Formatando a saída com 2 casas decimais
	
	se (media >= 7)
	entao { escreva("Parabéns! Você foi aprovado!") } 
	senao { escreva("Média não alcançada! Reprovado!") }
}
```