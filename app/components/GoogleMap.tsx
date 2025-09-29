"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    initMap: (() => void) | undefined;
    google?: {
      maps: {
        Map: unknown;
        Marker: unknown;
        InfoWindow: unknown;
        Size: unknown;
        places: {
          PlacesService: unknown;
          PlacesServiceStatus: unknown;
        };
      };
    };
  }
}

type ComponentProps = {
  width?: string;
  height?: string;
};

export default function GoogleMap({
  width = "100%",
  height = "400px",
}: ComponentProps) {
  useEffect(() => {
    const initializeMap = () => {
      const location = { lat: 40.7500213, lng: -73.8839082 }; // Example: Queens
      const mapElement = document.getElementById("map");

      if (!mapElement) return;

      const map = new google.maps.Map(mapElement, {
        zoom: 14,
        center: location,
      });

      // Create Places service
      const service = new google.maps.places.PlacesService(map);

      // Search for your business by name and location
      const request = {
        query: "Neat Services Inc",
        location: location,
        radius: 500,
      };

      service.textSearch(request, (results, status) => {
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          results?.[0]
        ) {
          const place = results[0];

          // Create marker at the business location
          const marker = new google.maps.Marker({
            position: place.geometry?.location,
            map,
            title: place.name,
          });

          // Create info window with business details
          const infoWindow = new google.maps.InfoWindow({
            content: `
    <div style="
      max-width: 220px;
      color: #000;
      font-family: Arial, sans-serif;
      line-height: 1.4;
    ">
      <h3 style="margin: 0 0 4px; font-size: 15px; font-weight: bold;">
        ${place.name}
      </h3>
      <p style="margin: 0 0 4px; font-size: 13px;">
        <strong>Rating:</strong> ${place.rating || "N/A"} ⭐
      </p>
      <p style="margin: 0; font-size: 13px; color: #444;">
        <strong>Address:</strong> ${place.formatted_address}
      </p>
    </div>
  `,
            pixelOffset: new google.maps.Size(0, -10), // shifts bubble up
          });

          // Show info window when marker is clicked
          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });

          // Optionally show info window by default
          infoWindow.open(map, marker);
        } else {
          // Fallback to regular marker if business not found
          new google.maps.Marker({
            position: location,
            map,
            title: "Neat Services Inc",
          });
        }
      });
    };

    // Check if Google Maps is already loaded
    if (typeof google !== "undefined" && google.maps) {
      initializeMap();
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com"]'
    );
    if (existingScript) {
      // Script exists, wait for it to load
      const handleLoad = () => initializeMap();
      existingScript.addEventListener("load", handleLoad);
      return () => existingScript.removeEventListener("load", handleLoad);
    }

    // Define initMap globally for Google callback
    window.initMap = initializeMap;

    // Dynamically inject script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Clean up the global callback
      if (window.initMap === initializeMap) {
        window.initMap = undefined;
      }
    };
  }, []);

  return <div id="map" style={{ height, width }} />;
}
