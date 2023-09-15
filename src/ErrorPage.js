import './ErrorPage.scss';

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='mb-2'>{error.status}</h1>
            <p className='error-name mb-5'>{error.statusText || error.message}</p>
            <p className='error-message text-center mb-5'>
                {error.data.replace(/Error: /, '')}.
                <br />
                If you think this is a mistake, try <a href='https://its.uiowa.edu/support/article/719' target='_blank' rel='noreferrer'>resetting your browser cookies and cache</a>.
            </p>
            <a className='d-flex justify-content-center align-items-center home-btn px-5 text-uppercase' href='/'>back to home</a>
        </div>
    );
}
