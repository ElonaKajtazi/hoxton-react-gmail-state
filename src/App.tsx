// Don't break the code down into components; work in App.tsx only
// - Set state using useState and initialEmails
// - Render a list of emails from state so it looks similar to the screenshot
// - Create a toggleRead function that updates the target email's read property in state, when a user clicks on the checkbox
// - Create a toggleStar function that updates the target email's starred property in state, when a user clicks on the star
// - Make sure these changes take effect in the UI

import { useState } from "react";
import Header from "./components/Header";

import initialEmails from "./data/emails";

import "./App.css";
type Email = {
  id: number;
  sender: string;
  title: string;
  starred: boolean;
  read: boolean;
};
function App() {
  // Use initialEmails for state

  const [emails, setEmails] = useState(initialEmails);

  function toggleRead(email: Email) {
    const emailsCopy = structuredClone(emails);

    const targetEmail = emailsCopy.find((target) => target.id === email.id);
    targetEmail.read = !targetEmail.read;
    setEmails(emailsCopy);
  }
  function toggleStarred(email: Email) {
    const emailsCopy = structuredClone(emails);

    const targetEmail = emailsCopy.find((target) => target.id === email.id);
    targetEmail.starred = !targetEmail.starred;
    setEmails(emailsCopy);
  }

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
      <main className="emails">
        {/* Render a list of emails here */}
        <ul>
          {emails.map((email) => (
            <li className={email.read ? "email read" : "email unread"}>
              {/* <div className="email-item">
                <div className="email-item-header"> */}
              <input
                type="checkbox"
                className=".read-checkbox"
                checked={email.read}
                onClick={() => toggleRead(email)}
              />

              <input
                type="checkbox"
                className="star-checkbox"
                checked={email.starred}
                onClick={() => toggleStarred(email)}
              />
              <span className="sender">{email.sender}</span>
              <span className="title">{email.title}</span>

              {/* </div> */}
              {/* </div> */}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
