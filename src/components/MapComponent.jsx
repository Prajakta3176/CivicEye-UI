import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icons
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Mock data
const issues = [
  {
    id: 1,
    location: "Kurla East, Mumbai",
    description: "Pothole on road",
    lat: 19.07283,
    lng: 72.88261,
    status: "Resolved",
  },
  {
    id: 2,
    location: "Sector 22, Noida",
    description: "Streetlight not working",
    lat: 28.583,
    lng: 77.36,
    status: "Pending",
  },
];

const MapComponent = () => {
  return (
    <div className="h-[500px] w-full rounded-lg shadow-md">
      <MapContainer center={[22.9734, 78.6569]} zoom={5} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {issues.map((issue) => (
          <Marker
            key={issue.id}
            position={[issue.lat, issue.lng]}
            icon={issue.status === "Resolved" ? greenIcon : redIcon}
          >
            <Popup>
              <strong>{issue.location}</strong><br />
              {issue.description}<br />
              <span
                className={`text-sm font-semibold ${
                  issue.status === "Resolved"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {issue.status}
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
