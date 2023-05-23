import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles()(() => ({
    root: {
        padding: '0 0.5rem 0 0.5rem',
    },
    title:{
        color: '#BB4430',
        paddingLeft: '1.5rem', 
        marginBottom: 0
    },
    subTitle:{
        color: '#587792',
        fontSize: '0.8rem', 
        paddingLeft: '0.5rem', 
        paddingBottom: '1rem'
    },
    contentText: {
        color: '#587792'
    },
    cardRoot: {
        padding: '0.1rem 0.2rem', 
        margin: '0.5rem 0.5rem'
    },
    icon: {
        fill: '#FFF'
    },
    accordionRoot: {
        backgroundColor: 'transparent', 
        boxShadow: 'none'
    },
    accordionTitle: {
        paddingLeft: '0.5rem',
        color: '#587792'
    },
    accordionSummary:{
        borderBottom: '1px solid lightgrey'
    }
}));

type ProductCardProps = {
    title: string,
    image: string,
    description: string
}

type ProjectsProps = {
    productList: Array<ProductCardProps>
}

function Projects(props: ProjectsProps) {
    const { productList } = props;
    
    const { classes } = useStyles();
    
    const pageTitle = 'Projects';
    const genXysTitle = 'GenXys Applications';
    const personalTitle = 'Personal';
    const subTitle = 'Together with 3 other developers, we\'ve built several web applications for GenXys utilizing ReactJS, C#, .Net Core, MS SQL and Azure.';

    const ProductCard = (props: ProductCardProps) => {            
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{minWidth: '7rem', maxWidth: '7rem'}}>
                    <Card className={classes.cardRoot}>
                        <div className={classes.contentText} style={{textAlign: 'center', paddingBottom: '0.2rem'}}>{props.title}</div>
                        <img src={`./productImages/${props.image}`} style={{maxWidth: '100%'}} alt={`${props.image}`}></img>
                    </Card>
                </div>
                <div className={classes.contentText} style={{fontSize: '0.8rem', minWidth: '10rem', maxWidth: '30rem', paddingTop: '0.5rem'}}>
                    {props.description}
                </div>
            </div>
        );
    }

    return (
        <div className={classes.root}>                                           
            <h2 className={classes.title}>{pageTitle}</h2>                
            <Accordion className={classes.accordionRoot} defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.icon}/>}
                    aria-controls="panel-genxys-content"
                    id="panel-genxys-header"
                    className={classes.accordionSummary}
                >
                    <div className={classes.accordionTitle}>{genXysTitle}</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.subTitle}>{subTitle}</div>
                    {productList.map((p: ProductCardProps) => {
                        return (
                            <ProductCard 
                                title={p.title} 
                                description={p.description} 
                                image={p.image}
                            />)
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordionRoot}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.icon}/>}
                    aria-controls="panel-personal-content"
                    id="panel-personal-header"
                    className={classes.accordionSummary}
                >
                    <div className={classes.accordionTitle}>{personalTitle}</div>
                </AccordionSummary>
                <AccordionDetails>                
                </AccordionDetails>
            </Accordion>        
        </div>
    );
}

export default Projects;
