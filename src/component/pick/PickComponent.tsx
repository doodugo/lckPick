'use client'

import {PickSearch} from "@/component/pick/search/PickSearch";
import {DndProvider} from "react-dnd";
import {ChampionList} from "@/component/pick/table/ChampionList";
import {HTML5Backend} from "react-dnd-html5-backend";
import {ChampionSlotList} from "@/component/pick/table/ChampionSlotList";
import {TeamCompositionList} from "@/component/pick/table/TeamCompositionList";
import {useEffect, useState} from "react";
import {Champion} from "@/api/champion/models";


export const PickComponent = () => {
    const [selectedChampions, setSelectedChampions] = useState<(Champion | null)[]>([null, null, null, null, null]);

    useEffect(() => {
        // FIXME 화면 초기화 뒤로가기 기능 시 데이터 유지를 위해서는 수정필요
        setSelectedChampions([null, null, null, null, null]);
    }, [])

    return (
        <div className={"bg-gray-900"}>
            <PickSearch/>
            <div className={"h-screen"}>
                <div className="flex justify-center max-h-[800px] p-4">
                    <DndProvider backend={HTML5Backend}>
                        <ChampionSlotList
                            selectedChampions={selectedChampions}
                            onChangeChampions={setSelectedChampions}
                        />
                        <ChampionList/>
                    </DndProvider>
                </div>
                <div className="max-h-[800px] justify-center flex">
                    <TeamCompositionList
                        selectedChampions={selectedChampions}
                    />
                </div>
            </div>
        </div>
    )
}