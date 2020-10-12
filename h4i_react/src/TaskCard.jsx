import React from 'react';

const TaskCard = ({task}) => {

    return ( 
        <div className="card">
            <div className="card-body">
                {task.title}
            </div>
        </div>
     );
}
 
export default TaskCard;