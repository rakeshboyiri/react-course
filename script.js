

const heading2 = React.createElement('div', {id:'child'}, "Namaste React");
const heading = React.createElement('div', {id:'parent'}, heading2);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)