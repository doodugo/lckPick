import axios from "axios";
import {Champion} from "@/api/champion/models";


const apiClient = axios.create({
    baseURL: "/lol"
});

export const queryChampionList = async (): Promise<Champion[]> => {
    return apiClient.get("/champion")
        .then(res => res.data)
};
