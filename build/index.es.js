import { createElement } from 'react';

var SampleComponent = function (props) {
    var text = props.text;
    return createElement("div", { style: { backgroundColor: 'black', color: "white" } },
        "Hello ",
        text);
};

export default SampleComponent;
//# sourceMappingURL=index.es.js.map
