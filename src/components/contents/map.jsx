"use client";
import React, { useEffect, useState, useRef } from "react";
import { Map, MapMarker, Roadview } from "react-kakao-maps-sdk";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);
  const roadviewRef = useRef();

  const positions = [
    {
      title: "Sangdo 1-dong Community Service Center",
      latlng: { lat: 37.4980901, lng: 126.953061 },
    },
    // ... (remaining positions)
  ];

  useEffect(() => {
    if (value) {
      setConvertData(getResult(value));
    }
  }, [value]);

  const handlePositionChanged = (rv) => {
    const lat = rv.getPosition().getLat();
    const lng = rv.getPosition().getLng();
    // Do something with the updated position
  };

  return (
    <section className="map-section">
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Map
          center={{ lat: 37.503223613853585, lng: 126.95167472871846 }}
          style={{ width: "100%", height: "300px" }}
          level={4}
        >
          {positions.map((position, index) => (
            <MapMarker
              key={`${position.title}-${position.latlng}`}
              position={position.latlng}
              image={{
                src: "https://ifh.cc/g/W0sr2l.png",
                size: { width: 24, height: 35 },
              }}
              title={position.title}
            />
          ))}
        </Map>

        <div style={{ width: "50%", overflow: "hidden" }}>
          <Roadview
            position={{
              lat: 37.503223613853585,
              lng: 126.95167472871846,
              radius: 50,
            }}
            style={{ width: "100%", height: "300px" }}
            onPositionChanged={handlePositionChanged}
            ref={roadviewRef}
          />
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
