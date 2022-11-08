import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableDraggable, { ITableDraggable } from './TableDraggable';
import { defaultTableDraggableProps } from './TableDraggable.mocks';

export default {
    title: 'dataDisplay/tables/tableDraggable/TableDraggable',
    component: TableDraggable,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof TableDraggable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableDraggable> = (args) => (
    <TableDraggable {...args} />
);

export const SDashboardScouts = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardScouts.args = {
    ...defaultTableDraggableProps.base,
} as ITableDraggable;