"use client";
import { Card, CardBody } from "@heroui/react";
import Map, { Marker, Popup } from "react-map-gl/mapbox";
import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  mapToken?: string;
  latitude?: number;
  longitude?: number;
};

export default function InteractiveMap({
  mapToken,
  latitude = 40.7500213,
  longitude = -73.8839082,
}: Props) {
  const [showPopup, setShowPopup] = useState(true);

  if (!mapToken) {
    return (
      <Card className="h-full w-full">
        <CardBody>
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p>Mapbox token is required</p>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="h-full w-full">
      <CardBody className="p-0 overflow-hidden">
        <Map
          mapboxAccessToken={mapToken}
          initialViewState={{
            longitude: longitude,
            latitude: latitude,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker
            latitude={latitude}
            longitude={longitude}
            color="red"
            onClick={() => setShowPopup(true)}
          />

          {showPopup && (
            <Popup
              latitude={latitude}
              longitude={longitude}
              closeButton={false}
              closeOnClick={false}
              offset={10}
            >
              <div className="p-2">
                <h3 className="font-bold text-lg text-gray-900">
                  Neat Services Inc
                </h3>
                <p className="text-sm text-gray-700">
                  Professional Roofing Services
                </p>
              </div>
            </Popup>
          )}
        </Map>
      </CardBody>
    </Card>
  );
}
