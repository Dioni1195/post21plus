const mongoose = require('mongoose');
    User = mongoose.model('User');
    jwt = require('jsonwebtoken');
    config = require('../config');
    secret = config.secretKey;


    //POST Authenticate User
    exports.authUser = async function (req, res) {

        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ email}, function(err) {
            if(err){
                res.status(500)
                .json({
                status: 'error',
                message: 'Internal error please try again'
              });
            }
        });


//Validate the password given
        if (user) {
            user.isCorrectPassword(password, function(err, same){
                if(err){
                    res.status(500)
                    .json({
                      status: 'error',
                      message: 'Internal error please try again'
                  });
                }else if(!same) {
                    res.status(401)
                    .json({
                        status: 'error',
                        message: 'Wrong password'
                    });
                } else {
                        // Issue token
                        const payload = { id: user._id, email: user.email};
                        const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                        });
                        res.cookie('token', token, { httpOnly: true })
                        .status(200).json({ token: token, status: 'OK', message: 'Logged in'});
                    }
            })
        } else {
            res.status(401).json({status: 'error', message: `User ${email} doesnt exists`});
        }

}