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
                <div className={""}>
                    {props.category}
                </div>
                <div className={""} style={{fontSize: '0.8rem', width: '100%'}}>
                    {props.items}
                </div>
            </div>
        );
    }

    return (
        <div className={"text-white p-4 h-screen bg-sky-700 pt-16"}>
            <h2 className={"text-2xl"}>Skills</h2>
            <Divider className="bg-white" />                                                               
            <div className={""}></div>                                  
            <div style={{paddingTop: '1rem'}}>
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
    );
}

export default Skills;