import { FC } from "react";
import { styled } from "styled-components";
import SwitchButton from "./SwitchButton";
import { useModeState, useModeMutators } from "../../grobalstate/modeState";

const SwitchButtonContainer = styled.div`
    position: fixed;
    top: 1vh;
    right: 1vw;
    display: inline-block;
    background-color: #f3f3f3;
    padding: 0.5vw;
    border-radius: 0.3vw;
`;

const RightButton: FC = () => {
    const { right: rightMode } = useModeState();
    const { setRightModeState } = useModeMutators();

    return (
        <SwitchButtonContainer>
            <SwitchButton mode={rightMode} setMode={(newMode: string) => setRightModeState(newMode)} />
        </SwitchButtonContainer>
    );
};

export default RightButton;
