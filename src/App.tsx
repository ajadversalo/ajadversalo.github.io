import React, { useState, useEffect } from 'react';
import './App.css';

import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import Contact from './Pages//Contact';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import About from './Pages/About';

import { Divider } from "antd";

import { aboutContent, productList } from '../src/data/data';

function App() {
    const [popupMsg, setPopupMsg] = useState('');
    const [openPopup, setOpenPopup] = useState(false);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title ='Adversalo';
    }, []);

    const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    useEffect(() => {
        const resizeListener = () => {
            setHeight(getHeight())
          };
          window.addEventListener('resize', resizeListener);
          return () => {
            window.removeEventListener('resize', resizeListener);
          }
    },[]);
        
    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    const onDownload = () => {
        const link = document.createElement('a');
        link.download = 'ajadversalo-resume.pdf';
        link.href = 'resume.pdf';
        link.click();
    };

    const AnchorLink = (props: any) => {
        const { href, label } = props;
        return (
            <a
                href={href}
                className="border-b-2 border-transparent hover:border-white hover:cursor-pointer transition transform duration-500 ease-in-out"
            >
                {label}
            </a>
        );
    }

    return (
        <div className="bg-sky-900">
            <div className="flex justify-center text-white sticky top-0 bg-black pt-2 pb-2 z-[50]">
                <div className="text-lg flex flex-row justify-between border-box w-full sm:w-full lg:w-[40rem] xl:w-[40rem] pl-4 pr-4">                    
                    <AnchorLink href={"#skills"} label={"Skills"} />
                    <AnchorLink href={"#projects"} label={"Projects"} />
                    <AnchorLink href={"#contact"} label={"Contact"} />  
                    <AnchorLink href={"#about"} label={"About"} />
                </div>
            </div>
            <div className="h-screen">
            
            <div className="h-full flex items-center justify-center">
                <div className={"w-[40rem] text-white p-2"}>                  
                    <div className={"text-xl pb-4"}>
                        Hi There! I'm
                    </div>
                    <div className={"text-6xl"}>
                        AJ Adversalo                        
                    </div>
                    <Divider className="bg-white"/>
                    <div className={"text-3xl"}>
                        I'm a full-stack developer focused on creating efficient, user-centric web applications. I specialize in simplifying complex workflows and delivering practical solutions.
                    </div>
                    <div style={{ paddingTop: '2rem' }}>
                            <Button className={""}
                                onClick={() => { }}
                            >
                                My Resume
                        </Button>
                    </div>
                </div>
            </div>

            {false &&
                <div>
                    <div className={""} style={height < 550 ? { position: 'relative', paddingTop: '2rem' } : { position: 'absolute', bottom: 15 }}>
                        <IconButton onClick={() => window.open('https://www.linkedin.com/in/ajadversalo', '_blank')}>
                            {<LinkedInIcon className={""} />}
                        </IconButton>
                        <IconButton onClick={() => window.open('https://github.com/ajadversalo', '_blank')}>
                            {<GitHubIcon className={""} />}
                        </IconButton>
                    </div>
                </div>
            }
            </div>
            <div id="about" className=""></div>
            <About content={aboutContent} />
            <div id="skills" className=""></div>
            <Skills />
            <div id="projects" className=""></div>
            <Projects productList={productList} />
            <div id="contact" className=""></div>
            <Contact
                setOpenPopup={setOpenPopup}
                setPopupMsg={setPopupMsg}
                setOpen={() => { }}
            />
            <div id="resume" className="pb-12"></div>
            <Resume />            
          <Snackbar 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
            open={openPopup} 
            autoHideDuration={5000} 
            onClose={handleClosePopup}>
                <MuiAlert 
                    severity={'info'} 
                    variant='filled' 
                    onClose={handleClosePopup}>
                        {popupMsg}
                </MuiAlert>
          </Snackbar>          
        </div>
    );
}

export default App;
