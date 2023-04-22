import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
i18n.t("translation.key")
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, useMap, Popup} from 'react-leaflet';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
const Neighborhood = () => {
    const { t } = useTranslation();
    const [geoData, setGeoData] = useState({ lat: 47.861623, lng: 28.673231 });
    const center = [geoData.lat, geoData.lng];


  return(
      <div className="px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px] flex flex-col gap-[32px] pb-10 h-[50vh] md:h-[70vh]">
          <div className="flex flex-col">
              <div className="text-[32px] font-semibold leading-[139%] text-[#FF9505]">{t("neighborhood")}</div>
              <div className="text-[16px] leading-[158%] text-white/[50%]">Deam home villas San Diego, CA, USA</div>
          </div>
          <MapContainer center={[geoData.lat, geoData.lng]} zoom={14} className="h-full">
              <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  // DEFAULT = https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
                  // DARK = https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png
              />
              {geoData.lat != null && geoData.lng != null && (
                  <Marker position={[geoData.lat, geoData.lng]} >
                      <Popup>Te asteptam la noi</Popup>
                  </Marker>
              )}
          </MapContainer>
      </div>
  )
}

export default Neighborhood;
