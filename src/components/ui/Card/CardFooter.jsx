/* eslint-disable react/prop-types */
export default function CardFooter({ children, className }) {
    return (
        <div className={`border-t border-gray-300 p-4 ${className}`}>
            { children }
        </div>
    );
}