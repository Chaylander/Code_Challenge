const Reader = require("./../utils/Reader");
const StudentsServices = require("./../Services/StudentServices");

class StudentController{
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        const AllStudents = StudentsServices.getAllStudents(students);
        return AllStudents;
    }
    static getStudentsMailWithCertification(certification){
        const students = Reader.readJsonFile("visualpartners.json");
        certification = true;
        const getEmailsWithCertification = StudentsServices.getStudentsMailWithCertification(students, certification);
        return getEmailsWithCertification;
    }

}

module.exports = StudentController;