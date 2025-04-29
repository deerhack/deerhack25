"use client";
import type { ReactElement } from "react";
import MainWinCard from "./MainWinCard";

type listContent = {
    id: number;
    title: string;
    description: string;
    svg: ReactElement;
};

export default function OtherWinners({ winnersList }: { winnersList: listContent[] }) {
    return (
        <div className="flex flex-col pb-[3rem]">
            {winnersList.map((list) => (
                <div key={list.id}>
                    <MainWinCard
                        title={list.title}
                        description={list.description}
                        svg={list.svg}
                    />
                </div>
            ))}
        </div>
    );
}