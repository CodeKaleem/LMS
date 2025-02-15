'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import login from "../login/page";
import { useRouter } from 'next/navigation';
import { routeModule } from "next/dist/build/templates/app-route";
export default function Facultylogin() {
  const router = useRouter();
  return (

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src="https://crystalpng.com/wp-content/uploads/2022/02/COMSATS-University-logo.png" alt="Your Company"></img>
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm/  font-medium text-gray-900"><b>REGISTERATION ID</b></label>
        <br />
        <p>AAA-000</p>
        <div className="mt-2">
          <input type="String" name="email" id="email"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </input></div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </input></div>
      </div>

      <div>
        <button type="submit" onClick={()=>router.push('/facultyportal')} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><a href="facultyportal">Sign in</a></button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm/6 text-gray-500">
      For Student Portal
      <button onClick={login}><a href="login" className="font-semibold text-indigo-600 hover:text-indigo-500 ml-[10px]">Click Here</a></button>
    </p>
  </div>
</div>

  );
}
