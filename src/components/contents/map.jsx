"use client";
import React, { useEffect, useState } from "react";
import { Map, MapMarker, Polyline, Roadview } from "react-kakao-maps-sdk";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);
  const [roadviewVisible, setRoadviewVisible] = useState(false); // add state for roadview visibility
  const positions = [
    {
      title: "Sangdo 1-dong Community Service Center",
      latlng: { lat: 37.4980901, lng: 126.953061 },
    },
  ]; // positions array

  useEffect(() => {
    if (value) {
      setConvertData(getResult(value));
    }
  }, [value]);

  const handleRoadviewToggle = () => {
    setRoadviewVisible(!roadviewVisible); // toggle roadview visibility state
  };

  return (
    <section className="map-section">
      <Map
        center={{ lat: 37.503223613853585, lng: 126.95167472871846 }}
        style={{ width: "100%", height: "100%" }}
        level={4}
      >
        {positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng}
            image={{
              src: "https://ifh.cc/g/W0sr2l.png",
              size: {
                width: 24,
                height: 35,
              },
            }}
            title={position.title}
          />
        ))}

        {!!convertData.length && (
          <>
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

        {roadviewVisible && (
          <Roadview
            position={{
              lat: 37.503223613853585,
              lng: 126.95167472871846,
            }}
            pov={{
              pan: 180,
              tilt: 0,
              zoom: 0,
            }}
          />
        )}
      </Map>
      <button
        onClick={handleRoadviewToggle}
        style={{
          padding: "8px 16px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Toggle Roadview
      </button>
    </section>
  );
};

export default MapComponent;
