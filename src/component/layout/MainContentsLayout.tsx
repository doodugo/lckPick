import {ReactNode} from "react";


interface Props {
    children: ReactNode;
}

export const MainContentsLayout = ({ children }: Props) => {
    return (
        // <div style={{marginLeft: 64}}>
        <div>
            {children}
        </div>
    )
}