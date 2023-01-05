import { ComponentStory, ComponentMeta } from '@storybook/react';
import LandingAppBarButton, { ILandingAppBarButton } from './LandingAppBarButton';
import { defaultLandingAppBarButtonProps } from './LandingAppBarButton.mocks';

export default {
    title: 'layouts/landingPage/landingAppBarButton/LandingAppBarButton',
    component: LandingAppBarButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof LandingAppBarButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LandingAppBarButton> = (args) => (
    <LandingAppBarButton {...args} />
);

export const SLandingAppBarButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SLandingAppBarButton.args = {
    ...defaultLandingAppBarButtonProps.base,
} as ILandingAppBarButton;