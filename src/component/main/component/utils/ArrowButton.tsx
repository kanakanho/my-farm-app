import { FC } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { styled } from "styled-components";
import { colors, numbers } from "../../../utils/colors";

type Props = {
    color: string;
    number: string;
    setColorId: ({ color, number }: { color: string; number: string }) => void;
};

const ArrowButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
`;

const WithArrowButton = styled.div`
    min-width: 8vw;
    padding: 0.4vw 1vw 0.3vw 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 1vw;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

const ArrowBox = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
`;

const Text = styled.p`
    font-size: 1.5rem;
    padding: 0 0.5vw;
`;

const ArrowButton: FC<Props> = ({ color, number, setColorId }) => {
    let nextNumber = number;
    if (numbers.indexOf(number) === numbers.length - 1) {
        nextNumber = numbers[0];
    } else {
        nextNumber = numbers[numbers.indexOf(number) + 1];
    }
    let previousNumber = number;
    if (numbers.indexOf(number) === 0) {
        previousNumber = numbers[numbers.length - 1];
    } else {
        previousNumber = numbers[numbers.indexOf(number) - 1];
    }

    let nextColor = color;
    let previousColor = color;
    if (numbers.indexOf(number) === numbers.length - 1) {
        // nextColor = colors[colors.indexOf(color) + 1];
        if (colors.indexOf(color) === colors.length - 1) {
            nextColor = colors[0];
        } else {
            nextColor = colors[colors.indexOf(color) + 1];
        }
    } else if (numbers.indexOf(number) === 0) {
        if (colors.indexOf(color) === 0) {
            previousColor = colors[colors.length - 1];
        } else {
            previousColor = colors[colors.indexOf(color) - 1];
        }
    }

    const onNextClick = () => {
        setColorId({ color: nextColor, number: nextNumber });
    };

    const onPreviousClick = () => {
        setColorId({ color: previousColor, number: previousNumber });
    };

    return (
        <ArrowButtonContainer>
            <WithArrowButton onClick={() => onNextClick()}>
                <ArrowBox>
                    <MdKeyboardDoubleArrowLeft />
                </ArrowBox>
                <Text>{previousNumber + " " + previousColor}</Text>
            </WithArrowButton>
            <WithArrowButton onClick={() => onPreviousClick()}>
                <Text>{nextNumber + " " + nextColor}</Text>
                <ArrowBox>
                    <MdKeyboardDoubleArrowRight />
                </ArrowBox>
            </WithArrowButton>
        </ArrowButtonContainer>
    );
};

export default ArrowButton;
