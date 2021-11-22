const Employee = Request ('./Employee');

class Engineer extends Employee {
constructor ( name,id, email, github){
    super (name,id, email)
    this.github = github;
}
getRule(){
    return 'Engineer'
}
getGithub = this.github

}

module.exports = Engineer;