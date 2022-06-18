import { Grid } from "@mui/material";
import React from "react";
import CompetitionCard from "../../components/Competitions/CompetitionCard";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch";

const url = `https://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE`;

const Home = () => {
  const { data, loading } = useFetch(url);
  const competitions = data.competitions;
  console.log(data, loading);
  console.log(competitions);
  return (
    <>
      <h4>All Competitions</h4>
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={{ xs: 2 }}>
          {competitions.map((competition) => {
            return (
              <Grid item xs={12} sm={6} key={competition.id}>
                <CompetitionCard
                  name={competition.name}
                  image={competition.emblemUrl}
                  country={competition.area.name}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Home;
