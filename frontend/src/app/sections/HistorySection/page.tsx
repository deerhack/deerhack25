import React from "react";
import WinnersOf23 from "./winnersOf23";
import WinnersOf24 from "./winnersOf24";

const Page = () => {
    
    return (
    <>
        <div className="flex flex-col gap-[15rem] overflow-hidden w-full">
            <WinnersOf23 /> 
            <WinnersOf24 />
        </div>
    </>

    );
};

export default Page;
