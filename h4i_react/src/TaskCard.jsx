import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
  }));

const Task = ({task, remove, edit, check}) => {
    const classes = useStyles();
    
   return (<Card className={classes.root}>
        <CardContent>
        <Typography component="p" style={{textAlign:"center", fontSize:"1.7rem"}} >
            {task.title}
        </Typography>
        </CardContent>
        <CardActions style={{display:"flex", flexDirection: "row", justifyContent :"space-between", margin:"0 25%"}}>   
       <div className="flexItem" style={{cursor:"pointer"}}> <i onClick={()=>{edit(task._id)}} class="fas fa-edit fa-lg"></i></div>
       <div className="flex-Iem" style={{cursor:"pointer"}}> <i onClick={()=>{remove(task._id)}} class="fas fa-trash fa-lg"></i> </div> 
       <div className="flex-Iem" style={{cursor:"pointer"}}>  {task.checked? (<i onClick={()=>{ check(task._id)}} class="far fa-check-square fa-lg"></i>) : (<i onClick={()=>{ check(task._id)}} class="far fa-square fa-lg"></i>)} </div>
      </CardActions>
    </Card>);}
 

export default Task;