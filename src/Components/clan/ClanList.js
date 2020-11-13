import { Box, Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useStyles } from "../../useStyles";
import { ClanCard } from "./ClanCard";

export const ClanList = ({ history }) => {
  const classes = useStyles();
  const [load, setLoad] = useState(true);
  const [clans, setClans] = useState(null);

  useEffect(() => {
    const getClan = async () => {
      const url = "https://localhost:3002/api/clan/";
      const options = {
        method: "GET",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        url: url,
      };
      try {
        const { data } = await Axios(options);
        console.log(data);
        setClans(data);
        setLoad(false);
      } catch (e) {
        console.error(e);
      }
    };
    getClan();
  }, []);

  return (
    <Box mx={2} my={2}>
      <Grid container spacing={2} justify="center">
        {!load &&
          clans.map((clan) => {
            return <ClanCard {...clan} key={clan._id} />;
          })}
      </Grid>
    </Box>
  );
};
