import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@material-ui/core';
//import styles from './Feed.module.css';
import useFormHandler from '../utils/useFormHandler';
import jwt from 'jwt-decode'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CreatePost from '../components/CreatePost/CreatePost'


export default function Feed () {


    return (
      <CreatePost />
    )

};



