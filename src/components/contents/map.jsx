"use client";
import React, { useEffect, useState } from "react";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
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
    {
      title: "상도엠코타운애스톤파크아파트경로당",
      latlng: { lat: 37.4965206, lng: 126.948923 },
    },
    {
      title: "상도종합사회복지관",
      latlng: { lat: 37.5024675, lng: 126.949586 },
    },
    {
      title: "삼환나우빌아파트경로당",
      latlng: { lat: 37.4983167, lng: 126.95651 },
    },
    {
      title: "래미안상도3차아파트경로당",
      latlng: { lat: 37.4992621, lng: 126.954689 },
    },
    {
      title: "삼호아파트경로당",
      latlng: { lat: 37.4934156, lng: 126.957282 },
    },
    {
      title: "래미안상도2차아파트경로당",
      latlng: { lat: 37.4980381, lng: 126.958252 },
    },
    {
      title: "고경경로당",
      latlng: { lat: 37.4974057, lng: 126.953842 },
    },
    {
      title: "청송경로당",
      latlng: { lat: 37.4972423, lng: 126.950992 },
    },
    {
      title: "상도에스에이치빌아파트경로당",
      latlng: { lat: 37.5021091, lng: 126.954348 },
    },
    {
      title: "터널경로당",
      latlng: { lat: 37.5064687, lng: 126.951303 },
    },
    {
      title: "중앙하이츠아파트경로당",
      latlng: { lat: 37.4991068, lng: 126.94969 },
    },
    {
      title: "상도1동경로당",
      latlng: { lat: 37.5003495, lng: 126.948208 },
    },
    {
      title: "힐스테이트상도센트럴파크아파트경로당",
      latlng: { lat: 37.4953952, lng: 126.950858 },
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
              src: "https://ifh.cc/g/W0sr2l.png", // 마커이미지의 주소입니다
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
