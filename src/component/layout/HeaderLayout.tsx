'use client'

export const HeaderLayout = () => {
    const onClickPidBack = () => {

    }
    return (
        <header className="fixed justify-between top-0 left-0 w-full h-8 bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-700 text-white flex items-center px-4 z-10">
            <span>
                LoL Pick
            </span>
            <div className={'cursor-pointer'} onClick={onClickPidBack}>
                피드백
            </div>
        </header>

    );
}