const Employee = request ('./Employee');

class Intern  extends Employee {
constructor ( name,id, email, school){
    super (name,id, email)
    this.school  = school;
}
getRule(){
    return 'Intern'
}
getSchool (){
return this.school

} 

}

module.exports = Intern;