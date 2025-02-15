'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import login from "../login/page";
import Nav from "../Component/Nav1";
export default function Studentportal() {
  return (
<div >
<Nav></Nav>
<div className="flex flex-col items-center justify-center">
<div className="container text-center flex items-center justify-center mt-[100px]">
    <div className="col border-[0.5px] border-gray-200 bg-blue-950 text-white p-[10px] w-[120px]">
      <b>COURSE NO</b>
      <table>
      </table>
    </div>
    <div className="col border-[0.5px] border-gray-200 p-[10px]  bg-blue-950 text-white w-[340px]">
      <b>Course Name</b>
    </div>
    <div className="col border-[0.5px] border-gray-200 p-[10px]  bg-blue-950 text-white w-[120px]">
      <b>Credits</b>
    </div>
    <div className="col border-[0.5px] border-gray-200 p-[10px]  bg-blue-950 text-white w-[320px]">
      <b>Teacher</b>
    </div>
    <div className="col border-[0.5px] border-gray-200 p-[10px]  bg-blue-950 text-white w-[120px]">
      <b>Class</b>
    </div>
    <div className="col border-[0.5px] border-gray-200 p-[10px]  bg-blue-950 text-white w-[220px]">
      <b>Attendance Summary</b>
    </div>
  </div>
</div>
<div className="flex items-center justify-center">
<table>

  <thead>
    <tr>  
      <th className="border-[0.5px] border-gray-200 w-[120px]"><a href="dsa">CSC340</a></th>
      <th className="border-[0.5px] border-gray-200 w-[340px]"><a href="dsa">Data Structures and Algorithms</a></th> 
      <th className="border-[0.5px] border-gray-200 w-[120px]"><a href="4">4</a></th>
      <th className="border-[0.5px] border-gray-200 w-[320px]"><a href="teacher">Mubeen ul Basharat</a></th>
      <th className="border-[0.5px] border-gray-200 w-[120px]"><a href="bse4">BSE-4</a></th>
      <th className="border-[0.5px] border-gray-200 w-[220px]"><div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}><div className="progress-bar w-75"></div></div></th>
    </tr>
  </thead>
 
  
</table>
</div>

</div>
  );
}
