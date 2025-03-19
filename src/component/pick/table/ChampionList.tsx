'use client'

import {Champion} from "@/api/champion/models";
import React, {useEffect, useState} from "react";
import {queryChampionList} from "@/api/champion/query/ChampionQueryApi";
import {ChampionDragCard} from "@/component/pick/table/ChampionDragCard";
import {ChampionListHeader} from "@/component/pick/table/ChampionListHeader";

const championsDummy: Champion[] = Array.from({length: 100}, (_, i) => {
    return {
        id: `${i}`,
        name: `챔피언 ${i + 1}`,
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.6.1/img/champion/Aatrox.png"
    }
});

export const ChampionList = () => {
    //FIXME 추후 Context에 Champion들을 불러쓸 예정
    const [ selectedTab, setSelectedTab ] = useState('all');
    const [ searchText, setSearchText ] = useState('');
    const [champions, setChampions] = useState<Champion[]>([]);

    useEffect(() => {
        queryChampionList().then(champions => setChampions(champions))
            .catch(() => {
                alert("챔피언 불러오기 실패하였습니다.")
                setChampions(championsDummy)
            });
    }, []);

    return (
        <div className="p-4 border-y border-x border-gray-300">
            <ChampionListHeader selectedTab={selectedTab} onChangeTab={setSelectedTab} searchText={searchText} onChangeSearchText={setSearchText}/>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 overflow-y-auto h-full"
                 style={{height: '500px'}}>
                {/*<div className="w-3/4 grid grid-cols-6 gap-4 p-4 bg-gray-800 rounded-lg overflow-y-auto h-full"*/}
                {/*        style={{height: '500px'}}>*/}
                {champions.map((champ, index) => (
                    <ChampionDragCard key={index} champ={champ}/>
                ))}
            </div>
        </div>
    )
}