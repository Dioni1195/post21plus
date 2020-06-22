const express = require("express"),
    bodyParser  = require("body-parser"),
    cookieParser = require("cookie-parser"),
    methodOverride = require("method-override");
    require('dotenv').config();
    mongoose = require('mongoose');
    app = express();
    hostname = '127.0.0.1';
    config = require('./config');
    port = config.port;
    require('./models/user');
    userRoutes = require('./routes/userRoutes');
    loginRoutes = require('./routes/loginRoutes');
const path = require('path');
// const AWS = require('aws-sdk');

// const myBucket = 'dionibucket';
// var myKey = 'file1.json';

// AWS.config = new AWS.Config();
// AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY;
// AWS.config.secretAccessKey = process.env.AWS_SECRET_KEY;
// AWS.config.region = "us-east-2";
// AWS.config.apiVersions = {
//   "s3": "2006-03-01"
// }

//const s3 = new AWS.S3();
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   accessSecretKey: process.env.AWS_SECRET_KEY,
//   region: "us-east-2"
// });



const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());


//Assinging the routes of the API
app.use('/api', userRoutes);
app.use('/api', loginRoutes);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
    //res.status(200).json({status : 'OK'});
    res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  // app.get('/viewFiles', function(req, res){
  //   var bucketParams = {
  //     Bucket : myBucket,
  //   };

  //   s3.listObjects(bucketParams, function(err, data) {
  //     if (err) {
  //       console.log("Error", err);
  //     } else {
  //       console.log("Success", data);
  //       var href = this.request.httpRequest.endpoint.href;
  //       var bucketUrl = href + myBucket + "/";

  //       var photos = data.Contents.map(function(photo){
  //         var photoKey = photo.Key;
  //         var photoURL = bucketUrl + encodeURIComponent(photoKey);
  //         res.send({data: photoURL})
  //       })
        
        
  //     }
  //   });
  // })


  // app.get('/createFile', function (req, res) {
  
  //     let params = {
  //       Bucket: myBucket,
  //       Key: "DioniOpodero.json",
  //       ACL: 'public-read',
  //       ContentType: 'application/json',
  //       Body: '{data: "Hola", process: 400}',
  //     };
  
  //     s3.putObject(params, function (err, data) {
  //       if (err) {
  //         console.log(err);
  //         res.send({ title: 'Error' });
  //         return 0;
  //       }

  //       var url = s3.getSignedUrl('putObject', params);
  //       console.log('The URL is', url);
  //       res.send({ title: data });
  //     });  
  // });


  // app.get('/getObject', function(req, res) {
    
  //   var params = {
  //     Bucket: myBucket, 
  //     Key: "file1.json", 
  //    };

    
  //   var url = s3.getSignedUrl('getObject', params);
  //   console.log('The URL is', url);
  //   res.send(url)

  //   //  s3.getObject(params, function(err, data){
  //   //   if (err) res.send(err, err.stack); // an error occurred
  //   //   else     res.send(data);           // successful response
  //   //  })
  // })


//Starting the API and the connection with the DB
    const connectionString = 
`mongodb+srv://dioniMongo:9M3nYo7sefmYuKlc@clustertest0-nnzbs.mongodb.net/post21?retryWrites=true&w=majority`;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    } else {
      console.log('Database connected ' + res);
    }
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server running at http://0.0.0.0:${port}/`);
        });
  });