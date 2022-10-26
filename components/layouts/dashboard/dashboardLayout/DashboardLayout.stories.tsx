import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardLayout, { IDBToolBarLayout } from './DashboardLayout';
import { defaultDashboardLayoutProps } from './DashboardLayout.mocks';

export default {
    title: 'layouts/dashboard/dashboardLayout/DBToolBarMenuItem',
    component: DashboardLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardLayout> = (args) => (
    <DashboardLayout {...args} />
);

export const SDashboardLayout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardLayout.args = {
    ...defaultDashboardLayoutProps.base,
} as IDBToolBarLayout;