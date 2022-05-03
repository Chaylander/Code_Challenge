const StudentController = require("../../lib/Controllers/StudentController");

describe("Test para la clase StudentController, la cual sirve para conectar a la API", () => {
    test("Requerimiento 1: Retornar el arreglo con los estudiantes", () => {
        const AllStudents = StudentController.getAllStudents();
        expect(AllStudents.length).toBe(51);
    });
    test("Requerimiento 2: Retornar correo de los estudiantes con certificación", () => {
        const getEmailsWithCertification = StudentController.getStudentsMailWithCertification(true);
        expect(getEmailsWithCertification[0]).toBe("Todd@visualpartnership.xyz");
    });
    test("Requerimiento 3: Estudiantes con credito mayor a 500", () => {
        const getStudentsWithMoreThan500Credits = StudentController.getStudentsWithCredits(500);
        expect(getStudentsWithMoreThan500Credits[0].name).toBe("Warren");
    });

});