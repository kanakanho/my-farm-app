import { FC } from "react";
import { styled } from "styled-components";

type Props = {
    colorCode: string;
};

type ColorTileContainerProps = {
    colorCode: string;
};

const ColorTileContainer = styled.div<ColorTileContainerProps>`
    height: 2vw;
    background-color: #${(props) => props.colorCode};
    border-radius: 4px;
    @media screen and (max-width: 600px) {
        height: 4vw;
    }
`;

const ColorTile: FC<Props> = ({ colorCode }) => {
    return <ColorTileContainer colorCode={colorCode} />;
};

export default ColorTile;
