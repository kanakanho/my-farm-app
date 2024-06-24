import { FC } from "react";
import { styled } from "styled-components";

type Props = {
    mode: string;
    setMode: (newMode: string) => void;
};

const OnButton = styled.div`
    color: #333;
    padding: 1vw 0.5vw;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4vw;
    background-color: #f3f3f3;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
    @media screen and (max-width: 600px) {
        width: 8vw;
    }
`;

const OffButton = styled.div`
    color: #f3f3f3;
    padding: 1vw 0.5vw;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4vw;
    background-color: #999;
    border: 1px solid #fff;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.4);
    @media screen and (max-width: 600px) {
        width: 8vw;
    }
`;

const Text = styled.p`
    padding: 0.3vw 0 0vw 0;
    display: inline;
    font-size: 1.4vw;
    @media screen and (max-width: 600px) {
        padding: 2vw 0.5vw 1vw 0.5vw;
        font-size: 3vw;
    }
`;

const SwitchButton: FC<Props> = ({ mode, setMode }) => {
    const setCardMode = () => {
        setMode("card");
    };
    const setScrollMode = () => {
        setMode("scroll");
    };

    if (mode === "card") {
        return (
            <>
                <OnButton onClick={setCardMode}>
                    <Text>Card</Text>
                </OnButton>
                <OffButton onClick={setScrollMode}>
                    <Text>Scroll</Text>
                </OffButton>
            </>
        );
    } else {
        return (
            <>
                <OffButton onClick={setCardMode}>
                    <Text>Card</Text>
                </OffButton>
                <OnButton onClick={setScrollMode}>
                    <Text>Scroll</Text>
                </OnButton>
            </>
        );
    }
};

export default SwitchButton;
