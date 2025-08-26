"use client"
import {Card, CardHeader, CardBody} from "@heroui/react";

export default function CardLayout({Header, Body}) {
  return (
    <Card className="max-w-sm bg-white border border-gray-200 rounded-lg 
    shadow-sm dark:bg-pink-300 hover:bg-pink-400 p-20 justify-center flex">
      <CardHeader className="">
        <p className="text-tiny uppercase font-bold">{Header}</p>
      </CardHeader>
      <CardBody className="">
                    {Body}
      </CardBody>
    </Card>
  );
}




            
       