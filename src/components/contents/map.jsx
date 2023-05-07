"use client";
import React, { useEffect, useState } from "react";
import { Map, Marker, Polyline } from "react-kakao-maps-sdk";
import markerData from "@/assets/markerData";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);

  useEffect(() => {
    if (value) {
      setConvertData(getResult(value));
    }
  }, [value]);

  return (
    <section className="map-section">
      <Map
        center={{ lat: 37.503223613853585, lng: 126.95167472871846 }}
        style={{ width: "100%", height: "100%" }}
        level={4}
      >
        {!!convertData.length && (
          <>
            {convertData.map((markerData) => (
              <Marker
                key={markerData.id}
                position={{ lat: markerData.lat, lng: markerData.lng }}
                image="//t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"
              />
            ))}

            {convertData.map((data) => (
              <Polyline
                key={data.id}
                path={data.coords}
                strokeColor={data.color}
                strokeOpacity={1}
              />
            ))}
          </>
        )}
      </Map>
    </section>
  );
};

export default MapComponent;
