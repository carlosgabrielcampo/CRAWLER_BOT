# Boas vindas ao repositório do projeto CRAWLER_BOT!

# Sumário

- [Boas vindas ao repositório do projeto CRAWLER_BOT!](#boas-vindas-ao-repositório-do-projeto-CRAWLER_BOT)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Acesso e execução do projeto](#Acesso-ao-projeto)
- [Testes](#Testes)
- [Observação](#Observação)

## O que foi desenvolvido

Neste projeto foi desenvolvido um bot usando a biblioteca PUPPETEER, e também uma demonstração em formato HTML 
do auto-preenchimento de campos no preenchimento do CEP em um formulário.

### Bot

O objetivo do bot é acessar a página, ler as informações e copiar elas, e fazer elas aparecerem no terminal em forma de log.

Foi realizado também uma filtragem em caso de mais de um endereço aparecer na requisição e uma função que cria um documento na base do projeto com as informações retornadas

### WebPage

O procedimento da página é diferente, ela utiliza uma API do site 'https://viacep.com.br/', que retorna um JSON com as informações.

Então o script realiza o auto-preenchimento dos campos com as informações retornadas e caso volte um erro, é exibido um alerta na tela  

---

## Requisitos para a execução

1. Ter o node.js instalado 

- `https://nodejs.org/en/download/` 

- Após a instalação reiniciar o computador'

- *Caso já esteja instalado*, pode passar a próxima etapa

## Acesso e execução do projeto

0. Na pasta aonde será baixado/clonado o repositório, utilizar o comando (opcional)

- `git init`

1. Clone/baixe o repositório 

- `git clone https://github.com/carlosgabrielcampo/CRAWLER_BOT.git`.
- Entre na pasta do repositório:
  - `cd CRAWLER_BOT`

2. Instale as dependências

- `npm install`

### Bot

- 1 Na pasta principal do repositórios digite o comando no terminal 

- `npm start`


### WebPage

- 1 Entre na pasta do repositório:
  - `cd CRAWLER_BOT/exemplePage`

- 2 Selecione o arquivo  

  - `index.html` e abra com o navegador

- 3 Digite no campo 
  
  -`CEP` o cep desejado, e aguarde a resposta

---

## Testes

Neste projeto foi utilizado uma biblioteca específica do Jest `jest-puppeteer`, com o objetivo de testar o funcionamento da biblioteca assim como as propriedades de pesquisa de elementos HTML utilizadas no site dos correios.

1. Para realizar a exwecução dos testes utilize o comando

- `npm test` na pasta base do projeto

---

### Observação

Foram perdidos parte dos commits, pois ao fazer o primeiro push havia ido sem o arquivo *.gitignore*, o procedimento realizado foi fechar a branch e iniciar uma nova, e os commits do início até a construção da parte inicial do bot foram perdidos.

---