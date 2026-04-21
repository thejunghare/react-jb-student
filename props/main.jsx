import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

import Card from './Card'; // importing hard code component -> we have to replace with props-compnent
// import CardPropsComponent from './CardPropsComponent';

root.render(
    <div>
        <Card />
        {/* <CardPropsComponent name="shabo" email="shabo@gmail.com" phone="121414" /> */}
    </div>
);

/*
Challenge - create a custom component called Cards that renders a contact card with props like img, name, phone, email.
 */

/*
Props make components reusable by letting you pass in dynamic data.

For example, look at this function that adds two numbers.
Problem (static and not reusable):
function addTwoNumbers() {
    return 1 + 2
}

It always returns 1 + 2, which is fixed.

Fix (dynamic and reusable):
function addTwoNumbers(a, b) {
    return a + b
}

In React, props work the same way: they let your component use different values each time.
*/