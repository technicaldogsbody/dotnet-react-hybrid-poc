import React from 'react';
import Freetext from "./Freetext";

export default {
    title: 'Components/Freetext',
    component: Freetext
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Freetext {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac congue urna, vitae tempor purus. Nullam et sodales arcu. Duis dapibus aliquam quam porttitor viverra. Proin fringilla nisi sit amet dolor dignissim eleifend. Duis tincidunt libero vel diam auctor, vitae tristique felis venenatis. Vestibulum ligula ipsum, rhoncus eu diam eu, dignissim blandit nunc. Vestibulum euismod dui vel mi porttitor suscipit. Sed vitae urna id sapien suscipit viverra eget et tortor.'
};
