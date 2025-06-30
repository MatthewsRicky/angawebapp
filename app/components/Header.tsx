import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import { BiCloud, BiCloudDrizzle, BiCloudLightning, BiCloudLightRain, BiCloudRain, BiCloudSnow, BiSun, BiWind } from 'react-icons/bi'

export default function Header() {
  return (
    <div>
      <Searchbar />
      <BiCloud />
      <BiCloudDrizzle />
      <BiCloudSnow />
      <BiSun />
      <BiCloudRain />
      <BiCloudLightning />
      <BiWind />
    </div>
  )
}