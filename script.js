async function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const userData = `Nom d'utilisateur: ${username}\nEmail: ${email}\nMot de passe: ${password}\n`;

    try {
        const directoryHandle = await window.showDirectoryPicker();
        const fileHandle = await directoryHandle.getFileHandle('Registered.txt', { create: true });
        const writable = await fileHandle.createWritable();
        
        await writable.write(userData);
        await writable.close();

        alert('Inscription réussie ! Redirection vers la page de connexion...');
        showLogin();
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement du fichier:', error);
        alert('Échec de l\'enregistrement de votre inscription. Veuillez aller directement à la page de connexion. Voici les informations de connexion par défaut : \nNom d\'utilisateur : admin@gmail.com\nMot de passe : 123');
    }
}

const defaultEmail = "admin@gmail.com";
const defaultPassword = "123";

async function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === defaultEmail && password === defaultPassword) {
        alert('Connexion réussie ! Redirection vers la page de gestion des événements...');
        window.location.href = 'index.html'; // Redirection vers la page principale après connexion
    } else {
        alert('Identifiants invalides. Veuillez réessayer.');
    }
}
