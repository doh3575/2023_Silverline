"use client";
import React, { useEffect, useState } from "react";
import { Map, Polyline } from "react-kakao-maps-sdk";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);

  useEffect(() => {
    if (value) {
      setConvertData(getResult(value));
      addMarkers(); // call the function that adds markers
    }
  }, [value]);

  const addMarkers = () => {
    var mapContainer = document.getElementById("map"); // get the map container
    var options = {
      center: new kakao.maps.LatLng(37.503223613853585, 126.95167472871846),
      level: 4,
    };
    var map = new kakao.maps.Map(mapContainer, options); // create the map instance

    // create an array of marker positions and titles
    var positions = [
      {
        title: "상도1동주민센터",
        latlng: new kakao.maps.LatLng(37.4980901, 126.953061),
      },
      {
        title: "상도패리스경로당",
        latlng: new kakao.maps.LatLng(37.5035055, 126.953951),
      },
      {
        title: "상도엠코타운애스톤파크아파트경로당",
        latlng: new kakao.maps.LatLng(37.4965206, 126.948923),
      },
    ];

    // marker 이미지 주소
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    // create a marker for each position
    for (var i = 0; i < positions.length; i++) {
      var imageSize = new kakao.maps.Size(24, 35); // 마커 이미지 사이즈
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 마커 이미지 생성
      // 마커 생성
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, //마커의 위치
        title: positions[i].title, // 마커의 타이틀
        image: markerImage, // 마커 이미지
      });
    }
  };

  return (
    <section className="map-section">
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
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
    </section>
  );
};

export default MapComponent;
