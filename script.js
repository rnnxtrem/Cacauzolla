async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Carrega os dados de login do arquivo JSON
    const response = await fetch('login.json');
    const users = await response.json();

    // Verifica se as credenciais fornecidas correspondem a algum usuário
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Se o login for bem-sucedido, esconde a tela de login e mostra a tela do sistema
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('system-container').classList.remove('hidden');
        document.getElementById('user-greeting').innerText = username;

        // Exibe a hora atual no formato desejado
        updateTime();
    } else {
        // Se as credenciais forem inválidas, exibe uma mensagem de erro
        alert('Usuário ou senha inválidos!');
    }
}

// Função para atualizar a hora no sistema
function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    setInterval(() => {
        const currentDate = new Date();
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');
        currentTimeElement.innerText = `Hora Atual: ${hours}:${minutes}:${seconds}`;
    }, 1000);
}

// Função para executar comandos no sistema
function executeCommand(command) {
    const consoleOutput = document.getElementById('console-output');
    const commandMessage = `Comando executado: ${command}`;
    consoleOutput.innerHTML += `<p>${commandMessage}</p>`;
}

// Função para limpar o console
function clearConsole() {
    document.getElementById('console-output').innerHTML = '';
}