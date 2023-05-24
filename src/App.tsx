import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { aboutContent, productList, emailPattern } from '../src/data/data';

import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const useStyles = makeStyles()(() => ({
  root: {   
  
  },
  boxRoot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    backgroundColor: '#FFF',
    border: '2px solid #000',
    p: 4,
  },
  closeButton: {
    fill: '#587792'
  },
  drawerPaper: {
    backgroundColor: '#EEF0EB',
    width: '40rem',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    // Firefox
    scrollbarWidth: 'none'
  },
  // },
  drawerPaperNarrow: {
    backgroundColor: '#EEF0EB',
    width: '100%',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    // Firefox
    scrollbarWidth: 'none'
  }, 
  drawerHeader: {
    backgroundColor: '#EEF0EB', 
    overflow: 'overlay', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between'        
  },
  menuRoot : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent : 'space-between',
    width: '20rem'
  }  
}));

function App() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { classes } = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);
  
  const [/*open*/, setOpen] = useState(false);
  const [/*popupMsg*/, setPopupMsg] = useState('');
  const [/*popupMsgType*/, setPopupMsgType] = useState('error');
  const [/*openPopup*/, setOpenPopup] = useState(false);


  //const [page, setPage] = useState<{page: null | string}>({ page: '' });
  const [page, setPage] = useState({});

  const pages = ['about', 'projects', 'contact'];  
   
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  }

  const handleOpenDrawer = (page: string) => {
    setOpenDrawer(true);
    setPage(page);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.menuRoot}>
          {pages.map((p) => {
            return (
              <div 
                onClick={()=>handleOpenDrawer(p)}
              >
                {p}
              </div>
            )
          })}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
        <SwipeableDrawer
                anchor={isSm ? 'bottom' : 'right'}
                open={openDrawer}
                onClose={handleCloseDrawer}
                onOpen={() => {setOpenDrawer(true)}}
                classes={{ paper: isSm ? classes.drawerPaperNarrow : classes.drawerPaper }}
            >
                <div>
                    <div className={classes.drawerHeader}>
                        <IconButton 
                            onClick={()=>{handleCloseDrawer(); setPage('');}}
                            style={{paddingLeft: '0.8rem'}}                        
                        >
                            {<CloseIcon className={classes.closeButton}/>}
                        </IconButton>
                        {/* { page === 'resume' &&
                            <Tooltip title='download' placement='right'>
                                <IconButton onClick={onDownload}>
                                    {<SaveAltIcon style={{ fill: 'grey' }} />}
                                </IconButton>
                            </Tooltip>
                        } */}
                    </div>
                    { page === 'about' && <About content={aboutContent}/>}
                    { page === 'projects' && <Projects productList={productList}/>}
                    { page === 'contact' && 
                      <Contact 
                        setOpenPopup={setOpenPopup}
                        setPopupMsg={setPopupMsg}
                        setPopupMsgType={setPopupMsgType}
                        setOpen={setOpen}
                      />
                    }
                </div>                
          </SwipeableDrawer>
    </div>
  );
}

export default App;
