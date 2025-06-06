import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';


const IssueReportForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Road',
    image: null,
    latitude: '',
    longitude: '',
    address:""
  });

  // Auto-fetch user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }));
      },
      (error) => {
        console.error('Geolocation error:', error);
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // You can now send formData to your backend API here
  };

  function LocationMarker({ setFormData }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setFormData(prev => ({
        ...prev,
        latitude: lat,
        longitude: lng,
      }));
    },
  });

  return formData.latitude && formData.longitude ? (
    <Marker
      position={[formData.latitude, formData.longitude]}
      icon={L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })}
    />
  ) : null;
}


  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">📣 Report a Civic Issue</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Issue Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />



        <textarea
          name="description"
          placeholder="Describe the issue..."
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        ></textarea>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="Road">Road</option>
          <option value="Water">Water</option>
          <option value="Streetlight">Streetlight</option>
          <option value="Garbage">Garbage</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />

        <input
        type="text"
        name="address"
        placeholder="Manual Address (optional)"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
      />

        <MapContainer
        center={[20.5937, 78.9629]} // default center: India
        zoom={5}
        className="h-64 w-full rounded-lg"
        >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
        />
        <LocationMarker setFormData={setFormData} />
        </MapContainer>


        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default IssueReportForm;
