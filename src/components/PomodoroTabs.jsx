import { useState } from "react";
import TabButton from "./ui/Tabs/TabButton";
import TabPanel from "./ui/Tabs/TabPanel";
import Timer from "./Timer";

export default function PomodoroTabs() {
    const [activeTab, setActiveTab] = useState(0); 
    return (
        <div className="w-fit">
            <div className="tab-header flex justify-center">
                <TabButton color="bg-rose-500" hoverColor="bg-rose-600" activeColor="bg-rose-700" text="Pomodoro" isActive={activeTab === 0} onClick={() => setActiveTab(0)} />
                <TabButton color="bg-rose-500" hoverColor="bg-rose-600" activeColor="bg-rose-700" text="Short Break" isActive={activeTab === 1} onClick={() => setActiveTab(1)} />
                <TabButton color="bg-rose-500" hoverColor="bg-rose-600" activeColor="bg-rose-700" text="Long Break" isActive={activeTab === 2} onClick={() => setActiveTab(2)} />
            </div>
            <div className="tab-body border w-full">
                <TabPanel className="flex justify-center items-center h-32" key={`tab-${activeTab}`}>
                    <div className="wrapper">
                        <Timer totalMinutes="25"/>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}