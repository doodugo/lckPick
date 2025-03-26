'use client'

import React from "react";
import {ChampionDragCard} from "@/component/pick/table/ChampionDragCard";
import {ChampionListHeader} from "@/component/pick/table/ChampionListHeader";
import {useChampions} from "@/hooks/champions/useChampions";



export const ChampionList = () => {
    //FIXME 추후 Context에 Champion들을 불러쓸 예정

    const {
        selectedTab,
        searchText,
        onChangeSearchText,
        onChangeTab,
        champions
    } = useChampions()

    return (
        <div className="p-4 border-y border-x border-gray-300">
            <ChampionListHeader selectedTab={selectedTab} onChangeTab={onChangeTab} searchText={searchText} onChangeSearchText={onChangeSearchText}/>
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