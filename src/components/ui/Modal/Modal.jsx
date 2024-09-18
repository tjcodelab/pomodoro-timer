/* eslint-disable react/prop-types */
import Card from "../Card/Card";

export default function Modal({ children }) {
    return (
        <div className="overlay bg-black bg-opacity-30 fixed top-0 h-full w-full flex justify-center items-center">
            <Card>
                { children }
            </Card>
        </div>
    );
}