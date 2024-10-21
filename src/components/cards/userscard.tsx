import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const UsersCard = () => {
    return (
        <Card>
            <CardHeader className="py-4 px-2">
                <CardTitle>User Roles</CardTitle>
                <CardDescription>this is a description</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
                <div className="grid gap-6">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={'https://randomuser.me/api/portraits/women/1.jpg'} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">Sofia Davis</p>
                                <p className="text-sm text-muted-foreground">m@example.com</p>
                            </div>
                        </div>
                        <button className="border border-teal-600 font-mono text-sm text-teal-600 py-1 px-6 rounded-md">
                            Change
                        </button>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={'https://randomuser.me/api/portraits/women/2.jpg'} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">Sofia Davis</p>
                                <p className="text-sm text-muted-foreground">m@example.com</p>
                            </div>
                        </div>
                        <button className="border border-teal-600 font-mono text-sm text-teal-600 py-1 px-6 rounded-md">
                            Change
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default UsersCard;
