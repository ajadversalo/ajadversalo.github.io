import React from 'react';

import { Divider } from "antd";

type SkillsProps = {
    category: string,
    items: string
}


function Skills() {
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
            <div style={{display: 'flex', paddingTop: '1rem'}}>
                <div className={"w-[15rem]"}>
                    {props.category}
                </div>
                <div className={""} style={{fontSize: '0.8rem', width: '100%'}}>
                    {props?.items?.split(",").map((sk: string, index: number) => {
                        return (
                            <span className="pr-1">
                                {sk}
                                {index < (props?.items?.split(",")?.length - 1) && <span>,</span>}
                            </span>
                        )
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className={"text-white p-4 h-screen bg-sky-700 pt-16"}>
            <div className="flex items-center justify-center">
                <div className="w-full lg:w-[65%] xl:w-[65%]">
                    <h2 className={"text-2xl"}>Skills</h2>
                    <Divider className="bg-white" />
                </div>
            </div>
            <div className="flex items-center justify-center h-100 lg:h-full xl:h-full m-[-1rem] lg:m-[-5rem] lg:m-[-5rem]">
                <div className="w-full text-sm lg:text-lg xl:text-lg lg:w-[60%] xl:w-[60%]">
                    <div className={"p-4"}>
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
            </div>         
        </div>
    );
}

export default Skills;