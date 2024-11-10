"use client";
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";

interface ButtonProps {
  label: string;
}

const RandomButton: React.FC<ButtonProps> = ({ label }) => {
  // Генерация случайной позиции для кнопки
  const [position, setPosition] = useState({ top: "0px", left: "0px" });

  useEffect(() => {
    // Функция для генерации случайного процента для позиционирования
    const randomPosition = () => ({
      top: `${Math.floor(Math.random() * 80)}%`, // 90% чтобы кнопки не выходили за экран
      left: `${Math.floor(Math.random() * 80)}%`,
    });

    setPosition(randomPosition());
  }, []);

  return (
    <Button color="danger" style={position}>
      {label}
    </Button>
  );
};

export default RandomButton;
