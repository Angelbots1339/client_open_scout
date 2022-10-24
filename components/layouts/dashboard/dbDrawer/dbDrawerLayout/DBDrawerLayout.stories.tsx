import { ComponentStory, ComponentMeta } from '@storybook/react';
import DBDrawerLayout, { IDBDrawerCollapsedLayout } from './DBDrawerLayout';
import { DBDrawerLayoutProps } from './DBDrawerLayout.mocks';

export default {
    title: 'layouts/dashboard/dbDrawer/dbDrawerLayout/DBDrawerListItem',
    component: DBDrawerLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DBDrawerLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DBDrawerLayout> = (args) => (
    <DBDrawerLayout {...args} />
);

export const SDBDrawerLayout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDBDrawerLayout.args = {
    ...DBDrawerLayoutProps.base,
} as IDBDrawerCollapsedLayout;