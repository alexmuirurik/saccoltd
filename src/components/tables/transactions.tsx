import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { invoices } from "@/lib/listdata"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const TransactionTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="">
                    <TableHead className="w-3/12">
                        Name
                    </TableHead>
                    <TableHead className="">
                        Invoice
                    </TableHead>
                    <TableHead>
                        Status
                    </TableHead>
                    <TableHead>
                        Method
                    </TableHead>
                    <TableHead className="text-right">
                        Amount
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice, index) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={'https://randomuser.me/api/portraits/women/'+ index +'.jpg'} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="text-neutral-500 font-mono font-semibold">{invoice.name}</span>
                        </TableCell>
                        <TableCell className="">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right text-neutral-800 font-bold ">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TransactionTable