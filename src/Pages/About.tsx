import React from 'react';

import PageContainer from '../Pages/PageContainer';

type AboutProps = {
    content: string[]
}

function About(props: any) {
    const { content } = props;

    return (
        <PageContainer title="About" fillScreen={true}>
            {content.map((c: any, index: number) => {
                return(<p className="pb-4" key={`paragraph-${index}`}>{c}</p>)
            })}
        </PageContainer>
    );
}

export default About;
