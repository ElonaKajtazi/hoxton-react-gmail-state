import { useState } from "react";
import Header from "./components/Header";

import initialEmails from "./data/emails";

import "./App.css";

function App() {
  // Use initialEmails for state
  // const [todos, setTodos] = useState([
  //   { title: 'Buy milk', completed: true },
  //   { title: 'Cook dinner', completed: false },
  //   { title: 'Learn React', completed: false }
  // ])

  console.log(initialEmails);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{/* Render a list of emails here */}</main>
    </div>
  );
}

export default App;
