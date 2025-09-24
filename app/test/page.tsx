"use client";
import React, { useEffect } from "react";

declare global {
  interface Window {
    initMap: () => void;
  }
}

export default function Page() {
  useEffect(() => {
    // Define initMap globally for Google callback
    window.initMap = () => {
      const location = { lat: 40.7500213, lng: -73.8839082 }; // Example: Queens
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 14,
          center: location,
        }
      );
      new google.maps.Marker({
        position: location,
        map,
        title: "Neat Services Inc",
      });
    };

    // Dynamically inject script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCsjJaQldouAQUltWdw8YANTgDtIofIh10&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
}
