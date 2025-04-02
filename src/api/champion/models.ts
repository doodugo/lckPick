export interface Champion {
    id: string;
    name: string;
    name_local: string;
    full_image_url: string;
    icon_image_url: string;
    positions: ChampionPosition[];
}
export type Top = 'top'
export type Jug = 'jug'
export type Mid = 'mid'
export type Adc = 'adc'
export type Sup = 'sup'
export type ChampionPosition = Top | Jug | Mid | Adc | Sup;
