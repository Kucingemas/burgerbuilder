import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingLabel}</div>
        <button className={classes.Less} 
                onClick={props.removed}
                //disabled adalah prop dari sononya punya button
                disabled = {props.disablePerIng}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
}

export default buildControl;