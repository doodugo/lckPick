import axios from "axios";
import {TeamComposition} from "@/api/team/models";


const apiClient = axios.create({
    baseURL: "/api/lol"
});

export const queryTeamCompositions = async (): Promise<TeamComposition> => {
    return apiClient.get("/team-composition")
        .then(res => res.data)
}