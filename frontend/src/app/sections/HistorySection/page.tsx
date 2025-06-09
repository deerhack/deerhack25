import React from "react";
import WinnersOf23 from "./winnersOf23";
import WinnersOf24 from "./winnersOf24";

const Page = () => {
    
    return (
    <>
        <div className="flex flex-col lg:gap-[15rem] gap-[5rem]  overflow-hidden w-full">
            <WinnersOf23 /> 
            <WinnersOf24 />
        </div>
    </>

    );
};

export default Page;
