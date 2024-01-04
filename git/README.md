# Comandos
## Configuração...
 - Configura o nome do usuário utilizador do Git
```
git config --global user.name "meu nome"
```

 - Configura o e-mail do usuário utilizador do Git
```
git config --global user.email "meu email"
```

 - Informa o editor de código utilizado, neste caso, VSCode
```
git config --global core.editor code
```

 - Definir branch principal 'main'
```
git config --global init.defaultBranch main
```

 - Salvar as credenciais (usuário e token) no computador, possibilitando realizar pull e push para o repositório remoto sem a necessidade de informá-las toda vez
```
git config --global credential.helper store
```


## Outros comandos úteis...

- Inicia um repositório GIT local
```
git init
```

 - Vincula o repositório local com o remoto
```
git remote add origin <link-do-repositorio-remoto>
```

 - Clonar um repositório existente do GitHub
```
git clone <link-do-repositorio-disponibilizado-no-github>
```

 - Caso o repositório tenha mais de uma branch, comando para clonar uma branch específica
```
git clone <link-do-repositorio> --branch <nome-da-branch> --single -branch 
```

 - Cria uma nova branch com o nome informado
```
git branch <nome>
```

 - Visualizar em que branch estou
```
git branch
```

 - Visualizar em que branch estou (outra forma)
```
git log --oneline --decorate
```

 - Ir para a branch (criada ou outra)
```
git checkout <nome-da-branch>
```

 - Junta todos os arquivos com a branch padrão
```
git merge <nome-da-branch-para-unir>
```

