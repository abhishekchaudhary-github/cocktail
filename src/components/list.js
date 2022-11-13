import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "./listComp";

function list() {
  const [lis, setLis] = useState([]);
  const { url, setLoading } = useContext(Provider);
  useEffect(() => {
    fetchfn();
    // return ()=>{

    // }
  }, []);
  const fetchfn = async () => {
    const data = await axios(url, { headers: { Accept: "application/json" } });
    setLis(data);
    setLoading(false);
  };
  return (
    <div>
      {lis.map((e) => {
        <Card img={e.strDrinkThumb} key={e.idDrink} />;
      })}
    </div>
  );
}

export default list;
