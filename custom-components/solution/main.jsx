import { createRoot } from 'react-dom/client';
import Page from './Page';
import Footer from './Footer';
import Header from './Header';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <Page />
        <Footer />
    </>

);