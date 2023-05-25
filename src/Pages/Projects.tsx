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
        color: '#587792'
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
    }
}));

type ProductCardProps = {
    title: string,
    description: string
}

type ProjectsProps = {
    productList: Array<ProductCardProps>
}

function Projects(props: ProjectsProps) {
    const { productList } = props;
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { classes } = useStyles();
    
    const ProductCard = (props: ProductCardProps) => {            
        return (
            <div style={{display: 'flex', flexDirection: isSm ? 'column' : 'row', paddingTop: '1rem'}}>
                <div className={classes.productTitle} style={{textAlign: isSm ? 'left' : 'right'}}>
                    {props.title}
                </div>
                <div className={classes.contentText} style={{fontSize: '0.8rem', width: '100%'}}>
                    {props.description}
                </div>
            </div>
        );
    }

    return (
        <div className={classes.root}>                                                       
            <img src={`./genxys-logo.png`} alt='genxys-logo' style={{width: '7rem', paddingTop: '1rem', paddingBottom: '0.5rem'}}/>
            <div style={{width: '100%', height: '1px', backgroundColor: '#000'}}></div>
            <div className={classes.subText} style={{color :'#000'}}>Technologies used: <span className={classes.subTextValue}>ReactJS, Redux, Material-UI, C#, .Net, Entity Framework, MS SQL, Azure DevOps, Canada Post API, SendGrid, Visual Studio</span></div>                                    
            <div style={{paddingTop: '1rem'}}>
                {productList.map((p: ProductCardProps) => {
                    return (
                        <ProductCard 
                            key={p.title}
                            title={p.title} 
                            description={p.description} 
                        />)
                })}
            </div>            
        </div>
    );
}

export default Projects;
