// import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentMeta } from '@storybook/react';
// import DashboardDrawerItem, { IDashboardDrawerItem } from './DashboardDrawerItem';
import DashboardDrawerItem from './DashboardDrawerItem';
// import { defaultDashboardDrawerItemProps } from './DashboardDrawerItem.mocks';

export default {
    title: 'layouts/dashboard/dashboardDrawer/dashboardDrawerItem/DashboardDrawerItem',
    component: DashboardDrawerItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardDrawerItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof DashboardDrawerItem> = (args) => (
//     <DashboardDrawerItem {...args} />
// );
//
// export const SDashboardDrawerItem = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
//
// SDashboardDrawerItem.args = {
//     ...defaultDashboardDrawerItemProps.base,
// } as IDashboardDrawerItem;