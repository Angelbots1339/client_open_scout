import {ComponentStory, ComponentMeta} from '@storybook/react';
import DashboardLayout, {IDashboardLoading} from './DashboardLoading';
import {defaultDashboardLoadingProps} from './DashboardLoading.mocks';

export default {
    title: 'dashboard/dashboardLoading/DashboardLoading',
    component: DashboardLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardLayout> = (args) => (
    <DashboardLayout {...args} />
);

export const SDashboardLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardLoading.args = {
    ...defaultDashboardLoadingProps.base,
} as IDashboardLoading;