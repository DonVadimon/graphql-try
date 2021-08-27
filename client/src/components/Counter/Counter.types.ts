export interface ICounterProps {
    value: number;
    onPlusClick: () => void;
    onMinusClick: () => void;
    error?: boolean;
}
