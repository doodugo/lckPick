import {HeaderLayout} from "@/component/layout/HeaderLayout";
import {LeftSidebar} from "@/component/layout/LeftSidebar";
import {ReactNode} from "react";
import {MainContentsLayout} from "@/component/layout/MainContentsLayout";

interface Props {
    children: ReactNode;
}

export const LckLayout = ({
                              children,
   }: Props) => {
    return (
        <div className={"flex h-screen"}>
            <div className="flex-1 flex flex-col">
                <HeaderLayout/>
                <div className={'mt-5'}/>
                <LeftSidebar/>
                <MainContentsLayout>
                    {children}
                </MainContentsLayout>
            </div>
        </div>
    )
}