import {useEffect, useState} from "react";
import {Champion} from "@/api/champion/models";
import {queryChampionList} from "@/api/champion/query/ChampionQueryApi";

export const useChampions = () => {
    const [ selectedTab, setSelectedTab ] = useState('all');
    const [ searchText, setSearchText ] = useState('');
    const [originChampions, setOriginChampions] = useState<Champion[]>([]);
    const [champions, setChampions] = useState<Champion[]>([]);

    useEffect(() => {
        setSelectedTab('all')
        setSearchText('')
        queryChampionList().then(champions => {
            setOriginChampions(champions)
            setChampions(champions)
        })
            .catch(() => alert("챔피언 불러오기 실패하였습니다."));
    }, []);

    useEffect(() => {
        onChangeFilter()
    }, [searchText, selectedTab])

    const onChangeSearchText = (searchText: string) => {
        setSearchText(searchText)
    }

    const onChangeTab = (selectedTab: string) => {
        setSelectedTab(selectedTab)
    }

    const onChangeFilter = () => {
        const champions = [...originChampions]
        setChampions(champions.filter(championFilter))
    }

    const championFilter = (champion: Champion) => {
        if(searchText !== '' && !champion.name_local.includes(searchText)) {
             return false;
        }
        if(selectedTab !== 'all' && !champion.positions.some(position => position === selectedTab)) {
            return false;
        }

        return true;
    }

    return {
        selectedTab,
        searchText,
        champions,
        onChangeSearchText,
        onChangeTab
    }
}
