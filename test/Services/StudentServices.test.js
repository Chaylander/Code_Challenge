const Reader = require("./../../lib/utils/Reader");
const StudentServices = require("./../../../code_challenge/lib/Services/StudentServices");

describe("Test para la clase StudentServices", () => {
    test("Requerimiento 1: Retornar el arreglo con los estudiantes", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const AllStudents = StudentServices.GetAllStudents(students);
        expect(AllStudents).toEqual(students);
    });
});
