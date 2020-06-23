import React from 'react';
import CreatePost from '../components/CreatePost/CreatePost'
import List from '../components/List/List';
import { Container, Button, Toolbar , AppBar, Typography  } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const MySwal = withReactContent(Swal);

export default function Feed () {
  const history = useHistory();
  const classes = useStyles();

  function logOut(){
    MySwal.fire({
      icon: 'success',
      title: 'We will miss you!',
      showConfirmButton: false,
      timer: 1500
    })
    localStorage.clear();
    history.push("/");
  }


    return (
      <div className={classes.root}>
              <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            My posts!
          </Typography>
          <Button edge="end" color="inherit" onClick={logOut}>Log out</Button>
        </Toolbar>
      </AppBar>
      <Container>
      <CreatePost />
      <List/>
      </Container>
      </div>
    )

};



