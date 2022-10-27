import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardToolBarAccountItem, { IDBToolBarAccountItem } from './DashboardToolBarAccountItem';
import { defaultDBToolBarAccountItemProps } from './DashboardToolBarAccountItem.mocks';

export default {
    title: 'layouts/dashboard/dashboardToolBar/dashboardToolBarAccountItem/DashboardToolBarAccountItem',
    component: DashboardToolBarAccountItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardToolBarAccountItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardToolBarAccountItem> = (args) => (
    <DashboardToolBarAccountItem {...args} />
);

export const SDashboardToolBarAccountItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardToolBarAccountItem.args = {
    ...defaultDBToolBarAccountItemProps.base,
} as IDBToolBarAccountItem;