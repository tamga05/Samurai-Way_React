import React from "react";


type TechnologiesPropsType = {
    scills: Array<TechnologiesScills>
}

export type TechnologiesScills = {
    id: number,
    span: string
}


const Technologies = (props: TechnologiesPropsType) => {
    return (
        <div>
            <ul>
                <li>{props.scills[0].span}</li>
                <li>{props.scills[1].span}</li>
                <li>{props.scills[2].span}</li>
                <li>{props.scills[3].span}</li>
            </ul>
        </div>
    );
}

export default Technologies;