import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/module/Button";

const ErrorPage = ({ errMsg }) => {
    return <div className="flex h-[80vh] justify-center items-center flex-col space-y-3 p-8">
        <h1 className="text-4xl font-extrabold">404</h1>
        <p className="text-6xl font-extrabold">
            {errMsg}
        </p>
        <Link to='/'>
            <Button name={'Home'} />
        </Link>
    </div>;
};

export default ErrorPage;