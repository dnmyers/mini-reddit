import Header from "../components/Header";

import "../styles/main.scss";
import "./App.css";

function App() {
    const logo = (
        <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
            {" "}
            <defs>
                {" "}
                <linearGradient id='grad1' x1='0%' y1='0%' x2='0%' y2='100%'>
                    {" "}
                    <stop
                        offset='0%'
                        style={{ stopColor:"orangered", stopOpacity: 1 }}
                    />{" "}
                    <stop
                        offset='100%'
                        style={{ stopColor: "dodgerblue", stopOpacity: 1 }}
                    />{" "}
                </linearGradient>{" "}
            </defs>
            <path
                fill='url(#grad1)'
                d='M 100,10 L 95,20 L 105,20 Z M 100,190 L 95,180 L 105,180 Z'
            />
            <text
                fill='white'
                fontSize='30'
                fontFamily='Arial'
                textAnchor='middle'
                x='100'
                y='150'
            >
                Mini
            </text>
            <text
                fill='white'
                fontSize='30'
                fontFamily='Arial'
                textAnchor='middle'
                x='100'
                y='120'
            >
                Reddit
            </text>
        </svg>
    );

    return (
        <>
            <Header />
            <p>{logo}</p>
        </>
    );
}

export default App;
