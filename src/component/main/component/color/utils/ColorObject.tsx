import { FC } from "react";
import ColorTile from "./ColorTile";
import { styled } from "styled-components";
import ColorCopy from "./ColorCopy";

type Props = {
    colorObject: Record<string, object>;
    direction: boolean;
};

const ColorObjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-gap: 4px;
    padding: 2px;
`;

const ColorObject: FC<Props> = ({ colorObject,direction }) => {
    return (
        <ColorObjectContainer>
            {Object.keys(colorObject).map((key, index) => {
                if (colorObject[key].toString().includes("v")) {
                    return;
                }
                return (
                    <ColorCopy key={index} colorCode={colorObject[key].toString()} direction={direction}>
                        <ColorTile key={index} colorCode={colorObject[key].toString()} />
                    </ColorCopy>
                );
            })}
        </ColorObjectContainer>
    );
};

export default ColorObject;
