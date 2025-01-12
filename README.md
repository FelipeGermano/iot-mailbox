# Simulador de Caixa de Correio IoT

O Simulador de Caixa de Correio IoT é uma aplicação em React.js construída com TypeScript que simula como uma caixa de correio física habilitada com IoT pode notificá-lo quando o correio chegar. Ele fornece uma experiência prática usando callbacks para comunicar mudanças de estado entre componentes.

## Funcionalidades

- **Iniciar Monitoramento**: Comece a receber notificações sobre o status da caixa de correio.
- **Parar Monitoramento**: Interrompa o recebimento de atualizações sobre o status da caixa de correio.
- **Redefinir**: Resete os logs e as notificações da aplicação.
- **Painel de Notificações**: Exibe o status atual da caixa de correio (aberta ou fechada).
- **Painel de Logs**: Registra eventos detalhados sobre o estado da caixa de correio.
- **Intervalo de Monitoramento Personalizado**: Permite que os usuários especifiquem o intervalo para monitoramento da caixa de correio.
- **Alerta Sonoro**: Emite um som quando a porta da caixa de correio é aberta.

## Estrutura do Projeto

```plaintext
├── App.tsx        # Componente principal
├── App.css        # Estilos
├── index.tsx      # Ponto de entrada
├── tsconfig.json  # Configuração do TypeScript
├── package.json   # Dependências do projeto
└── ...
```

## Requisitos

- Node.js (>=16.x)
- npm (>=8.x) ou yarn

## Começando

### 1. Clone o Repositório
```bash
git clone https://github.com/FelipeGermano/iot-mailbox.git
cd iot-mailbox
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Inicie a Aplicação
```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

### 4. Construção para Produção
Para construir a aplicação para produção, execute:
```bash
npm run build
```

Os arquivos de saída estarão no diretório `build`.

## Configurações

### Configurações do TypeScript
Certifique-se de que as seguintes opções estão ativadas no arquivo `tsconfig.json`:
```json
"compilerOptions": {
  "jsx": "react",
  "allowSyntheticDefaultImports": true,
  "esModuleInterop": true
}
```

### Alerta Sonoro
Coloque o arquivo `door-open.mp3` no diretório `public` para habilitar o som de alerta ao abrir a porta da caixa de correio.

## Problemas Conhecidos

1. **Configuração JSX ausente**: Certifique-se de que o `tsconfig.json` possui `"jsx": "react"` configurado.
2. **Problema com Timer no TypeScript**: Use `as unknown as number` ao chamar `clearInterval` para resolver conflitos de tipos no Node.js.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```
3. Faça suas alterações e commits:
   ```bash
   git commit -m "Adicionei uma nova funcionalidade"
   ```
4. Envie suas alterações:
   ```bash
   git push origin minha-nova-funcionalidade
   ```
5. Abra um pull request.

