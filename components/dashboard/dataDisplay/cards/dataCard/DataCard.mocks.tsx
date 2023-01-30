import {IDataCard} from "./DataCard";

const testChild: React.ReactNode = <div>Test Content</div>;

const base: IDataCard = {

    title: "Test Title",
    size: "large",
    children: testChild,

};

export const defaultTableDraggableProps = {
    base,
};