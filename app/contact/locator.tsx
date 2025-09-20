"use client";
import { useRef, useState } from "react";
import {
  AdvancedMarker,
  Map,
  Pin,
  APIProvider,
} from "@vis.gl/react-google-maps";
import dynamic from "next/dynamic";

const PlaceReviews = dynamic(
  () =>
    import("@googlemaps/extended-component-library/react").then(
      (mod) => mod.PlaceReviews
    ),
  { ssr: false }
);
const PlaceDataProvider = dynamic(
  () =>
    import("@googlemaps/extended-component-library/react").then(
      (mod) => mod.PlaceDataProvider
    ),
  { ssr: false }
);
const PlaceDirectionsButton = dynamic(
  () =>
    import("@googlemaps/extended-component-library/react").then(
      (mod) => mod.PlaceDirectionsButton
    ),
  { ssr: false }
);
const IconButton = dynamic(
  () =>
    import("@googlemaps/extended-component-library/react").then(
      (mod) => mod.IconButton
    ),
  { ssr: false }
);
const PlaceOverview = dynamic(
  () =>
    import("@googlemaps/extended-component-library/react").then(
      (mod) => mod.PlaceOverview
    ),
  { ssr: false }
);
const SplitLayout = dynamic(
  () =>
    import("@googlemaps/extended-component-library/react").then(
      (mod) => mod.SplitLayout
    ),
  { ssr: false }
);
const OverlayLayout = dynamic(
  () =>
    import("@googlemaps/extended-component-library/react").then(
      (mod) => mod.OverlayLayout
    ),
  { ssr: false }
);
const PlacePicker = dynamic(
  () =>
    import("@googlemaps/extended-component-library/react").then(
      (mod) => mod.PlacePicker
    ),
  { ssr: false }
);
import { OverlayLayout as TOverlayLayout } from "@googlemaps/extended-component-library/overlay_layout.js";
import { PlacePicker as TPlacePicker } from "@googlemaps/extended-component-library/place_picker.js";

const API_KEY = "";
const DEFAULT_CENTER = { lat: 38, lng: -98 };
const DEFAULT_ZOOM = 4;
const DEFAULT_ZOOM_WITH_LOCATION = 16;

export default function StoreLocator() {
  const overlayLayoutRef = useRef<TOverlayLayout>(null);
  const pickerRef = useRef<TPlacePicker>(null);
  const [college, setCollege] = useState<any | undefined>(undefined);

  return (
    <div className="App h-32">
      <APIProvider
        solutionChannel="GMP_QB_locatorplus_v11_cABCDE"
        apiKey={API_KEY}
      >
        <SplitLayout rowReverse rowLayoutMinWidth={700}>
          <div className="SlotDiv" slot="fixed">
            <OverlayLayout ref={overlayLayoutRef}>
              <div className="SlotDiv" slot="main">
                <PlacePicker
                  className="CollegePicker"
                  ref={pickerRef}
                  forMap="gmap"
                  country={["us", "ca"]}
                  type="university"
                  placeholder="Enter a college in the US or Canada"
                  onPlaceChange={() => {
                    if (!pickerRef.current?.value) {
                      setCollege(undefined);
                    } else {
                      setCollege(pickerRef.current?.value);
                    }
                  }}
                />
                <PlaceOverview
                  size="large"
                  place={college}
                  googleLogoAlreadyDisplayed
                >
                  <div slot="action" className="SlotDiv">
                    <IconButton
                      slot="action"
                      variant="filled"
                      onClick={() => overlayLayoutRef.current?.showOverlay()}
                    >
                      See Reviews
                    </IconButton>
                  </div>
                  <div slot="action" className="SlotDiv">
                    <PlaceDirectionsButton slot="action" variant="filled">
                      Directions
                    </PlaceDirectionsButton>
                  </div>
                </PlaceOverview>
              </div>
              <div slot="overlay" className="SlotDiv">
                <IconButton
                  className="CloseButton"
                  onClick={() => overlayLayoutRef.current?.hideOverlay()}
                >
                  Close
                </IconButton>
                <PlaceDataProvider place={college}>
                  <PlaceReviews />
                </PlaceDataProvider>
              </div>
            </OverlayLayout>
          </div>
          <div className="SplitLayoutContainer" slot="main">
            <Map
              id="gmap"
              mapId="8c732c82e4ec29d9"
              center={college?.location ?? DEFAULT_CENTER}
              zoom={
                college?.location ? DEFAULT_ZOOM_WITH_LOCATION : DEFAULT_ZOOM
              }
              gestureHandling="none"
              fullscreenControl={false}
              zoomControl={false}
            >
              {college?.location && (
                <AdvancedMarker position={college?.location}>
                  <Pin
                    background={"#FBBC04"}
                    glyphColor={"#000"}
                    borderColor={"#000"}
                  />
                </AdvancedMarker>
              )}
            </Map>
          </div>
        </SplitLayout>
      </APIProvider>
    </div>
  );
}
