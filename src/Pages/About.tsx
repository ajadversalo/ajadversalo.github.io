import React from 'react';

import { Divider } from "antd";

type AboutProps = {
    content: string[]
}

function About(props: any) {
    const { content } = props;

    return(
        <div className={"text-white p-4 h-screen bg-sky-800 pt-16"}>                        
            <div className="flex items-center justify-center">
                <div className="w-full lg:w-[65%] xl:w-[65%]">
                    <h2 className={"text-2xl"}>About Myself</h2> 
                    <Divider className="bg-white" />
                </div>
            </div>
            <div className="flex items-center justify-center h-100 lg:h-full xl:h-full lg:m-[-5rem] lg:m-[-5rem]">
                <div className="w-full text-lg lg:w-[60%] xl:w-[60%]">
                    <div className={"p-4"}>
                        {content.map((c: any, index: number) => {
                            return(<p className="pb-4" key={`paragraph-${index}`}>{c}</p>)
                        })}                
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default About;
