import React, { FormEvent, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
//import { Map, Marker, Popup, TiteLayer } from 'react-leaflet';
import Leaflet from "leaflet";
import { v4 } from "uuid";
import { mapBox } from "../../tools/apiMapBox";
import AsyncSelect from "react-select/async";
import mapPackage from "../../assets/package.svg";
import mapPin from "../../assets/pin.svg";

const initialPosition = { lat: -22.2154042, lng: -54.8331331 }

const mapPackageIcon = Leaflet.icon({
  iconUrl: mapPackage,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//Tipagem do TS
interface Delivery {
  id: string;
  name: string;
  address: string;
  complement: string;
  latitude: number;
  longitude: number;
}

type Position = {
  longitude: number;
  latitude: number;
}

export const Form = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [position, setPosition] = useState<Position | null>(null);

  const [name, setName] = useState("");
  const [complement, setComplement] = useState("");
  const [address, setAddress] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [location, setLocation] = useState(initialPosition);

  const loadOptions = async (inputValue: any, callback: any) => {
    if (inputValue.length < 5) return;

    let places: any = [];
    const response: any = await mapBox(inputValue);
    response.features.map((item: any) => {
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.center,
        place: item.place_name,
      });
    });

    callback(places);
  };

  const handleChangeSelect = (event: any) => {
    console.log("changed", event);
    setPosition({
      longitude: event.coords[0],
      latitude: event.coords[1],
    });
    setAddress({ label: event.place, value: event.place });

    setLocation({
      lng: event.coords[0],
      lat: event.coords[1],
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!address || !name) return;

    setDeliveries([
      ...deliveries,
      {
        id: v4(),
        name,
        address: address?.value || "",
        complement,
        latitude: location.lat,
        longitude: location.lng,
      },
    ]);
    setName("");
    setAddress(null);
    setComplement("");
    setPosition(null);
  }

  return (
    <div id="page-map">
      <main>
        <form onSubmit={handleSubmit} className="landing-page-form">
          <fieldset>
            <legend>Entregas</legend>
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                placeholder="Digite o seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="address">Endereço</label>
              <AsyncSelect
                id="address"
                placeholder="Digite o seu endereço"
                classNamePrefix="filter"
                cacheOptions
                loadOptions={loadOptions}
                onChange={handleChangeSelect}
                value={address}
              />
            </div>
            <div className="input-block">
              <label htmlFor="complement">Complementos</label>
              <input
                id="complement"
                placeholder="Apto / Nr / Casa..."
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>
          </fieldset>
          <button className="confirm-button" type="submit">Confirmar</button>
        </form>
      </main>
      <MapContainer
        center={location}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      />
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
      />


    </div>
  )


}
