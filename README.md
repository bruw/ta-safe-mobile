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
git clone git@github.com:bruw/ta-safe-mobile.git
~~~

2. Acesse a Pasta do Projeto
~~~bash
cd ta-safe-mobile
~~~

3. Copie o arquivo `example.env` e renomeie para `.env`

4. Modifique o arquivo `.env` para adicionar sua rede local
~~~bash
# Substitua 'IP_DA_SUA_MAQUINA' pelo endereço IP local da sua máquina (ex: 192.168.0.10)
EXPO_PUBLIC_API_URL=http://IP_DA_SUA_MAQUINA:80
~~~

5. Instale as Dependências:
~~~bash
yarn
~~~

6. Inicie a aplicação
~~~bash
yarn start --clear
~~~

7. Leia o QR code exibido no seu terminal através do aplicativo Expo Go para ter acesso ao aplicativo.
