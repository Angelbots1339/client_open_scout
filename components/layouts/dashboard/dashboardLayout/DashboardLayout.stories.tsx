import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardLayout, { IDashboardLayout } from './DashboardLayout';
import { defaultLandingAppBarProps } from './DashboardLayout.mocks';

export default {
    title: 'layouts/dashboard/DBDrawerCollapsedLayout',
    component: DashboardLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardLayout> = (args) => (
    <DashboardLayout {...args} />
);

export const SLandingAppBar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SLandingAppBar.args = {
    ...defaultLandingAppBarProps.base,
} as IDashboardLayout;