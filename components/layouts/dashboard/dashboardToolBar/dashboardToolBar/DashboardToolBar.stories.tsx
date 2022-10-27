import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardToolBar, { IDBToolBar } from './DashboardToolBar';
import { defaultDBToolBarProps } from './DashboardToolBar.mocks';

export default {
    title: 'layouts/dashboard/dashboardToolBar/dashboardToolBar/DashboardToolBar',
    component: DashboardToolBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardToolBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardToolBar> = (args) => (
    <DashboardToolBar {...args} />
);

export const SDashboardToolBar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardToolBar.args = {
    ...defaultDBToolBarProps.base,
} as IDBToolBar;