import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserDashboard = () => {
  // Static user data for demonstration
  const [users, setUsers] = useState([
    { service: 'Oil Change', status: 'Completed', deliveryDate: '2024-07-10', dispatchDate: '2024-07-09', amountStatus: 'Paid' },
    { service: 'Tire Service', status: 'Active', deliveryDate: '2024-08-01', dispatchDate: '2024-07-30', amountStatus: 'Pending' }
  ]);

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>User Dashboard</CardTitle>
          {/* You can add a button here if needed */}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Delivery Date</TableHead>
                <TableHead>Dispatch Date</TableHead>
                <TableHead>Amount Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{user.service}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{user.deliveryDate}</TableCell>
                  <TableCell>{user.dispatchDate}</TableCell>
                  <TableCell>{user.amountStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserDashboard;
