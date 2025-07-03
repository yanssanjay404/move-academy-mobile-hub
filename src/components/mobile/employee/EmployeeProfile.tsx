import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type EmployeeScreen = 'home' | 'tasks' | 'attendance' | 'profile' | 'leave-request' | 'task-detail';

interface EmployeeProfileProps {
  onNavigate: (screen: EmployeeScreen) => void;
}

const EmployeeProfile: React.FC<EmployeeProfileProps> = ({ onNavigate }) => {
  const payslips = [
    { month: 'November 2024', amount: 'Rp 15,000,000', status: 'Available' },
    { month: 'October 2024', amount: 'Rp 15,000,000', status: 'Available' },
    { month: 'September 2024', amount: 'Rp 15,000,000', status: 'Available' },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6 text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">SJ</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Sarah Johnson</h1>
          <p className="text-gray-600 mb-2">Software Developer</p>
          <Badge className="bg-green-100 text-green-800">Active Employee</Badge>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Email</span>
            <span className="font-medium">sarah.johnson@moveacademy.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone</span>
            <span className="font-medium">+62 812 3456 7890</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Employee ID</span>
            <span className="font-medium">MA-DEV-001</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Department</span>
            <span className="font-medium">Technology</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Team</span>
            <span className="font-medium">Alpha Development</span>
          </div>
        </CardContent>
      </Card>

      {/* Contract Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Contract Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Start Date</span>
            <span className="font-medium">January 15, 2023</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Contract Period</span>
            <span className="font-medium">Permanent</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Working Hours</span>
            <span className="font-medium">8:00 AM - 5:00 PM</span>
          </div>
          <div className="pt-2">
            <Button variant="outline" className="w-full">
              Download Contract (PDF)
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payslip Downloads */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Monthly Payslips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {payslips.map((payslip, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">{payslip.month}</div>
                <div className="text-xs text-gray-500">{payslip.amount}</div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  {payslip.status}
                </Badge>
                <Button size="sm" variant="outline">
                  Download
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            Update Profile Information
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Emergency Contact
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeProfile;
