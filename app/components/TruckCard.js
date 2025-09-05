"use client";

import { useState } from "react";
import Image from "next/image";
import {
  EnvironmentOutlined,
  DollarOutlined,
  CarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Tag, Tooltip } from "antd";
import AuthModal from "./AuthModal";

export default function TruckCard({ truck }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-56">
          <Image
            src={truck.image}
            alt={truck.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 right-4">
            <Tag
              color={truck.available ? "success" : "error"}
              className="px-3 py-1 text-sm font-medium rounded-full shadow-sm"
            >
              {truck.available ? "Available" : "Booked"}
            </Tag>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{truck.name}</h3>

          <div className="space-y-3">
            <div className="flex items-center text-gray-700">
              <EnvironmentOutlined className="text-blue-500 mr-3 text-lg" />
              <span>{truck.city}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <CarOutlined className="text-blue-500 mr-3 text-lg" />
              <span>{truck.capacity}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <DollarOutlined className="text-blue-500 mr-3 text-lg" />
              <span className="text-lg font-semibold">
                {truck.pricePerDay} ETB/day
              </span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {truck.features.map((feature, index) => (
                <Tooltip key={index} title={feature}>
                  <Tag
                    color="blue"
                    className="px-3 py-1 rounded-full cursor-help"
                  >
                    <div className="flex items-center">
                      <CheckCircleOutlined className="mr-1" />
                      {feature}
                    </div>
                  </Tag>
                </Tooltip>
              ))}
            </div>
          </div>

          <button
            onClick={() => truck.available && setShowAuthModal(true)}
            className={`mt-6 w-full py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
              truck.available
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!truck.available}
          >
            {truck.available ? "Rent Now" : "Not Available"}
          </button>
        </div>
      </div>

      <AuthModal open={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
