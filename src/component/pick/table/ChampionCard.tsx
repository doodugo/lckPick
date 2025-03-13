'use client'

import {useDrag} from "react-dnd";
import {Champion} from "@/api/model/Pick";
import {useEffect, useRef} from "react";


interface Props {
    champ: Champion
}

export const ChampionCard = ({champ}: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ isDragging }, drag] = useDrag({
        type: "CHAMPION",
        item: champ,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    useEffect(() => {
        drag(ref);
    }, [ref])

    return (
        <div
            ref={ref}
            className={`w-50 h-20 bg-blue-500 text-white flex items-center justify-center rounded-lg cursor-pointer ${
                isDragging ? "opacity-50" : "opacity-100"
            }`}
        >
            name: {champ.name}
        </div>
    )
}