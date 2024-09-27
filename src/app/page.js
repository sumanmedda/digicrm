'use client'
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


export default function Home() {
  const [dataFromSidebarChild, setDataFromSidebarChild] = useState(false);

  function handleDataFromSidebarChild(data) {
    setDataFromSidebarChild(data);
    console.log('Data received from child :', dataFromSidebarChild)
  }

  return (
  <>
    <div className={`grid ${dataFromSidebarChild ? "grid-cols-12": "grid-cols-7"}`}>
      <Sidebar sendDataToParent={handleDataFromSidebarChild} />
      <div className="col-span-3">
        <Navbar />
        <div className="custom-content-data">
          <p>lorem</p>
        </div>
      </div>
    </div>
  </>
  );
}
