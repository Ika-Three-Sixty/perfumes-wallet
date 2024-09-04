"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import Image from "next/image";

type Perfume = {
  _id: string;
  name: string;
  status: boolean;
};

export default function Home() {
  const perfumes = useQuery(api.products.list);

  return (
    <main className="max-w-screen-xl m-3lg:m-auto ">
      <h1 className="text-2xl pt-8 mt-9 hover:bg-slate-600 ">Perfumes Wallet</h1>
      <div className="flex items-center justify-around">
        <div className="bg-red-400 h-32 content-center">First</div>
        <div className="bg-blue-500">Second</div>
        <div className="bg-green-600">Third</div>
      </div>
      {perfumes?.map((perfume) => (
        <div key={perfume._id} className="flex items-center justify-between">
          <div>
            <h2>{perfume.name}</h2>
            <p>{perfume.status ? "True" : "False"}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
