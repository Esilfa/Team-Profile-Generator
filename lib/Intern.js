const Employee = Request ('./Employee');

class Intern  extends Employee {
constructor ( name,id, email, school){
    super (name,id, email)
    this.school  = school;
}
getRule(){
    return 'Intern'
}
getSchool = this.school

}

module.exports = Intern;