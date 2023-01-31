import {ComponentStory, ComponentMeta} from '@storybook/react';
import {IDataCard} from './DataCard';
import {defaultTableDraggableProps} from './DataCard.mocks';
import DataCard from "./DataCard";

export default {
    title: 'dashboard/dataDisplay/cards/dataCard/DataCard',
    component: DataCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DataCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataCard> = (args) => (
    <DataCard {...args} />
);

export const SDashboardScouts = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardScouts.args = {
    ...defaultTableDraggableProps.base,
} as IDataCard;