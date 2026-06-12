
// createRoot(document.getElementById('root')).render(
//   //App(),
//   <StrictMode >
//     <App />
//   </StrictMode>
// )

// Above was done in react, we will try to replicate here
function App() {
    // remember, jsx was returned, but internaly react make a tree like below
    return {
        // <h1>Chai aur React</h1>
        type: 'h1',
        props: {
            // give attribute here
            className: 'header'
        },
        children: 'Chai aur custom react'
    }
}

function createRoot(root) {
    return {
        render(element) {
            const elem = document.createElement(element.type);
            elem.setAttribute('class', element.props.className);
            elem.textContent = element.children;
            root.appendChild(elem);
        }
    }
}

createRoot(document.getElementById('root')).render(
    // <App/>
    App()
);

