// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
  let mass = parseFloat(document.getElementById("mass-value").value);
  let volume = parseFloat(document.getElementById("volume-value").value);

  //This is the math for the density formula
  let density = mass / volume
  let densityRounded = density.toFixed(2)

  //The result
  document.getElementById('density-info').innerHTML = "The density of your object is " + (densityRounded) + "g/cm<sup>3</sup>."
}

function enterClicked2() {
  let density = parseFloat(document.getElementById("density-value").value);
  let volume = parseFloat(document.getElementById("volume-Value").value);
  
  //This is the math for the mass formula
  let mass = density * volume
  let massRounded = mass.toFixed(2)

  //The result
  document.getElementById('mass-info').innerHTML = "The mass of your object is " + (massRounded) + "g."
}

function enterClicked3() {
  let density = parseFloat(document.getElementById("density-Value").value);
  let mass = parseFloat(document.getElementById("mass-Value").value);

  let volume = mass / density
  let volumeRounded = volume.toFixed(2)

  //The result
  document.getElementById('volume-info').innerHTML = "The volume of your object is " + (volumeRounded) + "cm<sup>3</sup>."
}