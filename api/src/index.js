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
        let matriculaParam = req.body;

        let m = await db.tb_matricula.findOne({ where: { nm_aluno: matriculaParam.aluno } });
        if (m != null)
            return resp.send({ erro: 'Aluno já existe!' });

        let r = await db.tb_matricula.create({
            nm_aluno: matriculaParam.aluno,
            nr_chamada: matriculaParam.chamada,
            nm_curso: matriculaParam.curso,
            nm_turma: matriculaParam.turma
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.put('/matricula', async (req, resp) => {
    try {
        let id = req.query.id;
        let aluno = req.body.aluno;

        let r = await db.tb_matricula.update(
            {
                nm_aluno: aluno
            },
            {
                where: { id_matricula: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
})

app.delete('/matricula', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({ where: {id_matricula: req.query.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

app.listen(process.env.PORT,
    x => console.log(`>> Server up at port ${process.env.PORT}`))