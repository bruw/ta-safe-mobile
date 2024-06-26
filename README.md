# TA-SAFE-MOBILE
Aplicativo móvel para o sistema de rastreabilidade de celulares - Tá Safe.

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

4 - Clone o Repositório
~~~bash
git clone git@github.com:bruw/ta-safe-mobile.git
~~~

5 - Acesse a Pasta do Projeto
~~~bash
cd ta-safe-mobile
~~~

6 - Copie o arquivo `example.env` e renomeie para `.env`

7 - Modifique o arquivo `.env`
~~~bash
# Substitua 'IP_DA_SUA_MAQUINA' pelo endereço IP local da sua máquina (ex: 192.168.0.10)
EXPO_PUBLIC_API_URL=http://IP_DA_SUA_MAQUINA:80
~~~

8 - Instale as Dependências:
~~~bash
yarn
~~~

9 - Inicie a aplicação
~~~bash
yarn start
~~~

10 - Leia o QR code exibido no seu terminal através do aplicativo Expo Go. (Necessário versão para Sdk 49)

Baixe o Expo Go em um aparelho Android pelo link: 

https://expo.dev/go?sdkVersion=49&platform=android&device=true
