'use client'

import {Champion} from "@/api/champion/models";


interface Props {
    champ: Champion
}

export const ChampionCard = ({champ}: Props) => {

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
            key={champ.id}
            className={`
                group relative
               
        `}>
            <div className="w-16 h-16 rounded-md border-2 border-gray-300">
                <img
                    src={champ.icon_image_url}
                    alt={champ.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="mt-1 text-xs text-center" style={{color: 'white'}}>{champ.name}</span>
        </div>
    )
}
