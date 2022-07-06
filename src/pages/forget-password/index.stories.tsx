import { ComponentStory, ComponentMeta } from '@storybook/react';

import ForgetPassword from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Authentication/Forget-password',
  component: ForgetPassword,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ForgetPassword>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForgetPassword> = (args) => <ForgetPassword {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {

};
