import React from 'react';

function Resume() {
        
    return(
        <div className={"h-[70vh] overflow-y-scroll"}>                        
            <div className="">                
                <img  src={'resume1.jpg'} style={{width: '100%'}} alt='resume1'/>
                <img  src={'resume2.jpg'} style={{width: '100%'}} alt='resume2'/>
            </div>          
        </div>
    );
}

export default Resume;
