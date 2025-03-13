'use client'


import {useEffect, useState} from "react";
import {Champion, UserCard} from "@/api/model/Pick";
import {ChampionSlot} from "@/component/pick/table/ChampionSlot";

export const ChampionSlotList = () => {
    //FIXME 추후 UserInterface가 정의되면 수정되어야함
    const [selectedUserCards, setSelectedUserCards] = useState<(UserCard | null)[]>([null, null, null, null, null]);

    useEffect(() => {
        // FIXME 화면 초기화 뒤로가기 기능 시 데이터 유지를 위해서는 수정필요
        setSelectedUserCards([null, null, null, null, null]);
    }, [])

    const onChangeChamp = (index: number, champ: Champion) => {

        let userCard: UserCard | null | undefined = selectedUserCards.at(index);
        if (!userCard) {
            userCard = {champion: champ, userId: '', firstSpell: '점화', secondSpell: '점멸'}
        } else {
            userCard = {...userCard, champion: champ}
        }
        const removeIndex = selectedUserCards.findIndex(user => user?.champion.id === champ.id);
        setSelectedUserCards(prev => {
            const res = [...prev];
            res[index] = userCard;
            if(removeIndex > -1 && index !== removeIndex) {
                res[removeIndex] = null
            }
            return res;
        })
    }

    // 메모리 최적화를 위해 range 금지
    return (
        <div className={"w-1/4 p-4 space-y-4"}>
            <ChampionSlot
                key={0}
                index={0}
                userCard={selectedUserCards.at(0)}
                onChangeUserCard={onChangeChamp}
            />
            <ChampionSlot
                key={1}
                index={1}
                userCard={selectedUserCards.at(1)}
                onChangeUserCard={onChangeChamp}
            />
            <ChampionSlot
                key={2}
                index={2}
                userCard={selectedUserCards.at(2)}
                onChangeUserCard={onChangeChamp}
            />
            <ChampionSlot
                key={3}
                index={3}
                userCard={selectedUserCards.at(3)}
                onChangeUserCard={onChangeChamp}
            />
            <ChampionSlot
                key={4}
                index={4}
                userCard={selectedUserCards.at(4)}
                onChangeUserCard={onChangeChamp}
            />
        </div>
    )
}