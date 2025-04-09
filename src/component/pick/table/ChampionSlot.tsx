'use client'

import {useEffect, useRef} from "react";
import {Champion} from "@/api/champion/models";
import {useDrag, useDrop} from "react-dnd";

interface Props {
    index: number;
    line: string;
    champion?: Champion | null;
    onChangeUserCard: (index: number, champ: Champion) => void;
    onChangeRemoveUserCard: (index: number) => void;
}

export const ChampionSlot = ({
    index,
     line,
     champion,
    onChangeUserCard,
     onChangeRemoveUserCard
    }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const dropChampion = (champion: Champion) => {
        // Champion을 선택했을 때 발생하는 Event
        onChangeUserCard(index, champion)
    }
    const [{isDragging}, drag] = useDrag({
        type: "CHAMPION",
        item: champion,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: "CHAMPION",
        drop: dropChampion
    })

    useEffect(() => {
        drag(ref);
        drop(ref)
    }, [drag, drop, ref])

    return (
        <div
            ref={ref}
            key={index}
            className={`
            bg-gray-800 h-25 rounded-lg flex items-center justify-between
            ${isDragging ? "opacity-50" : "opacity-100"}
            `}

        >
            {/* 챔피언 이미지 */}
            <div className="w-24 h-24 border-2 rounded-lg flex items-center justify-center">
                {champion
                    &&
                    <img
                        src={champion.icon_image_url}
                        alt={champion.name_local}
                        className="w-full h-full object-cover bg-cover bg-center"
                    />

                }
            </div>

            {/* 버튼 영역 */}
            <div className="flex flex-col gap-2 text-right">
                <div className="flex justify-end">
                    <button
                        className="text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none pr-2"
                        onClick={() => onChangeRemoveUserCard(index)}
                    >
                        &times;
                    </button>
                </div>
                <span style={{color: 'white'}}>{line}</span>
                <span style={{color: 'white'}}>{champion?.name_local}</span>
            </div>


        </div>
    )
}
