import React, {useState}from 'react';
import { Paper } from '@material-ui/core';

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
const s3 = new AWS.S3();

function retrieveFile(file){
  var params = {
    Bucket: "dionibucket", 
    Key: file, 
   };

  
  var url = s3.getSignedUrl('getObject', params);
  console.log('The URL is', url);
  return url
}


export default function Post (props) {
    const img = props.element.image;
    const title = props.element.title;
    const content = props.element.content;
    const createdAt = props.element.createdAt;
    const [url, setUrl] = useState("");
    setUrl(retrieveFile(img));

    return (
        <Paper variant="outlined">
            <img src={url}/>
    <p>{title}</p>
    <p>{content}</p>
    <p>{createdAt}</p>
        </Paper>
    )
}