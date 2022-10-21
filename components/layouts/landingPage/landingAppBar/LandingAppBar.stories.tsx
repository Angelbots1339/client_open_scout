import { ComponentStory, ComponentMeta } from '@storybook/react';
import LandingAppBar, { ILandingAppBar } from './LandingAppBar';
import { defaultLandingAppBarProps } from './LandingAppBar.mocks';

export default {
    title: 'layouts/landingPage/LandingAppBar',
    component: LandingAppBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof LandingAppBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LandingAppBar> = (args) => (
    <LandingAppBar {...args} />
);

export const SLandingAppBar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SLandingAppBar.args = {
    ...defaultLandingAppBarProps.base,
} as ILandingAppBar;