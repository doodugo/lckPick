'use client'

import {ChampionCard} from "@/component/pick/table/ChampionCard";
import {Champion} from "@/api/model/Pick";

const champions: Champion[] = Array.from({ length: 100 }, (_, i) => {return {id: `${i}`, name: `챔피언 ${i + 1}`}});

export const ChampionList = () => {
    return (
        <div className="w-3/4 grid grid-cols-6 gap-4 p-4 bg-gray-800 rounded-lg overflow-y-auto h-full" style={{height: '500px'}}>
            {champions.map((champ, index) => (
                <ChampionCard key={index} champ={champ}/>
            ))}
        </div>
    )
}