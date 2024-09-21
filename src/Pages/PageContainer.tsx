import React from 'react';

import { Divider } from "antd";

type PageContainerProps = {
    content: string[]
}

function PageContainer(props: any) {
    const { title } = props;

    return(
        <div className={"text-white p-4 h-screen bg-sky-800 pt-16"}>                        
            <div className="flex items-center justify-center">
                <div className="w-full lg:w-[65%] xl:w-[65%]">
                    <h2 className={"text-2xl"}>{title}</h2> 
                    <Divider className="bg-white" />
                </div>
            </div>
            <div className="flex items-center justify-center h-100 lg:h-full xl:h-full m-[-1rem] lg:m-[-5rem] lg:m-[-5rem]">
                <div className="w-full text-sm lg:text-lg xl:text-lg lg:w-[60%] xl:w-[60%]">
                    <div className={"p-4"}>
                        {props.children}                
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default PageContainer;
