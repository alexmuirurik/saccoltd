import DashChart from "@/components/charts/dashchart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const HomePage = () => {
    <div className="md:flex gap-2">
        <div className="w-8/12 space-y-4">
            <DashChart />
            <Card className="bg-transparent">
                <CardHeader className="flex px-2 py-0 pt-4">
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>This is there</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-0">
                    
                </CardContent>
            </Card>
        </div>
        <div className="w-4/12">
            
        </div>
    </div>
}

export default HomePage
