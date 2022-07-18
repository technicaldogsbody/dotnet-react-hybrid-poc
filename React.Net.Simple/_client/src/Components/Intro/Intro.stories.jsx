import React from 'react';
import Intro from "./Intro";

export default {
    title: 'Components/Intro',
    component: Intro
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Intro {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    introTitle: 'Title',
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac congue urna, vitae tempor purus. Nullam et sodales arcu. Duis dapibus aliquam quam porttitor viverra. Proin fringilla nisi sit amet dolor dignissim eleifend. Duis tincidunt libero vel diam auctor, vitae tristique felis venenatis. Vestibulum ligula ipsum, rhoncus eu diam eu, dignissim blandit nunc. Vestibulum euismod dui vel mi porttitor suscipit. Sed vitae urna id sapien suscipit viverra eget et tortor.'
};
