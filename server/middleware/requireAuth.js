// to protect api routes
// dont send responce if user don't have valid token

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req ,res ,next)=>{

    const { authorization } = req.headers    // axios.post(url , data , {headers : {..........}})

    // if there is no authorization token
    if(!authorization){
        // show error when someone try to send get or post request without authorization token  
        return res.status(401).json({error : "Authorization token requires"})
    }

    // authorization token will be like->   'Bearer jj5sdhgFVGTVhjjgfsg44svhabshj'
    const token = authorization.split(' ')[1];

    try {
        // extracting _id from token       token has only _id inside it
        const { _id } = jwt.verify(token, process.env.SECRETS)

        // req.user can be accessed any where in  the server program (app)
        req.user = await User.findOne({ _id: _id }).select('_id')

        next()
    } catch (error) {
        // show error if authorization token is wrong
        console.log(error);
        res.status(401).json({error : 'Request is not Authorized'})
    }
}

module.exports = requireAuth;