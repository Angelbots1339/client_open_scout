import { ComponentStory, ComponentMeta } from '@storybook/react';
import {defaultDashboardDrawerItemProps} from './NextBreadcrumbs.mocks';
import DashboardLoading, {IDashboardLoading} from "../dashboardLoading/DashboardLoading";

export default {
    title: 'dashboard/dashboardDrawer/dashboardDrawerItem/DashboardDrawerItem',
    component: DashboardLoading,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardLoading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardLoading> = () => (
    <DashboardLoading/>
);

export const SDashboardDrawerItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardDrawerItem.args = {
    ...defaultDashboardDrawerItemProps.base,
} as IDashboardLoading;