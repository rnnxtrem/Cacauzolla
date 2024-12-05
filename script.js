// Função de login
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('login.json');
    const users = await response.json();

    // Verificando credenciais
    if (users.some(user => user.username === username && user.password === password)) {
        // Esconde a tela de login e mostra a tela do sistema
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('system-container').classList.remove('hidden');
        document.getElementById('user-greeting