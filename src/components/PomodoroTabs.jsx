import { useContext, useState } from "react";
import TabButton from "./ui/Tabs/TabButton";
import TabPanel from "./ui/Tabs/TabPanel";
import Timer from "./Timer";
import Counter from "./Counter";
import { TimerContext } from "../context/TimerContext";

export default function PomodoroTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const { isStart, counter, setCounter } = useContext(TimerContext);

    const handleTab = (activeTabIndex) => {
        if(isStart) {
            if(activeTabIndex === 0 && (activeTab === 1 || activeTab === 2)) {
                setCounter(counter + 1);
            }
    
            if((activeTabIndex === 1 || activeTabIndex === 2) && activeTab === 0) {
                setCounter(counter - 1);
            }
        }
        setActiveTab(activeTabIndex);
    }

    return (
        <div className="w-fit">
            <div className="tab-header flex justify-center">
                <TabButton color="bg-rose-500" hoverColor="bg-rose-600" activeColor="bg-rose-700" text="Pomodoro" isActive={activeTab === 0} onClick={() => handleTab(0)} />
                <TabButton color="bg-rose-500" hoverColor="bg-rose-600" activeColor="bg-rose-700" text="Short Break" isActive={activeTab === 1} onClick={() => handleTab(1)} />
                <TabButton color="bg-rose-500" hoverColor="bg-rose-600" activeColor="bg-rose-700" text="Long Break" isActive={activeTab === 2} onClick={() => handleTab(2)} />
            </div>
            <div className="tab-body border w-full">
                <TabPanel className="flex justify-center items-center h-32" key={`tab-${activeTab}`}>
                    <div className="wrapper">
                        <Timer activeTab={activeTab} setActiveTab={setActiveTab}/>
                        <Counter />
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}