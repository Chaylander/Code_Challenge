const StudentController = require("../../lib/Controllers/StudentController");

describe("Test para la clase StudentController, la cual sirve para conectar a la API", () => {
    test("Requerimiento 1: Retornar el arreglo con los estudiantes", () => {
        const AllStudents = StudentController.getAllStudents();
        expect(AllStudents.length).toBe(51);
    });

});