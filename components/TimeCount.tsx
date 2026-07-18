"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge"

export default function TimeCount() {
    const [time, setTime] = useState("");

    useEffect(() => {

        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("th-TH", {
                    timeZone: "Asia/Bangkok",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Badge className="rounded-md font-mono bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                {time}
            </Badge>
        </div>
    );
}