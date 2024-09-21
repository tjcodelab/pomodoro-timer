/* eslint-disable react/prop-types */
export default function TabPanel({ children, className }) {
    return (
        <div className={`tab-panel border-1 border-gray-500 ${className}`}>
            { children }
        </div>
    );
}