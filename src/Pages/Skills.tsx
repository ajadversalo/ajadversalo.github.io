import React from 'react';

import PageContainer from '../Pages/PageContainer';

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
            <div className={"flex flex-col sm:flex-row mb-2"}>
                <div className={"w-[15rem]"}>
                    {props.category}
                </div>
                <div className={`w-100 ml-4 lg:ml-0 w-full`}>
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
        <PageContainer title="Skills" fillScreen={true}>
            {skills.map((p: any) => {
                return (
                    <Skill
                        key={p.category}
                        category={p.category}
                        items={p.items}
                    />)
            })}
        </PageContainer>                
    );
}

export default Skills;