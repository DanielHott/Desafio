require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const { Character, Book } = require('./models')


app.use(express.json());

const PORT = process.env.PORT || 3010;

 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*' )
    app.use(cors());
    next();
}) 

app.get('/', async (req, res) => {
    try { 
    const character = await Character.findAll({
        include: [{
            model: Book, as: 'Books',
        }]
    });
    return res.status(200).json(character);
}
    catch(err) { 
        return res.status(400).json({message: err.message})
    }
})

app.post('/character', async (req, res) => {
    try { 
    const { name } = req.body;
    if (!name) return res.status(400).json({message: "Tem que apresentar um name!"})
    const character = await Character.findOne({
        where: { name },
        include: [{
            model: Book, as: 'Books',
        }]});
    if (!character) return res.status(400).json({message: "Não achamos este nome!"})
    return res.status(200).json(character);
}
    catch(err) { 
        return res.status(400).json({message: err.message})
    }
})


app.post('/new', async (req, res) => {
    try { 
    const { name, codename, years, localization, informations, id_book } = req.body;
    if (!name || !codename|| !years || !localization, !informations, !id_book ) return res.status(500).json({
        message: 'Precisa preencher todos os campos!!'
    })
    const namecharacter = await Character.findOne({
        where: { name }});
    if (namecharacter) return res.status(400).json({ message: "Personagem já registrado!" })
      const character = await Character.create({
          name, codename, years, localization, informations, id_book
      });
    return res.status(200).json(character);
}
    catch(err) { 
        return res.status(400).json({message: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})