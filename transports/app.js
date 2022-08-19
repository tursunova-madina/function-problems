"use strict";

// transports
// piyoda = 3.6 km/soat
// velosiped = 20.1 km/soat
// mashina = 70 km/soat
// samolyot = 800 km/soat

const foot = 3.6;
const bi = 20.1;
const car = 70;
const plane = 800;

const result_foot = document.querySelector("#result_foot");
const direction = document.getElementById("direction");
const result_bi = document.querySelector("#result_bi");
const result_car = document.querySelector("#result_car");
const result_plane = document.querySelector("#result_plane");

const operation = () => {
  return (
    (result_foot.textContent =
      Math.floor((direction.value * 1) / foot) + "hour"),
    (result_bi.textContent =
      Math.floor((direction.value * 1) / bi) + "hour"),
    (result_car.textContent =
      Math.floor((direction.value * 1) / car) + "hour"),
    (result_plane.textContent =
      Math.floor((direction.value * 1) / plane) + "hour")
  );
};
