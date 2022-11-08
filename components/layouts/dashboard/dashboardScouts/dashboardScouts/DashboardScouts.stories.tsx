import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardScouts, { IDashboardScouts } from './DashboardScouts';
import { defaultDashboardScoutsProps } from './DashboardScouts.mocks';

export default {
    title: 'layouts/dashboard/dashboardScouts/dashboardScouts/TableDraggable',
    component: DashboardScouts,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardScouts>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardScouts> = (args) => (
    <DashboardScouts {...args} />
);

export const SDashboardScouts = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardScouts.args = {
    ...defaultDashboardScoutsProps.base,
} as IDashboardScouts;