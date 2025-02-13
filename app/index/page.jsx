"use client";
import React from "react";
import {Button} from "@heroui/button";

const IndexPage = () => {
return (
    <div className="h-screen">
        <div className="flex flex-col gap-5 justify-center items-center h-full">

                <div className="text-4xl text-someRed font-bold">Welcome to Eneryia Project</div>
                <Button variant="bordered">some random button</Button>
        </div>
    </div>
);
};

export default IndexPage;
