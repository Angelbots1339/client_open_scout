import {ComponentStory, ComponentMeta} from '@storybook/react';
import DashboardDrawer from './DashboardDrawer';

export default {
    title: 'dashboard/dashboardDrawer/dashboardDrawer/DashboardDrawer',
    component: DashboardDrawer,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardDrawer> = (args) => (
    <DashboardDrawer {...args} />
);

export const SDashboardDrawerLayout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// SDashboardDrawerLayout.args = {
//     ...DashboardDrawerLayoutProps.base,
// } as IDashboardDrawerLayout;