const Reader = require("./../../lib/utils/Reader");
const StudentServices = require("./../../../code_challenge/lib/Services/StudentServices");

describe("Test para la clase StudentServices", () => {
    test("Requerimiento 1: Retornar el arreglo con los estudiantes", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const AllStudents = StudentServices.getAllStudents(students);
        expect(AllStudents).toEqual(students);
    });
    test("Requerimiento 2: consultar los mails de los estudiantes que tengan certificacion", () =>{
        const students = Reader.readJsonFile("visualpartners.json");
        const StudentsMailWithCertification = StudentServices.getStudentsMailWithCertification(students, true);
        expect(StudentsMailWithCertification.length).toBe(29);
    });



});
