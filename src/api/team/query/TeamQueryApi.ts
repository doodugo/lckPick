import axios from "axios";
import {TeamComposition} from "@/api/team/models";
import {Champion} from '@/api/champion/models'

const apiClient = axios.create({
    baseURL: "/lol"
});

const lines = ['top', 'jug', 'mid', 'adc', 'sup']
export const queryTeamCompositions = async (champions: (Champion | null)[]): Promise<TeamComposition[]> => {
    let url = '/team-composition';
    let count = 0;
    for(let i = 0; i < 5; i++) {
        const champion = champions[i];
        if(!!champion) {
            if(count == 0)
                url += '?'
            else
                url += '&'
            url += lines[i] + '=' + champion.id
            count++
        }
    }
    return apiClient.get(url)
        .then(res => res.data)
}
