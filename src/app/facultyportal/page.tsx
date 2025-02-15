'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import login from "../login/page";
import Nav2 from "../Component/Nav2";
export default function Facultyportal() {
  return (
<div >
<Nav2></Nav2>
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
      <b>Registered Students</b>
    </div>
    <div className="col border-[0.5px] border-gray-200 p-[10px]  bg-blue-950 text-white w-[120px]">
      <b>Class</b>
    </div>

  </div>
</div>
<div className="flex items-center justify-center">
<table>
  <thead>
    <tr>
      <th className="border-[0.5px] border-gray-200 w-[120px]">CSC340</th>
      <th className="border-[0.5px] border-gray-200 w-[340px]"><a href="Students">Data Structures and Algorithms</a></th>
      <th className="border-[0.5px] border-gray-200 w-[120px]">4</th>
      <th className="border-[0.5px] border-gray-200 w-[320px]">60</th>
      <th className="border-[0.5px] border-gray-200 w-[120px]">BSE-4</th>
    </tr>
  </thead>
  
</table>
</div>

</div>
  );
}
