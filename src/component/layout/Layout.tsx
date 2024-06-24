import { FC } from "react";
import Header from "./Header";
import ColorCard from "../main/ColorCard";
import ColorScroll from "../main/ColorScroll";
import { styled } from "styled-components";
import LeftButton from "../button/LeftButton";
import RightButton from "../button/RightButton";
import { useModeState } from "../../grobalstate/modeState";

const ButtonContainer = styled.div`
    margin-left: max(4vw);
    line-height: 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    @media screen and (max-width: 600px) {
        margin-left: 0;
    }
`;

const MainContainer = styled.main`
    margin-left: max(4vw);
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: 1;
    @media screen and (max-width: 600px) {
        margin-left: 0;
    }
`;
const CardContainer = styled.div`
    width: 48vw;
    @media screen and (max-width: 600px) {
        width: 100vw;
    }
`;

const ColorScrollContainer = styled.div`
    width: 48vw;
`;

const Layout: FC = () => {
    const mode = useModeState();
    const width = window.innerWidth;
    return (
        <>
            <Header />
            <MainContainer>
                {mode.left === "card" ? (
                    <CardContainer>
                        <ColorCard position={"left"} />
                    </CardContainer>
                ) : (
                    <ColorScrollContainer>
                        <ColorScroll position={"left"} />
                    </ColorScrollContainer>
                )}
                {width > 768 ? (
                    mode.right === "card" ? (
                        <CardContainer>
                            <ColorCard position={"right"} />
                        </CardContainer>
                    ) : (
                        <ColorScrollContainer>
                            <ColorScroll position={"right"} />
                        </ColorScrollContainer>
                    )
                ) : null}
            </MainContainer>
            <ButtonContainer>
                <LeftButton />
                {width > 768 ? <RightButton /> : null}
            </ButtonContainer>
        </>
    );
};

export default Layout;
