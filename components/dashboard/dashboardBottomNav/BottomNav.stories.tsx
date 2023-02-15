import {ComponentStory, ComponentMeta} from '@storybook/react';
import BottomNav, {IBottomNav} from './BottomNav';
import {defaultDashboardBottomNavProps} from './BottomNav.mocks';

export default {
    title: 'dashboard/dashboardBottomNav/BottomNav',
    component: BottomNav,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof BottomNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomNav> = (args) => (
    <BottomNav {...args} />
);

export const SBottomNav = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SBottomNav.args = {
    ...defaultDashboardBottomNavProps.base,
} as IBottomNav;