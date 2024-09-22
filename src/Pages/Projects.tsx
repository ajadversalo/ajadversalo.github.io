import React from 'react';
import PageContainer from '../Pages/PageContainer';

import { Divider } from "antd";

type ProductCardProps = {
    title: string,
    description: string
}

type ProjectsProps = {
    productList: Array<ProductCardProps>
    productListCentra: Array<ProductCardProps>
}

function Projects(props: ProjectsProps) {
    const { productList, productListCentra } = props;
    
    const ProductCard = (props: ProductCardProps) => {            
        return (
            <div className="pt-2 flex flex-col justify-between lg:flex-row xl:flex-row">
                <div className="lg:w-[20%] xl:w-[20%]">
                    {props.title}
                </div>
                <div className="w-100 pl-4 xl:pl-0 lg:pl-0 lg:w-[80%] xl:w-[80%] text-sm">
                    {props.description}
                </div>
            </div>
        );
    }

    return (
        <PageContainer title="Projects">                        
            <div className="flex flex-row mt-40">
                <div className={"w-[20%]"}>
                    <img src={`./centra-logo.png`} alt='genxys-logo' style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                </div>
                <div className={"w-[80%] mt-6"}>
                    <div className="text-sm">
                        Centra Windows specializes in energy-efficient window and door replacements, offering customized products and installation services to improve home comfort and energy savings.
                    </div>
                    <div className="text-sm mt-4">
                        Technologies we've used: <span className={""}>ReactJS, Redux, Material-UI, C#, .Net, Entity Framework, MS SQL, Azure DevOps, Canada Post API, SendGrid, Visual Studio</span>
                    </div>
                </div>
            </div>
            {productListCentra.map((p: ProductCardProps) => {
                return (
                    <ProductCard
                        key={p.title}
                        title={p.title}
                        description={p.description}
                    />)
            })}
            <Divider className="bg-white"/>
            <div className="flex flex-row">
                <div className={"w-[20%]"}>
                    <img src={`./genxys-logo.png`} alt='genxys-logo' style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                </div>
                <div className={"w-[80%] mt-6"}>
                    <div className="text-sm">
                        GenXys Healthcare Systems provides precision prescribing software that integrates pharmacogenetics and clinical data to help healthcare providers personalize medication choices, improving patient safety and reducing healthcare costs.
                    </div>
                    <div className="text-sm mt-4">
                        Technologies we've used: <span className={""}>ReactJS, Redux, Material-UI, C#, .Net, Entity Framework, MS SQL, Azure DevOps, Canada Post API, SendGrid, Visual Studio</span>
                    </div>
                </div>                
            </div>
            {productList.map((p: ProductCardProps) => {
                return (
                    <ProductCard 
                        key={p.title}
                        title={p.title} 
                        description={p.description} 
                    />)
            })}            
        </PageContainer>
    );
}

export default Projects;
