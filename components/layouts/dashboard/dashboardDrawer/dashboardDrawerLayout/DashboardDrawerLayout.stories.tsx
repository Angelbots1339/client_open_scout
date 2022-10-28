import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardDrawerLayout from './DashboardDrawerLayout';

export default {
    title: 'layouts/dashboard/dashboardDrawer/dashboardDrawerLayout/DashboardDrawerLayout',
    component: DashboardDrawerLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardDrawerLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardDrawerLayout> = (args) => (
    <DashboardDrawerLayout {...args} />
);

export const SDashboardDrawerLayout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// SDashboardDrawerLayout.args = {
//     ...DashboardDrawerLayoutProps.base,
// } as IDashboardDrawerLayout;