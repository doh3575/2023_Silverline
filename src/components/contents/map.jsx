"use client";
import React, { useEffect, useState, useRef } from "react";
import { Map, MapMarker, Polyline, Roadview } from "react-kakao-maps-sdk";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const mapRef = useRef();
  const roadviewRef = useRef();

  const [center, setCenter] = useState({
    lat: 37.503223613853585,
    lng: 126.95167472871846,
  });

  const positions = [
    {
      title: "Raemian Sangdo 2nd Senior Citizen's Center",
      latlng: { lat: 37.4980381, lng: 126.958252 },
    },
  ];

  useEffect(() => {
    if (value) {
      setConvertData(getResult(value));
    }
  }, [value]);

  const handleRoadviewToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const map = mapRef.current;
    const roadview = roadviewRef.current;
    if (roadview && map) {
      roadview.relayout();
      map.relayout();
      map.setCenter(new window.kakao.maps.LatLng(center.lat, center.lng));
    }
  }, [isActive, center]);

  return (
    <section className="map-section">
      <Map
        center={{ lat: 37.503223613853585, lng: 126.95167472871846 }}
        style={{ width: "100%", height: "100%" }}
        level={4}
        ref={mapRef}
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

        {isActive && (
          <MapMarker
            position={center}
            draggable={true}
            onDragEnd={(marker) => {
              setCenter({
                lat: marker.getPosition().getLat(),
                lng: marker.getPosition().getLng(),
              });
            }}
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png",
              size: { width: 26, height: 46 },
              options: {
                spriteSize: { width: 1666, height: 168 },
                spriteOrigin: { x: 705, y: 114 },
                offset: { x: 13, y: 46 },
              },
            }}
          />
        )}

        <div className="toggle-button" onClick={handleRoadviewToggle}>
          {isActive ? "Close RoadView" : "Open RoadView"}
        </div>

        <button
          className={`toggle-button ${isActive ? "active" : ""}`}
          onClick={handleRoadviewToggle}
        ></button>
      </Map>

      <div
        id="roadviewContainer"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "300px",
          height: "200px",
          display: isActive ? "block" : "none",
        }}
      >
        {isActive && (
          <div className="roadview-container">
            <Roadview
              position={positions[0].latlng}
              style={{ width: "100%", height: "100%" }}
            >
              <div className="close-button" onClick={handleRoadviewToggle}>
                Close RoadView
              </div>
            </Roadview>
          </div>
        )}
      </div>

      <style jsx>{`
        .toggle-button {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1;
          background-color: #fff;
          color: #000;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          font-size: 14px;
          cursor: pointer;
        }

        /* Style for the active state */
        .toggle-button.active {
          background-color: #000;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default MapComponent;
