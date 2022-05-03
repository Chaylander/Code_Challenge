const StudentController = require("./../../../semana4/code_challenge/lib/Controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

//Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
app.get("/students", (req, res) => {
    const AllStudents = StudentController.getAllStudents();
    res.json(AllStudents);
});

app.listen(port, () => {//localhost:3000
    console.log(`FizzBuzz API in localhost:${port}`);
});