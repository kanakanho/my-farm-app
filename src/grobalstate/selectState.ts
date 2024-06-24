import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { colors, numbers, colorCodes } from "../component/utils/colors";

export const selectState = atom({
    key: "selectState",
    default: {
        selectLeft: {
            color: colors[0],
            number: numbers[0],
            colorCode: colorCodes[0],
        },
        selectRight: {
            color: colors[0],
            number: numbers[0],
            colorCode: colorCodes[0],
        }
    },
    dangerouslyAllowMutability: true,
});

export const useSelectState = () => {
    return useRecoilValue(selectState);
};

export const useSelectMutators = () => {
    const setSelectState = useSetRecoilState(selectState);

    const setRightSelectState = useCallback(
        (rightSelectObj: {
            color: string;
            number: string;
            colorCode: string;
        }) => {
            setSelectState((prev) => ({
                ...prev,
                selectRight: rightSelectObj,
            }));
        },
        [setSelectState]
    );

    const setLeftSelectState = useCallback(
        (leftSelectObj: {
            color: string;
            number: string;
            colorCode: string;
        }) => {
            setSelectState((prev) => ({
                ...prev,
                selectLeft: leftSelectObj,
            }));
        },
        [setSelectState]
    );

    return {
        setRightSelectState,
        setLeftSelectState,
    };
};
