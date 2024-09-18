export default function Navbar() {
    return (
        <header className="px-8 py-4 flex justify-between items-center bg-white shadow-md">
            <div className="logo">
                <h1 className="text-lg font-bold">Podomoro Timer</h1>
            </div>
            <div className="toolbar">
                <span className="cursor-pointer">Settings</span>
            </div>
        </header>
    )
}