import {ComponentStory, ComponentMeta} from '@storybook/react';
import DashboardLayout, {IDashboardTabs} from './DashboardTabs';
import {defaultDashboardTabsProps} from './DashboardTabs.mocks';

export default {
    title: 'dashboard/dashboardLayout/IDashboardTabs',
    component: DashboardLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardLayout> = (args) => (
    <DashboardLayout {...args} />
);

export const SDashboardTabs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardTabs.args = {
    ...defaultDashboardTabsProps.base,
} as IDashboardTabs;