import React from 'react';

type SkillsProps = {
    category: string,
    items: string
}

function Skills() {
    let skills: SkillsProps[] = [
        {
            category: 'Front-End',
            items: 'HTML, CSS, JavaScript, TypeScript, ReactJs, NextJs, Redux, MaterialUI, Tailwind, Ant Design'
        },
        {
            category: 'Back-End',
            items: 'C#, .Net, NodeJs, Entity Framework'
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
            category: 'DevOps',
            items: 'Apache, IIS'
        },
        {
            category: 'Others',
            items: 'Selenium, i18next, SendGrid, Playwright'
        },
    ]

    const Skill = (props: any) => {
        return (
            <div className={"flex mb-1 text-sm"}>
                <div className={"w-[11rem] sm:w-[9rem]"}>
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
        <div className="">
            <div className="text-lg mb-2 text-[#FFDD44]">
                Technical Skills
            </div>
            {skills.map((p: any) => {
                return (
                    <Skill
                        key={p.category}
                        category={p.category}
                        items={p.items}
                    />)
            })}
        </div>
    );
}

export default Skills;