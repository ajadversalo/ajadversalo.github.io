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
            <div className="pt-2 flex flex-col justify-between mt-1">
                <div className="w-100 text-[#66B2B2] font-semibold">
                    {props.title}
                </div>
                <div className="w-100 text-sm mt-1">
                    {props.description}
                </div>
            </div>
        );
    }

    return (
        <PageContainer title="Application Portfolio" className="max-w-[100rem]">
            <div className="flex flex-col lg:flex-row">
                <div className={"w-[20%]"}>
                    <img
                        src={`./centra-logo.png`}
                        alt='centra-logo'
                        style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                </div>
                <div className={"w-[100%] mt-6 lg:pl-1"}>
                    <div className="text-md text-[#FFDD44] font-semibold hover:underline">
                        <a href="https://www.centrawindows.com" target="_blank">Centra Windows</a>
                    </div>
                    <div className="text-sm mt-1">
                        Centra Windows specializes in energy-efficient window and door replacements, offering customized products and installation services to improve home comfort and energy savings.
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="">
                    {productListCentra.map((p: ProductCardProps) => {
                        return (
                            <ProductCard
                                key={p.title}
                                title={p.title}
                                description={p.description}
                            />)
                    })}
                </div>
            </div>
            <Divider className="bg-white mt-12" />
            <div className="flex flex-col lg:flex-row">
                <div className={"w-[20%]"}>
                    <img src={`./genxys-logo-square.png`} alt='genxys-logo' style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                </div>
                <div className={"w-[100%] mt-6 lg:pl-1"}>
                    <div className="text-md text-[#FFDD44] font-semibold hover:underline">
                        <a href="https://www.genxys.com" target="_blank">GenXys Healthcare Systems</a>
                    </div>
                    <div className="text-sm mt-1">
                        GenXys provides precision prescribing software that integrates pharmacogenetics and clinical data to help healthcare providers personalize medication choices, improving patient safety and reducing healthcare costs.
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-6">
                <div className="w-100">
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
        </PageContainer>
    );
}

export default Projects;
