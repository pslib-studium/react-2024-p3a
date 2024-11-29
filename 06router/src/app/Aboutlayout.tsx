import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AboutLayout: FC = () => {
    return (
        <>
        <p>AboutLayout</p>
        <Outlet />
        </>
    );
}
export default AboutLayout;