/* eslint-disable react/prop-types */
export default function Button({ children, className, onClick }) {
    return (
        <button className={`px-6 py-2 text rounded-md text-white ${className}`} onClick={onClick}>
            { children }
        </button>
    );
}