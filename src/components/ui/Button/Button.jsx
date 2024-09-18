/* eslint-disable react/prop-types */
export default function Button({ children, className }) {
    return (
        <button className={`px-6 py-2 text rounded-md text-white ${className}`}>
            { children }
        </button>
    );
}