import React from 'react';
import Header from "./Header";

export default {
    title: 'Components/Header',
    component: Header
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Header {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    logoUrl: 'https://picsum.photos/200/100',
    strapline: 'I am a strapline'
};
