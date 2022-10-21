import { ComponentStory, ComponentMeta } from '@storybook/react';
import DBDrawerOpenLayout, { IDBDrawerOpenLayout } from './DBDrawerOpenLayout';
import { DBDrawerOpenLayoutProps } from './DBDrawerOpenLayout.mocks';

export default {
    title: 'layouts/dashboard/dbDrawerOpen/DBDrawerOpenLayout',
    component: DBDrawerOpenLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DBDrawerOpenLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DBDrawerOpenLayout> = (args) => (
    <DBDrawerOpenLayout {...args} />
);

export const SDBDrawerOpenLayout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDBDrawerOpenLayout.args = {
    ...DBDrawerOpenLayoutProps.base,
} as IDBDrawerOpenLayout;