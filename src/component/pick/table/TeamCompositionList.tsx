import {Champion} from "@/api/champion/models";
import {useEffect, useState} from "react";
import {TeamComposition} from "@/api/team/models";
import {ChampionCard} from "@/component/pick/table/ChampionCard";
import {queryTeamCompositions} from '@/api/team/query/TeamQueryApi'

interface Props {
    selectedChampions: (Champion | null)[];
    onclickTeamChampionGroup: (group: TeamComposition) => void;
}

export const TeamCompositionList = ({
                                        selectedChampions,
                                        onclickTeamChampionGroup
                                    }: Props) => {

    const [teamCompositions, setTeamCompositions] = useState<TeamComposition[] | null>(null);

    useEffect(() => {
        if(selectedChampions.some(champion => !!champion)) {
            queryTeamCompositions(selectedChampions).then(setTeamCompositions)
        }
    }, [selectedChampions]);

    if (teamCompositions == null) {
        return <></>
    }

    return (
        <div className={"grid justify-center max-w-[800px]"}>
            <div className="grid grid-cols-6 gap-4 place-items-center font-bold text-white p-2">
                <span>Top</span>
                <span>Jungle</span>
                <span>Mid</span>
                <span>ADC</span>
                <span>Support</span>
                <span></span>
            </div>
            {
                teamCompositions.map(teamComposition =>
                    <div key={teamComposition.id} className="grid-cols-12 p-4 border-y border-gray-300">
                        <div className="font-semibold" style={{color: 'white'}}> pick count: {teamComposition.pick_count} win count: {teamComposition.win_count} </div>
                        <div className="grid grid-cols-6 gap-4 place-items-center font-medium">
                            <ChampionCard champ={teamComposition.top_champion}/>
                            <ChampionCard champ={teamComposition.jungle_champion}/>
                            <ChampionCard champ={teamComposition.mid_champion}/>
                            <ChampionCard champ={teamComposition.adc_champion}/>
                            <ChampionCard champ={teamComposition.support_champion}/>
                            <div className={'cursor-pointer'} onClick={() => onclickTeamChampionGroup(teamComposition)}>
                                적용
                            </div>
                        </div>
                    </div>
                )

            }
        </div>
    )
}
