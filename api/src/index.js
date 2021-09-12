import db from './db.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try {
        let matriculados = await db.tb_matricula.findAll();
        resp.send(matriculados);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})


app.post('/matricula', async (req, resp) => {
    try {
        let g = req.body;

        let m = await db.tb_matricula.findOne({ where: { nm_aluno: g.aluno }});
        if (m != null)
            return resp.send({ erro: 'Aluno já existe!' });

        let r = await db.tb_matricula.create({
            nm_aluno: g.aluno,
            nr_chamada: g.chamada,
            nm_curso: g.curso,
            nm_turma: g.turma
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.put('/matricula/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let g = req.body;
        
        let r = await db.tb_matricula.update(
            {
                nm_aluno: g.aluno,
                nr_chamada: g.chamada,
                nm_curso: g.curso,
                nm_turma: g.turma
            },
            {
                where: { id_matricula: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
})

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({ where: {id_matricula: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

app.listen(process.env.PORT,
    x => console.log(`subiu lindona princesa`))