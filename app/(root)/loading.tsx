/** @format */
import React from "react";
import { Skeleton } from "../../components/ui/skeleton";

const Loading = () => {
  return (
    <main className="md:m-24 rounded-md w-full grid grid-cols-4 gap-12">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div key={id} className=" bg-white p-8 col-span-4 md:col-span-2">
          <Skeleton className="h-6 w-1/2 bg-gray-200 mb-2"></Skeleton>
          <Skeleton className=" h-6 w-1/4 bg-gray-200 mb-4"></Skeleton>
          <Skeleton className="rounded-md w-full h-80 bg-gray-400"></Skeleton>
        </div>
      ))}
    </main>
  );
};

export default Loading;
