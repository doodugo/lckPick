'use client'

import {useEffect, useRef} from "react";
import {Champion} from "@/api/champion/models";
import {useDrop} from "react-dnd";

interface Props {
    index: number;
    line: string;
    champion?: Champion | null;
    onChangeUserCard: (index: number, champ: Champion) => void;
}

export const ChampionSlot = ({
    index,
     line,
     champion,
    onChangeUserCard
    }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const dropChampion = (champion: Champion) => {
        // Champion을 선택했을 때 발생하는 Event
        onChangeUserCard(index, champion)
    }

    const [, drop] = useDrop({
        accept: "CHAMPION",
        drop: dropChampion
    })

    useEffect(() => {
        drop(ref)
    }, [drop, ref])

    return (
        <div
            ref={ref}
            key={index}
            className="bg-gray-800 h-25 rounded-lg flex items-center justify-between"

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
                <span>{line}</span>
                <span>{champion?.name_local}</span>
            </div>


        </div>
    )
}
