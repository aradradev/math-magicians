import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';

const Main = () => <Section />;

const Section = () => (
  <div>
    <Greeting />
    <Paragraph />
  </div>
);

const Greeting = () => <h2>Hello World</h2>;

const Paragraph = () => <p>React setup</p>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
