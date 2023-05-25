import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    root: {
        backgroundColor: 'lightgrey',   
        overflowX: 'hidden',
        overflowY: 'hidden' 
    }
}));

function Resume() {
    const { classes } = useStyles();
        
    return(
        <div className={classes.root}>                        
            <div style={{paddingTop: '0.1rem'}}>                
                <img  src={'resume1.jpg'} style={{width: '100%'}} alt='resume1'/>
                <img  src={'resume2.jpg'} style={{width: '100%'}} alt='resume2'/>
            </div>          
        </div>
    );
}

export default Resume;
