import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../App.css';
import useFormHandler from '../utils/useFormHandler';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useHistory } from "react-router-dom";



const MySwal = withReactContent(Swal);
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Post-21
      </Link>{'/'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const url = "https://post21plus.herokuapp.com/api/user"

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
  

  const signup =  () => {
    // alert(`User Created!
    //        Password: ${inputs.password}
    //        Email: ${inputs.email}`);
    if (inputs.password === inputs.confirmPassword)
    {
        try {
        postData(url, inputs)
        .then((res) => {
            if (res.status === "OK"){
            console.log(res)
            MySwal.fire({
                icon: 'success',
                title: 'User created!',
                showConfirmButton: false,
                timer: 1500
            })
            //const {id, email} = jwt(res.token);
            history.push("/");
            }else {
            MySwal.fire({
                icon: 'Check again :)',
                title: res.message
            })
            }
        })
        
        }catch(Error){

        }
    } else {
        MySwal.fire({
            icon: 'error',
            title: 'Check your password',
            showConfirmButton: false,
            timer: 1500
        })
    }
  }
  const {inputs, handleInputChange, handleSubmit} = useFormHandler(signup);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <LockOutlinedIcon />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} validate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleInputChange}
            value={inputs.email}
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={handleInputChange}
            value={inputs.confirmPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="/" variant="body2">
                {"Do you have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}