import { useMemo, useState } from "react";
import { chartConfig, chartData } from "@/lib/chartdata";

const StatsCard = () => {
    const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>("desktop")
    const total = useMemo(() => ({
        desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
        mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }), [])
    return (
        <div className="flex">
            {["desktop", "mobile"].map((key) => {
                const chart = key as keyof typeof chartConfig
                return (
                    <button
                        key={chart}
                        data-active={activeChart === chart}
                        className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-4 py-2 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                        onClick={() => setActiveChart(chart)}
                    >
                        <span className="text-xs text-muted-foreground">
                            {chartConfig[chart].label}
                        </span>
                        <span className="text-base font-bold leading-none sm:text-base">
                            {total[key as keyof typeof total].toLocaleString()}
                        </span>
                    </button>
                )
            })}
        </div>
    );
}

export default StatsCard;
