import { useState } from "react";
import { getUsers } from "@/controllers/UserController";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { FaCog } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const UsersTable = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any[]>([])
    getUsers().then((data) => setData(data)).finally(() => setLoading(false))
    return (
        <Card className='bg-transparent'>
            <CardHeader className="flex flex-row items-center justify-between px-2 py-0 pt-4">
                <CardTitle>Transaction History</CardTitle>
                <div className="flex items-center gap-4 title">
                    <CardDescription>This is there</CardDescription>
                    { loading && <FaCog className="w-6 h-6 text-teal-600 animate-spin" /> }
                </div>
            </CardHeader>
            <CardContent className="py-2 px-0">
                <Table>
                    <TableBody className="w-full">
                        {data && data.map((user: any, index: number) => (
                            <TableRow key={user.invoice}>
                                <TableCell className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src={'https://randomuser.me/api/portraits/women/' + index + '.jpg'} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className="text-neutral-500 font-mono font-semibold">{user.name}</span>
                                </TableCell>
                                <TableCell className="">{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell className="text-right text-neutral-800 font-bold ">{user.company.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default UsersTable;
