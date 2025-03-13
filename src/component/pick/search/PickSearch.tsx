

export const PickSearch = () => {
    return (
        <div className="z-10 flex flex-col items-center pt-10">
            <h1 className="text-white text-4xl font-bold">.GG</h1>
            <div className="mt-4 flex items-center bg-white px-4 py-2 rounded-full shadow-lg">
                <select className="border-none outline-none">
                    <option>Korea</option>
                    <option>NA</option>
                </select>
                <input
                    type="text"
                    placeholder="플레이어 이름 + #KR1"
                    className="ml-4 px-2 py-1 outline-none"
                />
            </div>
        </div>
    );
}