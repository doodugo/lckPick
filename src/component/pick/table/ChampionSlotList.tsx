'use client'


import {Champion} from "@/api/champion/models";
import {ChampionSlot} from "@/component/pick/table/ChampionSlot";
import {Dispatch, SetStateAction} from "react";

interface Props {
    selectedChampions: (Champion | null)[];
    onChangeChampions: Dispatch<SetStateAction<(Champion | null)[]>>;
}

export const ChampionSlotList = ({
    selectedChampions,
    onChangeChampions
                                 }: Props) => {


    const onChangeChamp = (index: number, champ: Champion) => {
        const removeIndex = selectedChampions.findIndex(champion => champion?.id === champ.id);
        onChangeChampions(prev => {
            const res = [...prev];
            res[index] = champ;
            if(removeIndex > -1 && index !== removeIndex) {
                res[removeIndex] = null
            }
            return res;
        })
    }

    const onChangeRemoveUserCard = (index: number) => {
        onChangeChampions(prev => {
            const res = [...prev];
            res[index] = null;
            return res;
        })
    }

    // 메모리 최적화를 위해 range 금지
    return (
        <div className={"w-50 justify-center p-4 space-y-4"}>
            <ChampionSlot
                key={0}
                line={'TOP'}
                index={0}
                champion={selectedChampions.at(0)}
                onChangeUserCard={onChangeChamp}
                onChangeRemoveUserCard={onChangeRemoveUserCard}
            />
            <ChampionSlot
                key={1}
                line={'Jungle'}
                index={1}
                champion={selectedChampions.at(1)}
                onChangeUserCard={onChangeChamp}
                onChangeRemoveUserCard={onChangeRemoveUserCard}
            />
            <ChampionSlot
                key={2}
                line={'Mid'}
                index={2}
                champion={selectedChampions.at(2)}
                onChangeUserCard={onChangeChamp}
                onChangeRemoveUserCard={onChangeRemoveUserCard}
            />
            <ChampionSlot
                key={3}
                line={'Adc'}
                index={3}
                champion={selectedChampions.at(3)}
                onChangeUserCard={onChangeChamp}
                onChangeRemoveUserCard={onChangeRemoveUserCard}
            />
            <ChampionSlot
                key={4}
                line={'Sup'}
                index={4}
                champion={selectedChampions.at(4)}
                onChangeUserCard={onChangeChamp}
                onChangeRemoveUserCard={onChangeRemoveUserCard}
            />
        </div>
    )
}
