'use client'

import {useCallback, useEffect, useRef} from "react";
import {Champion, UserCard} from "@/api/model/Pick";
import {useDrop} from "react-dnd";
import {ChampionCard} from "@/component/pick/table/ChampionCard";

interface Props {
    index: number;
    userCard?: UserCard | null;
    onChangeUserCard: (index: number, champ: Champion) => void;
}

export const ChampionSlot = ({
    index,
    userCard,
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
    }, [ref])

    return (
        <div ref={ref} key={index} className="bg-gray-800 h-20 rounded-lg flex items-center justify-center">
            {userCard ? <ChampionCard champ={userCard.champion}/> : <p className="text-gray-500">빈 슬롯</p>}
        </div>
    )
}