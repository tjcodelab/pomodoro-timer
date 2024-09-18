/* eslint-disable react/prop-types */
export default function CardHeader({ title }) {
    return (
        <div className="border-b border-gray-300 p-4 flex justify-between items-center">
            <h2 className="font-bold">{title}</h2>
            <button>x</button>
        </div>
    );
}