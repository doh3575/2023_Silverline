"use client";
import React, { useEffect, useState } from "react";
import { Map, Polyline } from "react-kakao-maps-sdk";
import markerData from "@/assets/markerData";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);
  const positions = [
    {
      title: "상도1동주민센터",
      latlng: { lat: 37.4980901, lng: 126.953061 },
    },
    {
      title: "상도패리스경로당",
      latlng: { lat: 37.5035055, lng: 126.953951 },
    },
  ];

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
        {positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35,
              }, // 마커이미지의 크기입니다
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
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
      </Map>
    </section>
  );
};

export default MapComponent;
