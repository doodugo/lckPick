import {ChangeEvent, useState} from "react";

const opGGUrl = 'https://www.op.gg/summoners/'

export const PickSearch = () => {

    const [ searchText, setSearchText ] = useState('');

    const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const enterSearch = (keyCord: number) => {

        if(keyCord !== 13) return;

        if(searchText === '') return alert('검색어를 입력해주세요');

        if(!searchText.includes('#')) {
            window.location.href = `${opGGUrl}/search?q=${searchText}&region=kr`
            return;
        }
        const searchData = searchText.replace(' #', '-')
        window.location.href = `${opGGUrl}/kr/${searchData}`
    }

    return (
        <div className="z-10 flex flex-col items-center pt-10">
            <h1 className="text-white text-4xl font-bold">.GG</h1>
            <div className="mt-4 flex items-center bg-white px-4 py-2 rounded-full shadow-lg">
                <select className="border-none outline-none">
                    <option defaultChecked >Korea</option>
                </select>
                <input
                    type="text"
                    placeholder="플레이어 이름 + #KR1"
                    className="ml-4 px-2 py-1 outline-none"
                    value={searchText}
                    onChange={onChangeSearchText}
                    onKeyUp={e => enterSearch(e.keyCode)}
                />
            </div>
        </div>
    );
}