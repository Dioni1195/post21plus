const mongoose = require('mongoose');
    User = mongoose.model('User');
    Post = mongoose.model('Post');
    paginate = require('jw-paginate');

//POST Create a User

exports.createUser = async function (req, res) {

        const user = await User.findOne({ email: req.body.email}, function(err) {
            if(err) {
                res.status(500)
                .json({
                status: 'error',
                message: 'Internal error please try again'
              });
            }
        });

        if (user) {
            res.json({ status: 'error', message: 'The user already exists'})
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            
            newUser.save(function (err){
            if(err) throw err;
            res.status(200).json({status: 'OK', message: `User ${newUser.name} created`});
          });

        }

}

//POST Create a post

exports.createPost = async function (req, res) {
    const email = req.body.email;
    const image = req.body.image;
    const title = req.body.title;
    const content = req.body.content;

    const user = await User.findOne({ email }, function(err){
        if(err){
            res.status(500)
            .json({
            status: 'error',
            message: 'Internal error please try again'
          });
        }
    })

    if (!user) {
        res.status(401)
        .json({
        status: 'error',
        message: 'User doesn´t exists'
      });
    } 

    //Create new post and add it to the user entity
    const post = new Post({
        image: image,
        title: title,
        content: content,
    });

    user.posts.push(post);
    user.save(function (err){
        if(err) res.status(500).send(err.message);
        
        res.status(200)
        .json({
            status: 'OK',
            message: 'The post has been created'
        })  
    });
}


//GET all post per user
exports.listPost = async function(req, res){
    const id = req.id;

    const user = await User.findById(id, function(err){
        if(err){
            res.status(500)
            .json({
            status: 'error',
            message: 'Internal error please try again'
          });
        }
    })

    const posts = user.posts;
    const page = parseInt(req.params.page) || 1;
    const pageSize = 10;
    const pager = paginate(posts.length, page, pageSize);
    const pageOfItems = posts.slice(pager.startIndex, pager.endIndex + 1);

    res.status(200).json({status: 'OK', listPost: pager, pageItems: pageOfItems})
}


//DELETE delete a post
exports.deletePost = async function(req, res){
    
    const user = await User.updateOne({ _id : req.params.ownerId },
        {$pull : { posts : {_id: req.params.id} } },
        { multi: true}
        )
    
      res.status(200).json({});
}