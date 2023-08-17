import express from "express";
import {pool} from "./connection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get ("/usuario", async (req, res) => {
    try{
        console.log(req.body);
        const name = req.body.nombreNuevo;
        const balance = req.body.balanceNuevo;
        const usuario = await pool.query ("INSERT INTO usuarios (nombre, balance) VALUES ($1, $2)", [name, balance]);
        res.json(usuario.rows);
    } catch (error) {
        console.log(error);
    }finally{
        pool.release;
    }
    

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});