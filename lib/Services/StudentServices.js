class StudentServices{
    static getAllStudents(students){
        return students;
    }
    static getStudentsMailWithCertification(students, certification){
        const getstudents = students.filter(student => student.haveCertification == certification);
        const getMails = getstudents.map(student => student.email);
        return getMails;
    }
    static getStudentsWithCredits(students, credits){
        const getStudentsWithMoreThan500Credits = students.filter(student => student.credits > credits);
        return getStudentsWithMoreThan500Credits;
    }



}

module.exports = StudentServices;