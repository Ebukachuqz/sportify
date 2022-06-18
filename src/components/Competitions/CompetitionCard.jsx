import { Box, Paper, styled } from "@mui/material";
import React from "react";

const Card = styled(Paper)`
  display: flex;
  align-items: center;
  color: #4d4d4d;
  padding: 15px;
  box-shadow: 0 5px 17px rgba(0, 0, 0, 0.175) !important;

  :hover {
    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.175) !important;
  }
`;

const Emblem = styled("div")`
  width: 30%;
  flex: 1;
  max-width: 80px;
  margin-right: 10px;

  img {
    max-height: 100px;
    max-width: 100%;
    height: auto;
  }
`;

const Details = styled(Box)`
  flex: 1;

  h4 {
    font-size: 1.2rem;
  }
  h6 {
    font-size: 80%;
    margin-top: -20px;

    font-weight: 400;
  }
`;

const CompetitionCard = ({ image, name, country }) => {
  return (
    <Card>
      <Emblem>
        <img src={image} alt={name} />
      </Emblem>
      <Details>
        <h4>{name}</h4>
        <h6>{country}</h6>
      </Details>
    </Card>
  );
};

export default CompetitionCard;
