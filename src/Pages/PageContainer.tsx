import React from 'react';

import { Divider } from "antd";

type PageContainerProps = {
    content: string[],
    className?: string,
    fillScreen: boolean
}

function PageContainer(props: any) {
    const { title, className, bodyClassName, fillScreen } = props;

    return(
        <div className={`text-white p-4 ${fillScreen ? "h-screen" : "lg:h-100"} lg:pt-16 ${className}`}>
            <div className="flex items-center justify-center">
                <div className="w-full xl:w-[70%] 2xl:w-[50%]">
                    <h2 className={"text-2xl"}>{title}</h2> 
                    <Divider className="bg-white mb-0" />
                </div>
            </div>
            <div className={`flex lg:items-center justify-center h-100 lg:h-full ${bodyClassName}`}>
                <div className="w-full text-sm lg:text-lg xl:text-lg xl:w-[70%] 2xl:w-[50%]">
                    <div className={"p-4"}>
                        {props.children}                
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default PageContainer;
