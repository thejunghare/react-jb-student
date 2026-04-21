import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>Hello React</h1>
    </div>
);

/*
Challenge - create a custom component called `Header`, `Page`, `Footer`that renders a contact card.
Header renders a nav bar with 3 links: Home, About, Contact
Page render and order list of your favorite contacts.
Footer renders following text copyright 2026 Mr. Whiskerson
 */