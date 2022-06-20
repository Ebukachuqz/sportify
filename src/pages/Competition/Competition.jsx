import { Box, Breadcrumbs, Grid, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Matches from "../../components/Matches/Matches";
import Standings from "../../components/Standings/Standings";
import useFetch from "../../hooks/useFetch";

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #292a2a;
  transition: box-shadow 0.15s;
  box-shadow: inset 0 -2px 0 0 #347ab8;
  cursor: pointer;
  padding: 5px;

  :hover {
    box-shadow: inset 0 -2rem 0 0 #347ab8;
    color: #fff !important;
    text-decoration: none;
  }
`;

const Tab = styled(Box)`
  margin: 20px -15px;
  padding: 0 15px;
  background-color: #dd7c00;
  display: flex;
  color: white;
  justify-self: center;
  align-items: center;
`;

const TabLabel = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 130px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;

  :hover {
    border-bottom: 3px solid white;
  }
`;

const Competition = () => {
  const [standings, setStandings] = useState(true);
  const [matches, setMatches] = useState(false);
  const { id } = useParams();

  const toggle = (tab) => {
    if (tab === "m") {
      setStandings(false);
      setMatches(true);
    } else {
      setStandings(true);
      setMatches(false);
    }
  };
  return (
    <>
      <Breadcrumbs
        sx={{
          padding: "8px 0",
          marginBottom: "16px",
          fontSize: "18px",
          fontFamily: '"Poppins", sans-serif',
        }}
        aria-label="breadcrumb"
      >
        <BreadcrumbLink to="/">All Competitions</BreadcrumbLink>
        <Typography color="muted">{id}</Typography>
      </Breadcrumbs>
      <Typography
        sx={{ fontSize: "24px", marginBottom: "8px", color: "#347ab8" }}
        variant="h4"
      >
        LIGUE 1
      </Typography>
      {/* Tab */}
      <Tab>
        <Grid container>
          <Grid item xs={6}>
            <TabLabel
              onClick={() => toggle("s")}
              className={standings ? "active" : ""}
            >
              STANDINGS
            </TabLabel>
          </Grid>
          <Grid item xs={6}>
            <TabLabel
              onClick={() => toggle("m")}
              className={matches ? "active" : ""}
            >
              MATCHES
            </TabLabel>
          </Grid>
        </Grid>
      </Tab>
      {/* Tables */}
      {standings ? <Standings id={id} /> : <Matches />}
    </>
  );
};

export default Competition;
