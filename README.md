# TA-SAFE-MOBILE
Aplicativo móvel para o sistema de rastreabilidade de celulares - Tá Safe.

## Tecnologias

+ React Native
+ Expo 
+ TypeScript 

## Instalação Local

### Requisitos
- NodeJS
- Yarn
- Expo Go

### Passos

1 - Instale o NVM
~~~bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
~~~

2 - Instale o NodeJS
~~~bash
nvm install 20.11.1
~~~

3 - Habilite o Yarn
~~~bash
  corepack enable
~~~

4 - Baixe o Expo Go no seu aparelho Android (Necessário versão para Sdk 49)

https://expo.dev/go?sdkVersion=49&platform=android&device=true

5 - Clone o Repositório
~~~bash
git clone git@github.com:bruw/ta-safe-mobile.git
~~~

6 - Acesse a Pasta do Projeto
~~~bash
cd ta-safe-mobile
~~~

7 - Copie o arquivo `example.env` e renomeie para `.env`

8 - Modifique o arquivo `.env` para adicionar sua rede local
~~~bash
# Substitua 'IP_DA_SUA_MAQUINA' pelo endereço IP local da sua máquina (ex: 192.168.0.10)
EXPO_PUBLIC_API_URL=http://IP_DA_SUA_MAQUINA:80
~~~

9 - Instale as Dependências:
~~~bash
yarn
~~~

10 - Inicie a aplicação
~~~bash
yarn start
~~~

11 - Leia o QR code exibido no seu terminal através do aplicativo Expo Go.
