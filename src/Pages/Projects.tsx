import React from 'react';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
    
    const ProductCard = (props: ProductCardProps) => {            
        return (
            <div style={{display: 'flex', flexDirection: isSm ? 'column' : 'row', paddingTop: '1rem'}}>
                <div className={""} style={{textAlign: isSm ? 'left' : 'right'}}>
                    {props.title}
                </div>
                <div className={""} style={{fontSize: '0.8rem', width: '100%'}}>
                    {props.description}
                </div>
            </div>
        );
    }

    return (
        <div className={"bg-white p-4 h-screen pt-16"}>                                                       
            <h2 className={""}>Projects</h2>
            <div className={""}></div> 
            <img src={`./genxys-logo.png`} alt='genxys-logo' style={{width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem'}}/>            
            <div className={""}>Technologies used: <span className={""}>ReactJS, Redux, Material-UI, C#, .Net, Entity Framework, MS SQL, Azure DevOps, Canada Post API, SendGrid, Visual Studio</span></div>                                                
            {productList.map((p: ProductCardProps) => {
                return (
                    <ProductCard 
                        key={p.title}
                        title={p.title} 
                        description={p.description} 
                    />)
            })}            
        </div>
    );
}

export default Projects;
