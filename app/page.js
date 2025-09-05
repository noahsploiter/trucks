"use client";

import { useState } from "react";
import { Select } from "antd";
import Header from "./components/Header";
import TruckCard from "./components/TruckCard";
import { trucks, ethiopianCities } from "./data/trucks";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("all");

  const filteredTrucks =
    selectedCity === "all"
      ? trucks
      : trucks.filter((truck) => truck.city === selectedCity);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Truck
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of trucks available across Ethiopia.
            Whether you need a small delivery van or a heavy-duty truck,
            we&apos;ve got you covered.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Trucks
            </h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {filteredTrucks.length} trucks
            </span>
          </div>
          <Select
            defaultValue="all"
            style={{ width: 280 }}
            size="large"
            onChange={setSelectedCity}
            placeholder="Select a city"
            className="w-full sm:w-auto"
            options={[
              { value: "all", label: "All Cities" },
              ...ethiopianCities.map((city) => ({
                value: city,
                label: city,
              })),
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrucks.map((truck, index) => (
            <div
              key={truck.id}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <TruckCard truck={truck} />
            </div>
          ))}
        </div>

        {filteredTrucks.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No trucks available in this city
            </h3>
            <p className="text-gray-600">
              Try selecting a different city or check back later
            </p>
          </div>
        )}
      </main>
    </>
  );
}
