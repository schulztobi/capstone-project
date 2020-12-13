import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto";
}

body {
    margin: 0;
    padding:0;
    background: linear-gradient(-45deg,#EE7752,#E73C7E,#23A6D5,#23D5AB);
    background-size: 400% 400%;
    position:relative;
    animation: change 10s ease-in-out infinite;
    height: 100vh;
}

:root {
    --primary: #EE7752;
    --secondary: #E73C7E;
    --third: #23A6D5;
    --fourth: #23D5AB;
    --fifth: #fff;
}

@keyframes change {
    0%{
        background-position: 0 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0 50%;
    }
}
`;
