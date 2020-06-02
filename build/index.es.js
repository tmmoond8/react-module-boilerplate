import { useState, createElement } from 'react';

var SampleComponent = function (props) {
    var text = props.text;
    var value = useState('abc')[0];
    return createElement("div", { style: { backgroundColor: 'black', color: "white" } },
        "32 ",
        text,
        " ",
        value);
};

export default SampleComponent;
