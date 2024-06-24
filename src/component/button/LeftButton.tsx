import { FC } from "react";
import { styled } from "styled-components";
import SwitchButton from "./SwitchButton";
import { useModeMutators, useModeState } from "../../grobalstate/modeState";

const SwitchButtonContainer = styled.div`
    position: fixed;
    top: 1vh;
    left: 4.5vw;
    display: inline-block;
    background-color: #f3f3f3;
    padding: 0.5vw;
    border-radius: 0.3vw;
    @media screen and (max-width: 600px) {
        top: 2vw;
        left: 2vw;
    }
`;

const LeftButton: FC = () => {
    const { left: leftMode } = useModeState();
    const { setLeftModeState } = useModeMutators();

    return (
        <SwitchButtonContainer>
            <SwitchButton mode={leftMode} setMode={(newMode: string) => setLeftModeState(newMode)} />
        </SwitchButtonContainer>
    );
};

export default LeftButton;
