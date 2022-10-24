import { ComponentStory, ComponentMeta } from '@storybook/react';
import DBDrawerItem, { IDBDrawerItem } from './DBDrawerItem';
import { DBDrawerCollapsedLayoutProps } from './DBDrawerItem.mocks';

export default {
    title: 'layouts/dashboard/dbDrawer/dbDrawerItem/DBDrawerOpenLayout',
    component: DBDrawerItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DBDrawerItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DBDrawerItem> = (args) => (
    <DBDrawerItem {...args} />
);

export const SDBDrawerCollapsedLayout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SDBDrawerCollapsedLayout.args = {
    ...DBDrawerCollapsedLayoutProps.base,
} as IDBDrawerItem;