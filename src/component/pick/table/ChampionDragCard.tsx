'use client'

import {useDrag} from "react-dnd";
import {useEffect, useRef} from "react";
import {Champion} from "@/api/champion/models";


interface Props {
    isSearchChange: boolean;
    champ: Champion
}

export const ChampionDragCard = ({isSearchChange, champ}: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{isDragging}, drag] = useDrag({
        type: "CHAMPION",
        item: champ,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        drag(ref);
    }, [isSearchChange, drag, ref])

    return (
        // <div
        //     ref={ref}
        //     className={`w-20 flex flex-col items-center text-white rounded-lg cursor-pointer ${
        //         isDragging ? "opacity-50" : "opacity-100"
        //     }`}
        // >
        //     {/* 챔피언 이미지 */}
        //     <div className="w-16 h-16 rounded-md border-2 border-gray-300 overflow-hidden">
        //         <img
        //             src={champ.imageUrl}
        //             alt={champ.name}
        //             className="w-full h-full object-cover"
        //         />
        //     </div>
        //
        //     {/* 챔피언 이름 */}
        //     <span className="mt-1 text-xs text-center">{champ.name}</span>
        // </div>
        <div
            ref={ref}
            key={champ.name}
            className={`
                group relative cursor-pointer
                ${isDragging ? "opacity-50" : "opacity-100"}
        `}>
            <div className="w-16 h-16 rounded-md border-2 border-gray-300">
                <img
                    src={champ.icon_image_url}
                    alt={champ.name_local}
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="mt-1 text-xs text-center" style={{color: 'white'}}>{champ.name_local}</span>
        </div>
    )
}
