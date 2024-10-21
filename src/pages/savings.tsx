import Layout from "@/components/layouts/layout";
import TransactionTable from "@/components/tables/transactions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Savings = () => {
    return (
        <Layout>
            <Card className='bg-transparent'>
                <CardHeader className="flex px-2 py-0 pt-4">
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>This is there</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-0">
                    <TransactionTable />
                </CardContent>
            </Card>
        </Layout>
    );
}

export default Savings;
