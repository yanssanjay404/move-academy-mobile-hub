
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeeApp from "@/components/mobile/EmployeeApp";
import AdminApp from "@/components/mobile/AdminApp";

const Index = () => {
  const [userRole, setUserRole] = useState<'EMPLOYEE' | 'ADMIN' | null>(null);

  if (userRole === 'EMPLOYEE') {
    return <EmployeeApp onLogout={() => setUserRole(null)} />;
  }

  if (userRole === 'ADMIN') {
    return <AdminApp onLogout={() => setUserRole(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Move Academy</CardTitle>
          <p className="text-blue-100">Employee Management System</p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
              Select Your Role
            </h2>
            
            <Button
              onClick={() => setUserRole('EMPLOYEE')}
              className="w-full h-16 text-lg bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <div className="flex flex-col items-center">
                <span>Employee Portal</span>
                <span className="text-sm opacity-90">Tasks • Attendance • Leave</span>
              </div>
            </Button>
            
            <Button
              onClick={() => setUserRole('ADMIN')}
              className="w-full h-16 text-lg bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <div className="flex flex-col items-center">
                <span>Admin Dashboard</span>
                <span className="text-sm opacity-90">Manage • Approve • Monitor</span>
              </div>
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <Badge variant="secondary" className="text-xs">
              Mobile-First Design • React Native Ready
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
