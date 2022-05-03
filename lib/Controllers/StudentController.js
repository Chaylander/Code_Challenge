const Reader = require("./../utils/Reader");
const StudentsServices = require("./../Services/StudentServices");

class StudentController{
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        const AllStudents = StudentsServices.getAllStudents(students);
        return AllStudents;
    }

}

module.exports = StudentController;