import React from 'react';

function Resume() {
        
    return(
        <div className={"h-[90vh] overflow-y-scroll mt-8"}>                        
            <div className="">                
                <img  src={'resume1.jpg'} style={{width: '100%'}} alt='resume1'/>
                <div className="mt-[-6rem]">
                  <img src={'resume2.jpg'} style={{ width: '100%' }} alt='resume2' />
                </div>
            </div>          
        </div>
    );
}

export default Resume;
