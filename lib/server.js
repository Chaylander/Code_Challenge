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


//Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
app.get("/students/certification/:state", (req, res) => {
    const state = req.params.state;
    if (state == "false" ) {//Boolean se utiliza porque tomaba el parametro true o false como string
        const stateBoolean = Boolean(0);  //Boolean(0) es false  
        const getEmailsWithCertification = StudentController.getStudentsMailWithCertification(stateBoolean);
        res.json(getEmailsWithCertification);
        //console.log(state);
        //console.log(stateBoolean);  
    }
    else{
        const stateBoolean = Boolean(state); //Boolean(1) es true, incluso Boolean False es false
        const getEmailsWithCertification = StudentController.getStudentsMailWithCertification(stateBoolean);
        res.json(getEmailsWithCertification);
        //console.log(state);
        //console.log(stateBoolean);
    }
    
});

app.listen(port, () => {//localhost:3000
    console.log(`CodeChallenge API in localhost:${port}`);
});