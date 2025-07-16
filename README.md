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

\
&nbsp;

### Login e registro
<div align="center">
  <img src="https://github.com/user-attachments/assets/43e011dc-d201-478e-adad-d2bff49f4c14" width="280px"> 
  <img src="https://github.com/user-attachments/assets/4bc313f9-a95d-474a-b5ca-5342a154abe3" width="280px">
</div>

### Home
<div align="center">
  <img src="https://github.com/user-attachments/assets/3e74a1d0-0a8f-4b0d-be34-1bce931498df" width="280px">
  <img src="https://github.com/user-attachments/assets/d956d4c0-5e7c-4f4b-b337-b0d6bf86c147" width="280px"> 
</div>

### Detalhes do dispositivo
<div align="center">
  <img src="https://github.com/user-attachments/assets/ebca4872-f094-4baa-96a8-932a683f8a7f" width="280px"> 
  <img src="https://github.com/user-attachments/assets/1ef65438-d402-4e85-be7e-63f8de80356d" width="280px">
</div>
