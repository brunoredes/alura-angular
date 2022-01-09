export type Transfer = {
    id?: string | number;
    value: number;
    recipient: number | string;
    date?: Date | number;
}