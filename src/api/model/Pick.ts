

export type Champion = {
    id: string;
    name: string;
}

export type SpellType = "점멸" | "점화";

export type UserCard = {
    champion: Champion;
    userId: string;
    firstSpell: SpellType;
    secondSpell: SpellType;
}