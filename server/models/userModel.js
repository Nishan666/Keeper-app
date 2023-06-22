const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String
})

// the below part can also be written in userController but reson of writting here is to maintain readablity
// we cant use flat arrow function here, it will show error ->>this.findOne is not a function
userSchema.statics.signup = async function (email, password) {

    // here execution end at throw Error or return

    //validators
    if(!email || !password){
        throw Error("All field must be filled")
    }
    if(!validator.isEmail(email)){              //email must be valid
        throw Error("Email is not valid")
    }
    if(!validator.isStrongPassword(password)){    //password must have uppercase,lowercase,number and specialchar
        throw Error("Password not strong enough")
    }

    // check if password already exist ,,,,this points to model
    const exists = await this.findOne({ email: email })    //it can be also written as ({email}) because the names are same

    // send custom error message
    if (exists) {
        throw Error("Email already in use")
    }

    // notify. of salt rounds
    const salt = await bcrypt.genSalt(10);
    // encryting the password to hash
    const hash = await bcrypt.hash(password, salt);
    //create user in database with emial and hased password
    const user = await this.create({email , password : hash})    //or ({email : email , password :hash})

    return user
}



// the below part can also be written in userController but reson of writting here is to maintain readablity
// we cant use flat arrow function here, it will show error ->>this.findOne is not a function
userSchema.statics.login = async function(email, password){

    // here execution end at throw Error or return

    //validators
    if(!email || !password){
        throw Error("All field must be filled")
    }

    // find user in db
    const user = await this.findOne({ email: email })    //it can be also written as ({email}) because the names are same

    // if no user found of given email
    if (!user) {
        throw Error("Incorrect email")
    }

    // check the password , match will be Boolean
    const match = await bcrypt.compare(password , user.password)  //if we use .compareSync , the no need for await
    
    // if password is wrong
    if(!match){
        throw Error("Incorrect password")
    }

    return user
}


module.exports = mongoose.model('User', userSchema);