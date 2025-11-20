import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMap } from "react-icons/fa";

const DetailCard = ({ item }) => {
  // console.log(item.borders);

  const navigate = useNavigate();

  return (
    <div className="detail">
      {
        <div className="detail-card">
          <img src={item.flags.png} alt="" />
          <p>
            <b>Official Name:</b> {item.name.official}
          </p>
          <p>
            <b>Common Name:</b> {item.name.common}
          </p>
          <p>
            {item.unMember
              ? "Not a member of United Nations"
              : "A member of United Nations"}
          </p>
          <p>
            <b>Region: </b>
            {item.region}
          </p>
          <p>
            <b>Subregion: </b> : {item.capital}
          </p>
          <p>
            <b>Population:</b> {item.population}
          </p>
          <a href={item.maps.googleMaps} target={"_blank"}>
            <FaMap size={30} />
          </a>
          <p>
            <b>Borders</b>
          </p>
          <div className="borders">
            {item.borders.length == 0 ? (
              <p>Serhedleri yoxdur</p>
            ) : (
              item.borders.map((el) => {
                return (
                  <span
                    className="border"
                    onClick={() => navigate(`/detail/${el}`)}
                  >
                    {el}
                  </span>
                );
              })
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default DetailCard;
