const heading1 = React.createElement("h1",{id:"heading1"},"Im Heading 1");
const heading2 = React.createElement("h2",{id:"heading2"},"Im Heading 2");
const heading3 = React.createElement("h3",{id:"heading3"},"Im Heading 3");
const para = React.createElement("p",{id:"para"},[heading1,heading2,heading3]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(para);