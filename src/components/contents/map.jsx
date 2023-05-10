"use client";
import React, { useEffect, useState, useRef } from "react";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef();
  const roadviewRef = useRef();

  const [center, setCenter] = useState({
    lat: 37.4980901,
    lng: 126.953061,
  });

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

  useEffect(() => {
    const map = mapRef.current;
    const roadview = roadviewRef.current;
    if (roadview && map) {
      roadview.relayout();
      map.relayout();
      map.setCenter(new window.kakao.maps.LatLng(center.lat, center.lng));
    }
  }, [isVisible, center, isActive]);

  const handleRoadviewToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      const container = document.getElementById("roadviewContainer");
      const roadview = new window.kakao.maps.Roadview(container);

      roadview.setPanoId(null, center, 50);
      setIsVisible(true);

      return () => {
        setIsVisible(false);
      };
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

        <button
          className={`toggle-button ${isActive ? "active" : ""}`}
          onClick={handleRoadviewToggle}
        >
          Toggle RoadView
        </button>
      </Map>
      <div
        id="roadviewContainer"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "300px",
          height: "200px",
          display: isVisible ? "block" : "none",
        }}
      />
    </section>
  );
};

export default MapComponent;
