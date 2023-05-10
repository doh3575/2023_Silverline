"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Map,
  MapMarker,
  Polyline,
  MapTypeId,
  Roadview,
  RoadviewOverlay,
} from "react-kakao-maps-sdk";
import { getResult } from "@/assets/utils";

const MapComponent = ({ value }) => {
  const [convertData, setConvertData] = useState([]);
  const [isRoadViewActive, setIsRoadViewActive] = useState(false);
  const roadviewRef = useRef();

  const positions = [...]; // Your array of positions

  useEffect(() => {
    if (value) {
      setConvertData(getResult(value));
    }
  }, [value]);

  const toggleRoadView = () => {
    setIsRoadViewActive(!isRoadViewActive);
  };

  const handleRoadViewClose = () => {
    setIsRoadViewActive(false);
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
              size: { width: 24, height: 35 },
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

        {isRoadViewActive && (
          <>
            <MapTypeId type="roadview" />
            <MapMarker position={positions[0].latlng} />
          </>
        )}

        <div
          id="roadviewControl"
          className={isRoadViewActive ? "active" : ""}
          onClick={toggleRoadView}
        >
          <span className="img"></span>
        </div>
      </Map>

      {isRoadViewActive && (
        <Roadview
          position={positions[0].latlng}
          style={{ width: "100%", height: "300px" }}
          ref={roadviewRef}
          onPositionChanged={(rv) => {
            const position = rv.getPosition();
            // Handle position change if needed
          }}
          onPanoidChange={() => {
            // Handle pano ID change if needed
          }}
          onErrorGetNearestPanoId={() => {
            // Handle error getting nearest pano ID if needed
          }}
        >
          <div id="close" title="로드뷰닫기" onClick={handleRoadViewClose}>
            <span className="img"></span>
          </div>
          {/* Additional road view content */}
        </Roadview>
      )}
    </section>
  );
};

export default MapComponent;
