import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Title } from './Title';

export default {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Text = Template.bind({});

Text.args = {
  text: 'Some title',
};

export const Emoji = Template.bind({});

Emoji.args = {
  text: '👍🏻👍🏻👍🏻',
};
