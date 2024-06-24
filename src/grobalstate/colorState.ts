import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { colors, numbers } from "../component/utils/colors";

export const colorState = atom({
    key: "colorState",
    default: {
        colorLeft: {
            color: colors[0],
            number: numbers[0],
            colorCode: "ffffff",
        },
        colorRight: {
            color: colors[0],
            number: numbers[0],
            colorCode: "000000",
        }
    },
    dangerouslyAllowMutability: true,
});

export const useColorState = () => {
    return useRecoilValue(colorState);
};

export const useColorMutators = () => {
    const setColorState = useSetRecoilState(colorState);

    const setRightColorState = useCallback(
        (rightColorObj: {
            color: string;
            number: string;
            colorCode: string;
        }) => {
            setColorState((prev) => ({
                ...prev,
                colorRight: rightColorObj,
            }));
        },
        [setColorState]
    );

    const setLeftColorState = useCallback(
        (leftColorObj: {
            color: string;
            number: string;
            colorCode: string;
        }) => {
            setColorState((prev) => ({
                ...prev,
                colorLeft: leftColorObj,
            }));
        },
        [setColorState]
    );

    return {
        setRightColorState,
        setLeftColorState,
    };
};
