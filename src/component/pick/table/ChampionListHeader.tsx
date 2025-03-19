

interface Props {
    selectedTab: string;
    onChangeTab: (tab: string) => void;
    searchText: string;
    onChangeSearchText: (text: string) => void;
}

export const ChampionListHeader = ({
                                       selectedTab,
                                       onChangeTab,
                                       searchText,
                                       onChangeSearchText,
                                   }: Props) => {

    const tabs = ["all", "top", "jungle", "mid", "ads", "sub"];
    const tabKrName: Record<string, string> = {
        "all": "전체",
        "top": "탑",
        "jungle": "정글",
        "mid": "미드",
        "ads": "원딜",
        "sub": "서폿",
    }
    return (
        <div className="flex items-center border-b border-gray-300 pb-2 mb-2 justify-between">
            {/* Tabs */}
            <div className="flex w-full space-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onChangeTab(tab)}
                        className={`py-2 px-1 text-white cursor-pointer ${
                            selectedTab === tab ? "border-b-2 border-blue-500 font-bold" : ""
                        }`}
                    >
                        {tabKrName[tab]}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="ml-auto">
                <input
                    type="text"
                    placeholder="챔피언 검색"
                    style={{
                        color: 'white'
                    }}
                    value={searchText}
                    onChange={(e) => onChangeSearchText(e.target.value)}
                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>

    );
}