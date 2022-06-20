import { Paper, styled } from "@mui/material";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

const Container = styled(Paper)`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.275) !important;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 2rem;
`;

const Table = styled("div")`
  padding: 2rem 1rem;
  width: fit-content;
`;

const Row = styled("div")`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 0.5px solid #dedede;

  div {
    flex: 1;
    margin: 5px;
    min-width: 30px;
    text-align: center;
  }
  div:nth-of-type(2) {
    flex: 2;
    min-width: 200px;
    text-align: left;
  }
`;

const Standings = ({ id }) => {
  const url = `https://api.football-data.org/v2/competitions/${id}/standings?standingType=TOTAL`;
  const { data, loading } = useFetch(url);
  const group = data.standings;
  // const [y] = group;
  // let group = [];
  // for (let key in y) {
  //   // console.log(key);
  //   // console.log(y[key]);
  //   group.push(y[key]);
  // }
  // for (let key in group) {
  //   console.log(Object.values(key)[0]);
  //   // console.log(y[key]);
  // }
  // console.log(y);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Table>
        {/* Header */}
        <Row
          sx={{
            fontWeight: "600",

            color: "#6c757d !important",
          }}
        >
          <div></div>
          <div>Team</div>
          <div>MP</div>
          <div>W</div>
          <div>D</div>
          <div>L</div>
          <div>GF</div>
          <div>GA</div>
          <div>Pts</div>
        </Row>

        {/* Data */}
        {group.table.map((team) => {
          <Row sx={{ cursor: "pointer" }}>
            <div>{team.position}</div>
            <div>{team.team.name}</div>
            <div>{team.playedGames}</div>
            <div>{team.won}</div>
            <div>{team.draw}</div>
            <div>{team.lost}</div>
            <div>{team.goalsFor}</div>
            <div>{team.goalsAgainst}</div>
            <div>{team.points}</div>
          </Row>;
        })}
      </Table>
    </Container>
  );
};

export default Standings;
