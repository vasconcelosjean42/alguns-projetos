class User{
    constructor(name, lastname){
        this._name = name
        this._lastname = lastname
    }

    getFullName(){
        console.log(this._name + " " + this._lastname)
    }
}

const user = new User("Caio", "Rodrigues")
user.getFullName()