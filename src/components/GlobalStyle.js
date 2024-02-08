import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    background: 
    radial-gradient(circle at bottom, #fff, transparent 80%),    
    linear-gradient(to top, dodgerblue 0%, transparent 70%),    
    linear-gradient(to bottom, transparent, rgba(#fff, 0.4) 70%),
    #1e90ff;  
    animation: bg 30s infinite;
}

    @keyframes bg {
      0%, 100% { background-color: #1e90ff; }
      25% { background-color: #39d24a; }
      50% { background-color: #ffe244; }
      75% { background-color: #ff36a3; }
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
