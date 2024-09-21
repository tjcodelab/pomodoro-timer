/* eslint-disable react/prop-types */
export default function TabButton({ color = 'bg-cyan-500', hoverColor = 'bg-cyan-600', activeColor = 'bg-cyan-600', isActive = false, onClick, text }) {
    return (
        <button className={`px-6 py-2 text-white ${color} hover:${hoverColor} ${ isActive ? activeColor : null }`} onClick={onClick}>{ text }</button>
    )
}