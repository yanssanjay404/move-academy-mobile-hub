
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type AdminScreen = 'dashboard' | 'tasks' | 'attendance' | 'settings' | 'leave-approval' | 'create-sprint' | 'add-employee';

interface AdminSettingsProps {
  onNavigate: (screen: AdminScreen) => void;
}

const AdminSettings: React.FC<AdminSettingsProps> = ({ onNavigate }) => {
  const employees = [
    { name: 'Sarah Johnson', role: 'Software Developer', status: 'Active', email: 'sarah.johnson@moveacademy.com' },
    { name: 'Mike Rodriguez', role: 'Backend Developer', status: 'Active', email: 'mike.rodriguez@moveacademy.com' },
    { name: 'Anna Lee', role: 'UI/UX Designer', status: 'Active', email: 'anna.lee@moveacademy.com' },
    { name: 'David Chen', role: 'QA Engineer', status: 'Active', email: 'david.chen@moveacademy.com' }
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

      {/* Admin Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Admin Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">JD</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-gray-600">System Administrator</p>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Email</span>
              <span className="font-medium">john.doe@moveacademy.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone</span>
              <span className="font-medium">+62 812 9876 5432</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Admin ID</span>
              <span className="font-medium">MA-ADM-001</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              Edit Profile Information
            </Button>
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Employee Management */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Employee Management</CardTitle>
            <Button 
              size="sm" 
              onClick={() => onNavigate('add-employee')}
              className="bg-green-600 hover:bg-green-700"
            >
              Add Employee
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {employees.map((employee, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-sm">{employee.name}</div>
                  <div className="text-xs text-gray-500">{employee.role}</div>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800 mb-1">
                  {employee.status}
                </Badge>
                <div className="text-xs">
                  <Button size="sm" variant="outline" className="mr-1">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600">
                    Disable
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* System Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">System Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Working Hours</div>
                <div className="text-xs text-gray-500">8:00 AM - 5:00 PM</div>
              </div>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Holiday Settings</div>
                <div className="text-xs text-gray-500">5 holidays configured</div>
              </div>
              <Button size="sm" variant="outline">Manage</Button>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Leave Types</div>
                <div className="text-xs text-gray-500">Annual, Sick, Personal, Emergency</div>
              </div>
              <Button size="sm" variant="outline">Configure</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reports & Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Reports & Analytics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            Monthly Attendance Report
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Task Completion Analytics
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Leave Usage Summary
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Export All Data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
