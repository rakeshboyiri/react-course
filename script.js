
const heading = React.createElement("h1",{id:"heading"},"Hello World from React!!!");
const para = React.createElement("p",{id:"para"},heading);
const parent = React.createElement("div",{id:"parent"},para);


console.log(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);