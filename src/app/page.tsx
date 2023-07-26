"use client";

import CustomModal from "@/CustomModal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-screen p-24">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md ml "
        onClick={handleOpenModal}
      >
        Open Modal
      </button>

      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="My Modal Content"
      />
    </div>
  );
}
