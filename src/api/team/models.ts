import {Champion} from "@/api/champion/models";


export interface TeamComposition {
    id: string;
    top_champion: Champion;
    jungle_champion: Champion;
    mid_champion: Champion;
    adc_champion: Champion;
    support_champion: Champion;
    pick_count: number;
    win_count: number;
}