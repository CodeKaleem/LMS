'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Login from "../login/page";
import Nav from "../Component/Nav1";
import { useState } from 'react';
import StudentMArks from "../Component/Marks";
var  a = 20;
// export default function StudentMArks() {
//   const [MArks, Quiz1] = useState(0);
// }
export default function MarkSummary() {
  return (

<div>
    <Nav></Nav>
<div className="bg-white py-20 sm:py-10">
  <div>
    <dl className="grid grid-cols-1 gap-x-8 gap-y-1 text-center lg:grid-cols-5">
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">Quizzes</dd>
      </div>
      <div className="flex max-w-xs flex-col gap-y-4">
        Quiz #1
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">{a}</dd>
      </div>
      <div className=" flex max-w-xs flex-col gap-y-4">
        Quiiz #2
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/0</dd>
      </div>
      <div className=" flex max-w-xs flex-col gap-y-4">
        Quiz #3
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/0</dd>
      </div>
      <div className=" flex max-w-xs flex-col gap-y-4">
        Quiz #3
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/0</dd>
      </div>
    </dl>
  </div>
</div>
<hr />
<div className="bg-white py-20 sm:py-10">
  <div>
    <dl className="grid grid-cols-1 gap-x-8 gap-y-1 text-center lg:grid-cols-5">
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">Assignments</dd>
      </div>
      <div className="flex max-w-xs flex-col gap-y-4">
        Assignment #1
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/0</dd>
      </div>
      <div className=" flex max-w-xs flex-col gap-y-4">
        Assignment #2
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/0</dd>
      </div>
      <div className=" flex max-w-xs flex-col gap-y-4">
        Assignment #3
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/0</dd>
      </div>
      <div className=" flex max-w-xs flex-col gap-y-4">
        Assignment #3
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/0</dd>
      </div>
    </dl>
  </div>
</div>
<hr />
<div className="bg-white py-20 sm:py-10">
  <div>
    <dl className="grid grid-cols-1 gap-x-8 gap-y-1 text-center lg:grid-cols-5">
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">Mids</dd>
      </div>
      <div className="flex max-w-xs flex-col gap-y-4">
        Mids
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/25</dd>
      </div>

    </dl>
  </div>
</div>
<hr />
<div className="bg-white py-20 sm:py-10">
  <div>
    <dl className="grid grid-cols-1 gap-x-8 gap-y-1 text-center lg:grid-cols-5">
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">Finals</dd>
      </div>
      <div className="flex max-w-xs flex-col gap-y-4">
        Final
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/50</dd>
      </div>

    </dl>
  </div>
</div>
<hr />
<div className="bg-white py-20 sm:py-10">
  <div>
    <dl className="grid grid-cols-1 gap-x-8 gap-y-1 text-center lg:grid-cols-5">
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">Total</dd>
      </div>
      <div className="flex max-w-xs flex-col gap-y-4">
        10+15+25+50
        <dd className="order-first font-semibold tracking-tight text-gray-900 sm:text-5xl">0/100</dd>
      </div>

    </dl>
  </div>
</div>
<hr />
</div>


  );
}
