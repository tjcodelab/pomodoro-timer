/* eslint-disable react/prop-types */
export default function Card({ children }) {
    return (
        <div className="bg-white rounded-md shadow-sm w-6/12">
            { children }
        </div>
    );
}
