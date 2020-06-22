const postSchema = require('./post');

const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    bcrypt = require('bcrypt');
    


const userSchema = new Schema({
  name:    { type: String },
  email:     { type: String, required: true, unique: true},
  password:   { type: String, required: true},
  posts: [postSchema],
}, {timestamps: true});


//Hook to users records to hash the password when the user is created or the password is updated
userSchema.pre('save', function(next){
  if (this.isNew || this.isModified('password')){
    const document = this;
    bcrypt.hash(document.password, 10, function(err, res) {
      if (err){
        next(err);
      }else {
        document.password = res;
        next();
      }
    });
  } else {
    next();
  }
})

//Method to check if the password diven is correct
userSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}



module.exports = mongoose.model('User', userSchema);