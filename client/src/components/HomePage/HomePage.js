import React from 'react'
import './HomePage.css'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material'

function HomePage() {

  const resources = [
    ["Diaper Bank", "https://www.juniorleaguefw.org/diaperbank/", "Ft. Worth"],
    ["Hope Supply Co.", "https://hopesupplyco.org/", "Dallas - North Dallas"],
    ["ilooklikeLOVE", "https://www.ilooklikelove.org/about-us", "Dallas - South Dallas/Cedars"],
    ["Serve South Dallas", "https://servesouthdallas.org", "Dallas - South Dallas/Fair Park"],
    ["Brother Bill's Helping Hands", "https://bbhh.org/", "Dallas - West Dallas/Oak Cliff"],
    ["The Family Place", "https://www.familyplace.org/", "Dallas"],
    ["Thrive Women's Clinic", "https://thrivewomensclinic.com/", "Irving, West Dallas, and Central Dallas"],
    ["Genesis Women's Shelter", "https://www.genesisshelter.org/about/", "Dallas - South Oak Cliff"],
    ["Texas Diaper Bank", "https://www.texasdiaperbank.org/about-us/", "San Antonio" ]
  ];

  const resourcesToDisplay = resources.map(row=>{
    return (
      <TableRow
        key={row[0]}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Link href={row[1]} underline="hover" target="_blank" rel="noopener"> {row[0]} </Link>
        </TableCell>
        <TableCell align="right">{row[2]}</TableCell>
      </TableRow>
    )
  })

  return (
    <div id= "home">
        <Typography variant="h1" component="h2">Elephant-List</Typography >


        <div id="home-welcome">
          <Typography variant="h4" component="h5">This is a subtitle slogan about Elephant-List</Typography>
        </div>


        <div id="home-about">
          <Typography variant="h4" component="h3">About Section</Typography >
          <Typography variant="p" component="p">Elephant-List is designed to build a community of parents who donate quality items related to parenthood. Anything from diapers that no longer fit your growing child to breast-pumps, baby bottles, toys, or books. If you have anything that might be helpful in the hands of a another family, Elephant-List is here to help you get connected.</Typography>
        </div>


        <div id="home-resources">
          <Typography variant="h4" component="h3">Resources Section</Typography >
          <Typography variant='h6' component="h6">Additional resources in the DFW area</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Organization</TableCell>
                  <TableCell align="right">Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resourcesToDisplay}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  )
};

export default HomePage