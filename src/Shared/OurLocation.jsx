import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Title from "../Components/Title";

const OurLocation = () => {
  const position = [9.012875, 7.504945];

  return (
    <div>
      <Title heading={"Find us here"} />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 bg-neutral-white rounded-xl p-3">
        <div className="pr-4 flex flex-col justify-evenly my-3">
          <div className="address">
            <h1 className="text-xl font-bold border-b-2 text-accent">
              Address
            </h1>
            <div className="text-sm text-primary-light capitalize ml-2">
              <p>Urban Shelter</p>
              <p>123 Main Street</p>
              <p>Abuja , Nigeria</p>
            </div>
          </div>
          <div className="contact">
            <h1 className="text-xl font-bold border-b-2 text-accent">
              Contact information
            </h1>
            <div className="text-sm text-primary-light capitalize ml-2">
              <p>📞 Phone: +1 234 567 890</p>
              <p>📧 Email: info@urbanshelter.com</p>
            </div>
          </div>
          <div className="transport">
            <h1 className="text-xl font-bold border-b-2 text-accent">
              Transportation Options
            </h1>
            <div className="text-sm text-primary-light capitalize ml-2">
              <p>
                🚇 By Metro: Use the Greenline Metro and exit at Downtown
                Station.
              </p>
              <p>🚌 By Bus: Routes X45, Y67 stop near Main Street.</p>
              <p>
                🚗 By Car: Accessible via Highway 5, take the Downtown exit.
              </p>
              <p>🚲 Cycling: Dedicated bike lanes connect to our building.</p>
            </div>
          </div>
        </div>
        <div className="">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Urban Shelter <br /> 🏡
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
