import Navbar from "../components/layouts/Navbar";
import PomodoroTabs from "../components/PomodoroTabs";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <section>
                    <div className="px-8 py-4 flex justify-center">
                        <PomodoroTabs />
                    </div>
                </section>
            </main>
        </>
    );
}