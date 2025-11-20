import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import DetailCard from "../components/DetailCard";

const Detail = () => {
  const { countries } = useContext(Context);
  const { id } = useParams();
  const element = countries.filter((item) => item.cca3 == id);
  // console.log(id);
  return (
    <div>
      {element.map((item) => {
        return (
          <div key={crypto.randomUUID()}>
            {/* {item.name.common} */}
            <DetailCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
