
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@material-ui/core';
//import styles from './Feed.module.css';
import useFormHandler from '../../utils/useFormHandler';
import jwt from 'jwt-decode'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
require('dotenv').config();
const s3_acces = process.env.REACT_APP_S3_KEY;
const s3_key = process.env.REACT_APP_S3_SECRET;
const AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = s3_acces;
AWS.config.secretAccessKey = s3_key;
AWS.config.region = "us-east-2";
AWS.config.apiVersions = {
  "s3": "2006-03-01"
}


//const s3 = new AWS.S3();
const MySwal = withReactContent(Swal);


function uploadFile(file){


  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: "dionibucket",
      Key: file['name'],
      Body: file,
      ACL: "public-read"
    }
  });

  var promise = upload.promise();
  promise.then(
    function(data) {
      console.log("Successfully uploaded photo.");
    },
    function(err) {
      console.log("There was an error uploading your photo: ", err.message);
    }
  );
}


// function retrieveFile(file){
//   var params = {
//     Bucket: "dionibucket", 
//     Key: file, 
//    };

  
//   var url = s3.getSignedUrl('getObject', params);
//   console.log('The URL is', url);
//   return url
// }

export default function CreatePost () {
  const [file, setFile] = useState("");
  const url = "https://post21plus.herokuapp.com/api/user/post"


  function onChangeHandler(event){
    setFile(event.target.files[0]);
    const {email} = jwt(localStorage.getItem('token'));
    inputs.email = email;
    inputs.image = event.target.files[0].name;
    inputs.file = event.target.files[0];
  }

//   function getObject(){
//      setImg(retrieveFile(file.name));
//   }

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json()
  }

  function submitPost(){
    uploadFile(file);
    //console.log(inputs);
    try {
      inputs.token = localStorage.getItem('token');
      postData(url, inputs)
      .then((res) => {
        if (res.status === "OK"){
          console.log(res)
          MySwal.fire({
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          })
        }else {
          MySwal.fire({
            icon: 'Something is worng :(',
            title: res.message
          })
        }
        inputs.title = "";
        inputs.content = "";
        inputs.file = {};
      })
      
    }catch(Error){

    }

  }
  const {inputs, handleInputChange, handleSubmit} = useFormHandler(submitPost);

    return (
      <Container component="main" maxWidth="xs">        
          <Grid container>
        <Grid item xs={12}>
        <Typography component="h4" variant="h5">
          Upload the image
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <input type="file"
       id="file" name="file"
       accept="image/png, image/jpeg" onChange={onChangeHandler}></input>
       <form onSubmit={handleSubmit} >
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            onChange={handleInputChange}
            value={inputs.title}
            autoFocus
        />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="content"
            label="Content"
            name="content"
            onChange={handleInputChange}
            value={inputs.content}
            multiline
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Send!
          </Button>
          </form>
       </Grid>
       </Grid>
        
        
      </Container>
    )

};
