import {Champion} from "@/api/champion/models";
import {useEffect, useState} from "react";
import {TeamComposition} from "@/api/team/models";
import {ChampionCard} from "@/component/pick/table/ChampionCard";

interface Props {
    selectedChampions: (Champion | null)[];
}

const champion = {
    id: `1`,
    name: '아트록스',
    imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.6.1/img/champion/Aatrox.png"
}

export const TeamCompositionList = ({
                                        selectedChampions
                                    }: Props) => {

    const [teamCompositions, setTeamCompositions] = useState<TeamComposition[] | null>(null);

    useEffect(() => {
        if(selectedChampions.some(champion => !!champion)) {
            setTeamCompositions([
                {
                    id: '',
                    top_champion: champion,
                    jungle_champion: champion,
                    mid_champion: champion,
                    adc_champion: champion,
                    support_champion: champion,
                    pick_count: 1,
                    win_count: 1,
                },
                {
                    id: '',
                    top_champion: champion,
                    jungle_champion: champion,
                    mid_champion: champion,
                    adc_champion: champion,
                    support_champion: champion,
                    pick_count: 1,
                    win_count: 1,
                }
            ])
        } else {
            setTeamCompositions(null)
        }

    }, [selectedChampions]);

    if (teamCompositions == null) {
        return <></>
    }

    return (
        <div className={"grid justify-center max-w-[800px]"}>
            {
                teamCompositions.map(teamComposition =>
                    <div key={teamComposition.id} className="grid-cols-12 p-4 border-y border-gray-300">
                        <div className="font-semibold" style={{color: 'white'}}> pick count: {teamComposition.pick_count} win count: {teamComposition.win_count} </div>
                        <div className="grid grid-cols-5 gap-4 place-items-center font-medium">
                            <ChampionCard champ={teamComposition.top_champion}/>
                            <ChampionCard champ={teamComposition.jungle_champion}/>
                            <ChampionCard champ={teamComposition.mid_champion}/>
                            <ChampionCard champ={teamComposition.adc_champion}/>
                            <ChampionCard champ={teamComposition.support_champion}/>
                        </div>
                    </div>
                )

            }
        </div>
    )
}
