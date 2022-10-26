import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardToolBarLayout, { IDBToolBarLayout } from './DashboardToolBarLayout';
import { defaultDBToolBarLayoutProps } from './DashboardToolBarLayout.mocks';

export default {
    title: 'layouts/dashboard/dashboardToolBar/dashboardToolBarLayout/DashboardToolBarLayout',
    component: DashboardToolBarLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DashboardToolBarLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardToolBarLayout> = (args) => (
    <DashboardToolBarLayout {...args} />
);

export const SDashboardToolBarLayout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDashboardToolBarLayout.args = {
    ...defaultDBToolBarLayoutProps.base,
} as IDBToolBarLayout;