import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='corbarra'>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                HOME
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                POSTAGENS
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                TEMAS
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                CADASTRAR TEMAS
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                LOGOUT
                            </Typography>
                        </Box>
                        </Link>                     
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;