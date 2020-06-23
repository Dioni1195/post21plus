import React, {useState}from 'react';
import { Button, Paper, Typography, Container, Grid } from '@material-ui/core';
import jwt from 'jwt-decode'
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'apx',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100px',
      maxHeight: '100px',
    },
  }));

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


export default function List (props) {
    const [pager, setPager] = useState({pages: [1,1]});
    const [items, setItems] = useState([]);

    async function deleteItem(idItem,e){
        e.preventDefault();
        const {id} = jwt(localStorage.getItem('token'));
        const url = "https://post21plus.herokuapp.com/api/user/" + id + "/post/" + idItem;
        const response = await fetch(url, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
          });
          if (response.status === 200){
            handleGetData(pager.currentPage);
            MySwal.fire({
              icon: 'success',
              title: 'Post deleted!',
              showConfirmButton: false,
              timer: 1500
          })
          } else {
            MySwal.fire({
              icon: 'error',
              title: 'Ops! something is wrong',
              showConfirmButton: false,
              timer: 1500
          })
          }
    }
    

    async function handleGetData(page) {

        async function getData(page){
            const {id} = jwt(localStorage.getItem('token'));
            const url = "https://post21plus.herokuapp.com/api/post/" + id + '/' + page
        
            const response = await fetch(url,)
            // .then(res => res.json())
            // .then(({listPost, pageItems}) => {
            //     setPager(listPost)
            //     setItems(pageItems)
            //     })

            return response.json()
            }
        
        const data =  await getData(page).then(({listPost, pageItems}) => {
            setPager(listPost)
            setItems(pageItems)
            })
        
    }

    const classes = useStyles();
    const postElements = items.map(item => 
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
          <Grid item>
              <img className={classes.img} alt="complex" src={retrieveFile(item.image)} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {item.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {item.content}
                </Typography>
              </Grid>
              <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ cursor: 'pointer' }}
                onClick={(e) => deleteItem(item._id, e)}
                >
            Delete!
          </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        </Paper>
    
    )
    
    return (
        <Container component="main" maxWidth="xs">
            <div>{postElements}</div>
            <Pagination
            hidePrevButton
            hideNextButton
            count={pager.pages.length}
            page="1"
            onChange={(event, page) =>{
                handleGetData(page)
            }}
            /> 
        </Container>
    )

};