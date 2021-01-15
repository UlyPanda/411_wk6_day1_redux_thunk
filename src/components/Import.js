import React, { useState } from 'react'
import { Button, Container, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Import = (props) => {
        const [makeId, setMakeId] = useState(null);

        const [anchorEl, setAnchorEl] = useState(null);
      
        const handleClick = (event, index) => {
          setAnchorEl(event.currentTarget);
          setMakeId(index);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
          setMakeId(null);
        };
      

    return (
    <Container maxWidth="md" className='import-container' >
            <h2> COUNT: {props.makes.length} </h2>
        <Button  onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align='right'>Make</TableCell>
                    <TableCell align='right'>Actions</TableCell>
                </TableRow>
            </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => (
                        <TableRow key={idx}>
                            <TableCell scope='make'>{make["MakeId"]}</TableCell>
                            <TableCell align='right'>{make["MakeName"]}</TableCell>
                            <TableCell align='right'>
                                <Button aria-controls='simple-menu' aria-haspopup='true' onClick={ (event) => handleClick(event, idx) } >
                                    <MoreVertIcon/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
        </Table>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem 
              onClick={() => {props.deleteMake(makeId) 
              handleClose() 
              }}>
              Delete
              </MenuItem>
            </Menu>
         

    </Container>

    )  
}

export default Import