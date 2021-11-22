const Employee = Request ('./Employee');

class Manager  extends Employee {
constructor ( name,id, email, officeNumber){
    super (name,id, email)
    this.officeNumber  = officeNumber;
}
getRule(){
    return 'Manager'
}
getofficeNumber = this.officeNumber

}

module.exports = Manager;