import axios from "axios";
import {Champion} from "@/api/champion/models";


const apiClient = axios.create({
    baseURL: "/api/lol"
});

export const queryChampionList = async (): Promise<Champion[]> => {
    return apiClient.get("/champions")
        .then(res => res.data)
};