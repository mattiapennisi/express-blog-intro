const express = require('express')
const app = express()
const port = 3000

const blogPosts = [
    {
        title: 'Ciambellone',
        content: 'Ricetta tradizionale italiana per un delizioso ciambellone.',
        image: './public/images/ciambellone.jpeg',
        tags: ['dolce', 'italiano', 'ciambellone'],
    },
    {
        title: 'Cracker Barbabietola',
        content: 'Ricetta per cracker croccanti alla barbabietola.',
        image: './public/images/cracker_barbabietola.jpeg',
        tags: ['snack', 'barbabietola', 'salutare'],
    },
    {
        title: 'Pane Fritto Dolce',
        content: 'Ricetta per un pane fritto dolce e gustoso.',
        image: './public/images/pane_fritto_dolce.jpeg',
        tags: ['dolce', 'pane fritto', 'tradizionale'],
    },
    {
        title: 'Pasta Barbabietola',
        content: 'Ricetta per una pasta colorata e saporita alla barbabietola.',
        image: './public/images/pasta_barbabietola.jpeg',
        tags: ['primo piatto', 'barbabietola', 'italiano'],
    },
    {
        title: 'Torta Paesana',
        content: 'Ricetta per una torta paesana ricca e gustosa.',
        image: './public/images/torta_paesana.jpeg',
        tags: ['dolce', 'torta', 'tradizionale'],
    },
]

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json(blogPosts)
})