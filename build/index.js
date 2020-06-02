'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var SampleComponent = function (props) {
    var text = props.text;
    var value = React.useState('abc')[0];
    return React.createElement("div", { style: { backgroundColor: 'black', color: "white" } },
        "Hello ",
        text,
        " ",
        value);
};

exports.default = SampleComponent;
//# sourceMappingURL=index.js.map
