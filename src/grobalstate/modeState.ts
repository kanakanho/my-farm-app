import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { modes } from "./utills/modeList";

export const modeState = atom({
    key: "modeState",
    default: {
        left: modes[0],
        right: modes[1],
    },
    dangerouslyAllowMutability: true,
});

export const useModeState = () => {
    return useRecoilValue(modeState);
};

export const useModeMutators = () => {
    const setModeState = useSetRecoilState(modeState);

    const setRightModeState = useCallback(
        (rightMode: string) => {
            setModeState((prev) => ({
                ...prev,
                right: rightMode,
            }));
        },
        [setModeState]
    );

    const setLeftModeState = useCallback(
        (leftMode: string) => {
            setModeState((prev) => ({
                ...prev,
                left: leftMode,
            }));
        },
        [setModeState]
    );

    return {
        setRightModeState,
        setLeftModeState,
    };
};
