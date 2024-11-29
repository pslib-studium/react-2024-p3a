import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AppLayer: FC = () => {
    return (
        <>
            <nav>
                <menu>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/about">About</Link></li>
                </menu>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}
export default AppLayer;
        