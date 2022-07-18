import React from 'react';
import Hero from "./Hero";

export default {
    title: 'Components/Hero',
    component: Hero
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Hero {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    backgroundUrl: 'https://picsum.photos/2000/1500',
    heading: 'Lorem ipsum',
    body: 'Lorem ipsum dolor sit amet.'
};
