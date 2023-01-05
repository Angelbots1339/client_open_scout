import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardDrawerItem, { IDashboardDrawerItem } from './DashboardDrawerItem';
import {defaultDashboardDrawerItemProps} from './DashboardDrawerItem.mocks';
import {Stack} from "@mui/system";

export default {
    title: 'dashboard/dashboardDrawer/dashboardDrawerItem/DashboardDrawerItem',
    component: DashboardDrawerItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardDrawerItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardDrawerItem> = (base1) => (
    <Stack>
    <DashboardDrawerItem {...base1} />
    {/*<DashboardDrawerItem {...base2} />*/}
    </Stack>

);

export const SDashboardDrawerItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardDrawerItem.args = {
    ...defaultDashboardDrawerItemProps.base1,
    ...defaultDashboardDrawerItemProps.base2
} as IDashboardDrawerItem;