import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './pagination.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        justifyContent: "center",
        '& > *': {
            marginTop: theme.spacing(2),
          },
    },
    ul: {
      "& .MuiPaginationItem-root": {
        color: " #19bc8b",
        
      }
    }
  }));

export default function BasicPagination() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={10} size="large" variant= "outlined" color="primary" classes={{ul: classes.ul}} />
    </div>
  );
}