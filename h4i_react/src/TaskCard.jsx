import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      margin: "0 auto"
    },
  }));

const Task = ({task, remove, edit, check}) => {
    const classes = useStyles();
    const [editable, changeMode] = useState(task.editable);
    const [tempTitle,changeTempTtile] = useState(task.title);
    const save =() => {
        edit(task._id, tempTitle );
        changeMode(!editable)
    }
    const changeTitle = (e) => {
        changeTempTtile(e.target.value);
    }
    
   return (<Card className={classes.root}>
        <CardContent>
        <Typography component="p" style={{textAlign:"center", fontSize:"1.7rem"}} >
           {editable ? <input value={tempTitle} onChange = {changeTitle} /> : <> {task.title} </> } 
        </Typography>
        </CardContent>
        <CardActions style={{display:"flex", flexDirection: "row", justifyContent :"space-between", margin:"0 25%"}}>   
       {!editable ? 
       <>
       <div className="flex-Item" style={{cursor:"pointer"}}> <i onClick={()=>{changeMode(!editable)}} class="fas fa-edit fa-lg"></i></div>
       <div className="flex-Item" style={{cursor:"pointer"}}> <i onClick={()=>{remove(task._id)}} class="fas fa-trash fa-lg"></i> </div> 
       <div className="flex-Item" style={{cursor:"pointer"}}>  {task.checked? (<i onClick={()=>{ check(task._id)}} class="far fa-check-square fa-lg"></i>) : (<i onClick={()=>{ check(task._id)}} class="far fa-square fa-lg"></i>)} </div>
      </> 
    :
    <button onClick = {save} className = "btn btn-primary"> Save </button>
   }
       </CardActions>
    </Card>);}
 

export default Task;