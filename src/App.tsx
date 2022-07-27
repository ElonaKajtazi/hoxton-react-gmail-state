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
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(true);
  const [tab, setTab] = useState("inbox");

  const unreadEmails = emails.filter((email) => !email.read);
  const unreadEmailsCount = unreadEmails.length;

  const starredEmails = emails.filter((email) => email.starred);
  const starredEmailsCount = starredEmails.length;

  function toggleRead(email: Email) {
    const emailsCopy: Email[] = structuredClone(emails);

    const targetEmail = emailsCopy.find((target) => target.id === email.id)!;
    targetEmail.read = !targetEmail.read;
    setEmails(emailsCopy);
  }
  function toggleStarred(email: Email) {
    const emailsCopy: Email[] = structuredClone(emails);

    const targetEmail = emailsCopy.find((target) => target.id === email.id)!;
    targetEmail.starred = !targetEmail.starred;
    setEmails(emailsCopy);
  }
  let emailsToDisplay = emails;
  if (hideRead) emailsToDisplay = unreadEmails;
  if (tab === "starred")
    emailsToDisplay = emailsToDisplay.filter((email) => email.starred);
  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={tab === "inbox" ? "item active" : "item"}
            onClick={() => {
              setTab("inbox");
            }}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmailsCount}</span>
          </li>
          <li
            className={tab === "starred" ? "item active" : "item"}
            onClick={() => {
              setTab("starred");
            }}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmailsCount}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={() => {
                setHideRead(!hideRead);
              }}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */}
        <ul>
          {emailsToDisplay.map((email) => (
            <li className={email.read ? "email read" : "email unread"}>
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
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
