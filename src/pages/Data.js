import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

export default function StickyHeadTable() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://wild-gray-pike-yoke.cyclic.app/data")
      .then(res => res.json())
      .then(
        (result) => {

          setItems(result);
        }
      )
  }, [])

  const handleDelete = (id) => {
    fetch(`https://wild-gray-pike-yoke.cyclic.app/data/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Error deleting data');
      })
      .then((result) => {
        if (result.status === 'ok') {
          alert('Delete 🟢');
          window.location.reload();
          // fetchData();
        }
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };


  const handleMouseEnter = (row) => {
    row.isHovered = true;
    // อัปเดตสถานะแถวเมื่อเม้าส์เข้าไปในเซลล์
  };

  const handleMouseLeave = (row) => {
    row.isHovered = false;
    // อัปเดตสถานะแถวเมื่อเม้าส์ออกจากเซลล์
  };

  return (
    <>
    <br />
      <Paper sx={{ p: 2 }} className="data_button">
      
        <Stack spacing={2} direction="row" sx={{  marginLeft:'10%'}}>

          <Link to="../AddData">
            <Button variant="outlined">เพิ่มข้อมูล</Button>
          </Link>
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginTop:'-36%', marginLeft:'-12%'}}>
        <Link to="../create"> <LoadingButton fullWidth size="large"  sx={{mt: 3, mb: 2, bgcolor: 'yallow', borderRadius: '30px' ,width: '200px' }}>
                        back
                    </LoadingButton>
                    </Link>
                    </Stack>
      </Paper>
      <hr />
      <Box sx={{ width: '1465px', height: '300px', p: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>prefix</TableCell>
                <TableCell align="right">fullNameThai</TableCell>
                <TableCell align="right">fullNameEng</TableCell>
                <TableCell align="right">gender</TableCell>
                <TableCell align="right">birthday</TableCell>
                <TableCell align="right">maritalStatus</TableCell>
                <TableCell align="right">religion</TableCell>
                <TableCell align="right">nationality</TableCell>
                <TableCell align="right">idAddress</TableCell>
                <TableCell align="right">currentAddress</TableCell>
                <TableCell align="right">Work_address</TableCell>
                <TableCell align="right">personal_id</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">phoneNumber</TableCell>
                <TableCell align="right">Positon</TableCell>
                <TableCell align="right">department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                {row.employee_ID}
              </TableCell> */}
                  <TableCell align="right">{row.prefix}</TableCell>
                  <TableCell align="right">{row.fullNameThai}</TableCell>
                  <TableCell align="right">{row.fullNameEng}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.birthday}</TableCell>
                  <TableCell align="right">{row.maritalStatus}</TableCell>
                  <TableCell align="right">{row.religion}</TableCell>
                  <TableCell align="right">{row.nationality}</TableCell>
                  <TableCell align="right">{row.idAddress}</TableCell>
                  <TableCell align="right">{row.currentAddress}</TableCell>
                  <TableCell align="right">{row.Work_address}</TableCell>
                  <TableCell align="right">{row.personal_id}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">{row.Positon}</TableCell>
                  <TableCell align="right">{row.department}</TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: 'red',
                      borderColor: 'red',
                      backgroundColor: 'white',
                      transition: 'color 0.3s, border-color 0.3s, background-color 0.3s',
                    }}
                    onMouseEnter={() => handleMouseEnter(row)}
                    onMouseLeave={() => handleMouseLeave(row)}
                    className={row.isHovered ? 'hovered' : ''}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => handleDelete(row.employee_ID)}
                      style={{
                        color: 'red',
                        borderColor: 'red',
                      }}
                    >
                      ลบ
                    </Button>
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </Box>

    </>
  );
}

