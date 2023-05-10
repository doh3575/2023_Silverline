"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Map,
  MapMarker,
  Polyline,
  MapTypeId,
  Roadview,
} from "react-kakao-maps-sdk";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
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
  }, [isActive, center, isActive]);

  return (
    <section className="map-section">
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <Map
        center={{ lat: 37.503223613853585, lng: 126.95167472871846 }}
        style={{ width: !isVisible ? "100%" : "50%", height: "100%" }}
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
          <>
            <MapTypeId type={kakao.maps.MapTypeId.ROADVIEW} />
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
          </>
        )}
      </Map>

      <div
        id="roadviewControl"
        className={isActive ? "active" : ""}
        onClick={() => {
          setIsVisible(true);
          setIsActive(!isActive);
        }}
      >
        <span className="img"></span>
      </div>
      <div
        style={{
          position: "relative",
          width: isVisible ? "50%" : "0",
          overflow: "hidden",
        }}
      >
        <Roadview // 로드뷰를 표시할 Container
          position={{ ...center, radius: 50 }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "100%",
          }}
          onPositionChanged={(rv) => {
            setCenter({
              lat: rv.getPosition().getLat(),
              lng: rv.getPosition().getLng(),
            });
          }}
          onPanoidChange={() => {
            isActive && setIsVisible(true);
          }}
          onErrorGetNearestPanoId={() => {
            setIsVisible(false);
          }}
          ref={roadviewRef}
        >
          <div
            id="close"
            title="로드뷰닫기"
            onClick={() => setIsVisible(false)}
          >
            <span className="img"></span>
          </div>
        </Roadview>
      </div>
    </section>
  );
};

export default MapComponent;
