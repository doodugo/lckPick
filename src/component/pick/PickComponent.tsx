'use client'

import {PickSearch} from "@/component/pick/search/PickSearch";
import {DndProvider} from "react-dnd";
import {ChampionList} from "@/component/pick/table/ChampionList";
import {HTML5Backend} from "react-dnd-html5-backend";
import {ChampionSlotList} from "@/component/pick/table/ChampionSlotList";


export const PickComponent = () => {
    return (
        <div className={"bg-gray-900"}>
            <PickSearch/>
            <DndProvider backend={HTML5Backend}>
                <div className="flex h-screen p-4">
                    <ChampionSlotList/>
                    <ChampionList/>
                </div>
            </DndProvider>
        </div>
    )
}