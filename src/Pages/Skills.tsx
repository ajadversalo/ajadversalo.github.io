import React from 'react';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles()(() => ({
    root: {
        padding: '0 2rem'        
    },
    title:{
        color: '#587792'
    },
    subText:{
        color: '#000',
        paddingBottom: '1rem', 
        paddingTop: '0.3rem'
    },
    subTextValue:{
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '0.8rem'        
    },
    contentText: {
        color: '#587792',
        paddingTop: '0.2rem'
    },
    cardRoot: {
        padding: '0.1rem 0.2rem', 
        margin: '0.5rem 0.5rem'
    },
    icon: {
        fill: '#FFF'
    },
    productTitle: {
        width: '11rem',
        color: '#000',
        paddingRight: '2rem'
    },
    divider: {         
        backgroundColor: '#000', 
        height: '1px',         
        marginTop: '-0.8rem',
        width: '100%'
    }
}));

type SkillsProps = {
    category: string,
    items: string
}


function Skills() {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { classes } = useStyles();

    let skills: SkillsProps[] = [
        {
            category: 'Front-End', 
            items: 'HTML, CSS, JavaScript ES6, TypeScript, ReactJS, Redux, MaterialUI'
        },
        {
            category: 'Back-End', 
            items: 'C#, .Net, Entity Framework'
        },
        {
            category: 'Database', 
            items: 'SQL Server'
        },
        {
            category: 'Cloud Services', 
            items: 'Azure DevOps, AWS'
        },
        {
            category: 'Version Control', 
            items: 'Git'
        },
        {
            category: 'Others', 
            items: 'Selenium, i18next, SendGrid'
        },
    ]
    
    const Skill = (props: any) => {            
        return (
            <div style={{display: 'flex', flexDirection: isSm ? 'column' : 'row', paddingTop: '1rem'}}>
                <div className={classes.productTitle} style={{textAlign: isSm ? 'left' : 'right'}}>
                    {props.category}
                </div>
                <div className={classes.contentText} style={{fontSize: '0.8rem', width: '100%'}}>
                    {props.items}
                </div>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>Skills</h2>                                                                   
            <div className={classes.divider}></div>                                  
            <div style={{paddingTop: '1rem'}}>
                {skills.map((p: any) => {
                    return (
                        <Skill 
                            key={p.category}
                            category={p.category} 
                            items={p.items} 
                        />)
                })}
            </div>            
        </div>
    );
}

export default Skills;