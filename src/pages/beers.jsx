import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Beers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        // console.log("Result:", result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.log("err:", err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Getting data...</div>;
  }

  if (isError) {
    return <div>Doh...</div>;
  }
  return (
    <div>
      <Header />
      <h1>Beers</h1>
      {data.map((beer) => {
        console.log("Beer:", beer);
        return (
          <article
            key={beer._id}
            // onClick={() => {
            //   navigate(`/beer/${beer.slug}`);
            // }}
            style={{ cursor: "pointer" }}
          >
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
            </Link>

            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <h3>Created by: {beer.contributed_by}</h3>
          </article>
        );
      })}
    </div>
  );
}

export default Beers;
