import React, { useState, useEffect } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faListCheck, faDiagramProject, faEnvelope, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";

import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import Collapse from '@mui/material/Collapse';

import Contact from './Pages//Contact';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Projects2 from './Pages/Projects2';
import About from './Pages/About';

import { Divider, Modal } from "antd";

import {
    aboutContent,
    productListGenXys,
    productListCentra
} from '../src/data/data';

function App() {
    const [popupMsg, setPopupMsg] = useState('');
    const [openPopup, setOpenPopup] = useState(false);
    const [height, setHeight] = useState(window.innerHeight);
    const [showResume, setShowResume] = useState(false);
    const [selected, setSelected] = useState(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const [showTechnicalSkills, setShowTechnicalSkills] = useState(false);

    useEffect(() => {
        document.title = 'Adversalo';
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
    }, []);

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
        const { href, label, selected, setSelected, onClick } = props;
        return (
            <a
                href={href}
                className={`border-b-2 border-transparent hover:cursor-pointer hover:border-white ${selected ? "border-b-2 border-white" : ""} pl-2 pr-2 transition transform duration-500 ease-in-out`}
                onClick={() => { setSelected(label); onClick?.() }}
            >
                {props.children}
            </a>
        );
    }

    const NavBar = () => {
        return (
            <div className="flex justify-center text-white fixed bottom-0 lg:sticky lg:top-0 bg-gray-900 pt-3 pb-3 z-[50] w-full">
                <div className="text-lg flex flex-row justify-between border-box w-full lg:w-[30%] pl-4 pr-4">
                    {false &&
                        <AnchorLink href={"#skills"} label={"Skills"} selected={selected === "Skills"} setSelected={setSelected}>
                            <div className="flex flex-col lg:flex-row">
                                <FontAwesomeIcon icon={faListCheck} className="lg:mt-1" />
                                <span className="pl-2 text-sm lg:text-lg">Skills</span>
                            </div>
                        </AnchorLink>
                    }
                    <AnchorLink href={"#projects"} label={"Projects"} selected={selected === "Projects"} setSelected={setSelected}>
                        <div className="flex flex-col lg:flex-row">
                            <FontAwesomeIcon icon={faDiagramProject} className="lg:mt-1" />
                            <span className="pl-2 text-sm lg:text-lg">Application Portfolio</span>
                        </div>
                    </AnchorLink>
                    <AnchorLink href={"#contact"} label={"Contact"} selected={selected === "Contact"} setSelected={setSelected}>
                        <div className="flex flex-col lg:flex-row">
                            <FontAwesomeIcon icon={faEnvelope} className="lg:mt-1" />
                            <span className="pl-2 text-sm lg:text-lg">Contact</span>
                        </div>
                    </AnchorLink>
                    
                    {false &&
                        <AnchorLink
                            label={"My Resume"}
                            selected={selected === "My Resume"}
                            setSelected={setSelected}
                            onClick={() => setShowResume(true)}
                        >
                            <div className="flex flex-col lg:flex-row">
                                <FontAwesomeIcon icon={faFileLines} className="lg:mt-1" />
                                <span className="pl-2 text-sm lg:text-lg">My Resume</span>
                            </div>
                        </AnchorLink>
                    }
                    {false && <AnchorLink href={"#about"} label={"About"} />}
                </div>
            </div>
        );
    }

    const SubNavBar = () => {
        return (
            <div className="flex justify-center text-white fixed lg:bottom-0 pt-3 pb-3 z-[50] w-full mt-4 lg:mt-0">
                <div className="text-lg flex flex-row justify-between border-box w-full lg:w-[50%] pl-4 pr-4">
                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/ajadversalo', '_blank')}>
                        <i className="fa-brands fa-linkedin text-white"></i>
                    </IconButton>
                    <IconButton onClick={() => setShowResume(true)}>
                        <i className="fa-solid fa-file text-white" />
                        <span className="text-white pl-2 text-[16px]">My Resume</span>
                    </IconButton>
                </div>
            </div>
        );
    }

    window.addEventListener('scroll', () => {
        function isScrolledToTop() {
            return window?.pageYOffset === 0;
        }

        if (isScrolledToTop()) {
            setIsAtTop(true);
        } else {
            setIsAtTop(false);
        }
    });

    return (
        <div className="bg-sky-900 relative" id="top">
            <NavBar />

            {isAtTop &&
                <SubNavBar />
            }

            <div className="h-screen">
                <div className="h-full flex items-center justify-center pl-2 pr-2 mt-[-1rem]">
                    <div className={"w-[50rem] text-white p-2 mt-[-3rem] h-[25rem]"}>
                        <div className={"text-5xl sm:text-6xl"}>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}                                
                            >
                                AJ Adversalo
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Divider className="bg-white" />
                        </motion.div>
                        <Collapse in={!showTechnicalSkills}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                            <div className={"text-2xl sm:text-3xl"}>
                                Experienced full-stack developer with over 6 years of experience in building robust, user-centric applications. Dedicated to writing clean, reusable code to deliver efficient and scalable solutions.
                            </div>
                            </motion.div>
                        </Collapse>
                        {!isAtTop &&
                            <a href={"#top"}>
                                <FontAwesomeIcon icon={faCircleChevronUp} size="2xl" className="fixed bottom-[90px] right-5 rounded-full h-[3rem] w-[3rem] opacity-30 hover:cursor-pointer" />
                            </a>
                        }

                        {!showTechnicalSkills &&
                            <div className="mt-8 hover:cursor-pointer hover:underline text-[#FFDD44]" onClick={() => setShowTechnicalSkills(true)}>View My Techical Skills <i className="fa-solid fa-chevron-right"></i></div>
                        }
                        <Collapse in={showTechnicalSkills}>
                            <div className="">
                                <Skills />
                            </div>
                        </Collapse>
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

            {false &&
                <>
                    <div id="about" className=""></div>
                    <About content={aboutContent} />
                </>
            }
            <div className="flex justify-center">
                <div id="projects" className=""></div>
                <Projects
                    productList={productListGenXys}
                    productListCentra={productListCentra}
                />
            </div>

            <div className="flex justify-center">
                <div id="contact" className=""></div>
                <Contact
                    setOpenPopup={setOpenPopup}
                    setPopupMsg={setPopupMsg}
                    setOpen={() => { }}
                />
            </div>
            <Modal
                open={showResume}
                width={1000}
                footer={null}
                onCancel={() => setShowResume(false)}
                style={{marginTop: "-5rem"}}
            >
                <Resume />
            </Modal>
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
