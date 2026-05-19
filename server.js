const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// --- ROTA TESTE ---
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// --- ROTA PARA BUSCAR VÍDEOS (SEM API) ---
app.post('/buscar-video', async (req, res) => {

    try {

        const { tema, materia } = req.body;

        const termoBusca =
            materia
            ? `aula de ${materia} ${tema}`
            : `aula de ${tema}`;

        const link =
            `https://www.youtube.com/results?search_query=${encodeURIComponent(termoBusca)}`;

        res.json({
            link
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            link: ""
        });
    }
});

// --- INICIAR SERVIDOR ---
const PORT = 3000;

app.listen(PORT, () => {

    console.log('----------------');
    console.log('🚀 SERVIDOR ONLINE');
    console.log(`🌍 http://localhost:${PORT}`);
    console.log('----------------');
});