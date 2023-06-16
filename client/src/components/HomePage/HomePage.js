import React from "react";
import "./HomePage.css";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Grid,
  CssBaseline,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function HomePage() {
  const defaultTheme = createTheme();
  const resources = [
    [
      "Diaper Bank", 
      "https://www.juniorleaguefw.org/diaperbank/", 
      "Ft. Worth"
    ],
    [
      "Hope Supply Co.", 
      "https://hopesupplyco.org/", 
      "Dallas - North Dallas"
    ],
    [
      "ilooklikeLOVE",
      "https://www.ilooklikelove.org/about-us",
      "Dallas - South Dallas/Cedars",
    ],
    [
      "Serve South Dallas",
      "https://servesouthdallas.org",
      "Dallas - South Dallas/Fair Park",
    ],
    [
      "Brother Bill's Helping Hands",
      "https://bbhh.org/",
      "Dallas - West Dallas/Oak Cliff",
    ],
    [
      "The Family Place", 
      "https://www.familyplace.org/", 
      "Dallas"
    ],
    [
      "Thrive Women's Clinic",
      "https://thrivewomensclinic.com/",
      "Irving, West Dallas, and Central Dallas",
    ],
    [
      "Genesis Women's Shelter",
      "https://www.genesisshelter.org/about/",
      "Dallas - South Oak Cliff",
    ],
    [
      "Texas Diaper Bank",
      "https://www.texasdiaperbank.org/about-us/",
      "San Antonio",
    ],
  ];

  const resourcesToDisplay = resources.map((row) => {
    return (
      <TableRow
        key={row[0]}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Link href={row[1]} underline="hover" target="_blank" rel="noopener">
            {" "}
            {row[0]}{" "}
          </Link>
        </TableCell>
        <TableCell align="right">{row[2]}</TableCell>
      </TableRow>
    );
  });

  return (
    <div id="home">
      <div id="home-welcome">
        <Typography variant="h1" component="h2">
          Elephant-List
        </Typography>
        <Typography variant="h4" component="h5">
          "We admire elephants in part because they demonstrate what we consider
          the finest human traits: empathy, self-awareness, and social
          intelligence."
        </Typography>
        <Typography variant="h6" component="h6">
          -Graydon Carter
        </Typography>
      </div>

      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "60vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(%PUBLIC_URL%../../../../pictures/home.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            id="home-about"
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h3" component="h3">
                  About Elephant-List
                </Typography>
                <br></br>
                <Typography variant="h6" component="h6">
                  Elephant-List is designed to build a community of those who
                  are able to donate quality items related to parenthood.
                  Anything from diapers that no longer fit your growing child to
                  breast-pumps, baby bottles, toys, or books.{" "}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" component="h6">
                  If you have anything that might be helpful in the hands of a
                  another family, Elephant-List is here to help you get
                  connected.{" "}
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>

      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "60vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            id="home-resources"
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div id="home-resources">
                <Typography variant="h5" component="h6">
                  Additional resources in the DFW area
                </Typography>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Organization</TableCell>
                        <TableCell align="right">Location</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{resourcesToDisplay}</TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(%PUBLIC_URL%../../../../pictures/bottom.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default HomePage;
