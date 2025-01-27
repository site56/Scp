const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques (si nécessaire)
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
     // Récupérer l'adresse IP de l'utilisateur
     const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
     console.log(`IP de l'utilisateur: ${ip}`);

     // Répondre avec un message simple
     res.send('<h1>Bienvenue sur le serveur!</h1>');
});

// Démarrer le serveur
app.listen(port, () => {
     console.log(`Serveur en cours d\'exécution à http://localhost:${port}`);
});
