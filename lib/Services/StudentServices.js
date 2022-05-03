class StudentServices{
    static getAllStudents(students){
        return students;
    }
    static getStudentsMailWithCertification(students, certification){
        const getstudents = students.filter(student => student.haveCertification == certification);
        const getMails = getstudents.map(student => student.email);
        return getMails;
    }
    


}

module.exports = StudentServices;