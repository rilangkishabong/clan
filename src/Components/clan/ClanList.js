import Axios from "axios";
import React, { useEffect, useState } from "react";

export const ClanList = () => {
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
    <div>
      {!load &&
        clans.map((clan, index) => (
          <div key={index}>{`${clan.name} ${clan.origin}`}</div>
        ))}
    </div>
  );
};
