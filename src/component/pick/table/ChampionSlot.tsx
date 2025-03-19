'use client'

import {useEffect, useRef} from "react";
import {Champion} from "@/api/champion/models";
import {useDrop} from "react-dnd";
import {ChampionDragCard} from "@/component/pick/table/ChampionDragCard";

interface Props {
    index: number;
    champion?: Champion | null;
    onChangeUserCard: (index: number, champ: Champion) => void;
}

export const ChampionSlot = ({
    index,
     champion,
    onChangeUserCard
    }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const dropChampion = (champion: Champion) => {
        // Champion을 선택했을 때 발생하는 Event
        console.log(`index=${index}`)
        console.log(`champion=${champion}`)
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
        <div ref={ref} key={index} className="bg-gray-800 h-20 rounded-lg flex items-center justify-center">
            {champion ? <ChampionDragCard champ={champion}/> : <p className="text-gray-500">빈 슬롯</p>}
        </div>
    )
}