import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    root: {
        padding: '0 0.5rem 0 0.5rem',
        color: '#587792' 
    },
    title: {
    },
    contentText: {
    }
}));

type AboutProps = {
    content: string[]
}

function About(props: AboutProps) {    
    const { classes } = useStyles();
    const { content } = props;

    return(
        <div className={classes.root} style={{height: '100%'}}>            
            <div style={{padding: '0 1rem'}}>
                <h2 className={classes.title}>About Me</h2>
                <div className={classes.contentText}>
                    {content.map((c, index) => {
                        return(<p key={`paragraph-${index}`}>{c}</p>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default About;
