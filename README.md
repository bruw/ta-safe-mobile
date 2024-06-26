# TA-SAFE-MOBILE
Aplicativo móvel para o sistema de rastreabilidade de celulares - Tá Safe.

## Tecnologias

+ React Native
+ Expo 
+ TypeScript 

## Instalação Local

### Requisitos
- NVM
- NodeJS
- Yarn
- Expo Cli
- Expo Go

### Passos

1. Clone o Repositório
~~~git
git@github.com:bruw/ta-safe-mobile.git
~~~

2. Acesse a Pasta do Projeto
~~~bash
cd ta-safe-mobile
~~~

3. Instale as Dependências:
~~~bash
yarn install
~~~

4. Copie o arquivo `example.env` e renomeie para `.env`

5. Modifique o `.env` para sua rede local
~~~bash
EXPO_PUBLIC_API_URL=http://IP_DA_SUA_MAQUINA:80
~~~

6. Iniciar aplicação
~~~bash
yarn start --clear
~~~
