import CalendarDates from "@/components/charts/calendardates";
import Layout from "@/components/layouts/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Meetings = () => {
    return (
        <Layout>
            <Card>
                <CardHeader>
                    <CardTitle>Rioi ioi </CardTitle>
                    <CardDescription>sdddsd dsds</CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                    <CalendarDates />
                </CardContent>
            </Card>
        </Layout>
    );
}

export default Meetings;
