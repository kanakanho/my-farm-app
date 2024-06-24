import { FC } from "react";
import { styled } from "styled-components";
import { colorType } from "../../../../../grobalstate/utills/colorType";

type color = {
    color: string;
};

const SelectCardContainer = styled.div<color>`
    width: 16vw;
    height: 16vw;
    background-color: #${(props) => props.color};
    border-radius: 1vw;
    border: 0.5vw solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 5px rgba(33, 33, 33, 0.4);

    @media screen and (max-width: 600px) {
        width: 40vw;
        height: 40vw;
    }
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4vw;
    font-weight: bold;
    background-color: #fff;
    border-radius: 0.5vw 0.5vw 0 0;
    @media screen and (max-width: 600px) {
        height: 8vw;
    }
`;

const TextMinContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const Text = styled.div`
    color: #333;
    font-size: 1.5vw;
    @media screen and (max-width: 600px) {
        font-size: 4vw;
    }
`;

const SelectCard: FC<colorType> = ({ color, number, colorCode }) => {
    return (
        <SelectCardContainer color={colorCode}>
            <TextContainer>
                <TextMinContainer>
                    <Text>{color}</Text>
                    <Text>{number}</Text>
                </TextMinContainer>
                <Text>{colorCode}</Text>
            </TextContainer>
        </SelectCardContainer>
    );
};

export default SelectCard;
