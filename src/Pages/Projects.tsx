import React from 'react';
import PageContainer from '../Pages/PageContainer';

import { Divider, Tooltip } from "antd";

type ProductCardProps = {
    title: string,
    description: string,
    isCritical: boolean,
    isLead: boolean
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
                    {props.isCritical &&
                        <Tooltip title="This is a critical application">
                            <i className="pl-2 fa-solid fa-circle-exclamation text-red-500" />
                        </Tooltip>
                    }

                    {props.isLead &&
                        <Tooltip title="I led this project">
                            <i className="pl-2 fa-solid fa-certificate text-yellow-300" />
                        </Tooltip>
                    }

                    {!props.isLead &&
                        <Tooltip title="I contributed to this project">
                            <i className="pl-2 fa-solid fa-puzzle-piece text-blue-300" />
                        </Tooltip>
                    }
                </div>
                <div className="w-100 text-sm mt-1">
                    {props.description}
                </div>
            </div>
        );
    }

    return (
        <PageContainer title="Application Portfolio">
            <div className="flex flex-col 2xl:flex-row">
                <div className={"w-[20%]"}>
                    <img
                        src={`./centra-logo.png`}
                        alt='centra-logo'
                        style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                </div>
                <div className={"w-[100%] mt-6 2xl:pl-1"}>
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
                                isCritical={p.isCritical}
                                isLead={p.isLead}
                            />)
                    })}
                </div>
            </div>
            <Divider className="bg-white mt-12" />
            <div className="flex flex-col 2xl:flex-row">
                <div className={"w-[20%]"}>
                    <img src={`./genxys-logo-square.png`} alt='genxys-logo' style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                </div>
                <div className={"w-[100%] mt-6 2xl:pl-1"}>
                    <div className="text-md text-[#FFDD44] font-semibold hover:underline">
                        <a href="https://www.genxys.com" target="_blank">GenXys Healthcare Systems</a>
                    </div>
                    <div className="text-sm mt-1">
                        GenXys provides precision prescribing software that integrates pharmacogenetics and clinical data to help healthcare providers personalize medication choices, improving patient safety and reducing healthcare costs.
                    </div>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row mt-6">
                <div className="w-100">
                    {productList.map((p: ProductCardProps) => {
                        return (
                            <ProductCard
                                key={p.title}
                                title={p.title}
                                description={p.description}
                                isCritical={p.isCritical}
                                isLead={p.isLead}
                            />)
                    })}
                </div>
            </div>
        </PageContainer>
    );
}

export default Projects;
