import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type AdminScreen = 'dashboard' | 'tasks' | 'attendance' | 'settings' | 'leave-approval' | 'create-sprint';

interface AdminAttendanceOverviewProps {
  onNavigate: (screen: AdminScreen) => void;
}

const AdminAttendanceOverview: React.FC<AdminAttendanceOverviewProps> = ({ onNavigate }) => {
  const [selectedDate, setSelectedDate] = useState('today');

  const attendanceData = [
    {
      employee: 'Sarah Johnson',
      checkIn: '9:00 AM',
      checkOut: '6:00 PM',
      location: 'Move Academy Office',
      status: 'Present',
      hours: '9h 0m'
    },
    {
      employee: 'Mike Rodriguez',
      checkIn: '8:45 AM',
      checkOut: '5:30 PM',
      location: 'Move Academy Office',
      status: 'Present',
      hours: '8h 45m'
    },
    {
      employee: 'Anna Lee',
      checkIn: '--',
      checkOut: '--',
      location: '--',
      status: 'Sick Leave',
      hours: '0h'
    },
    {
      employee: 'David Chen',
      checkIn: '9:15 AM',
      checkOut: '--',
      location: 'Remote Work',
      status: 'Present',
      hours: '4h 30m'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present': return 'bg-green-100 text-green-800';
      case 'Absent': return 'bg-red-100 text-red-800';
      case 'Sick Leave': return 'bg-blue-100 text-blue-800';
      case 'Late': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header with Filter */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Attendance</h1>
        <Select value={selectedDate} onValueChange={setSelectedDate}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">18</div>
            <div className="text-sm text-gray-600">Present</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className="text-sm text-gray-600">Absent</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">1</div>
            <div className="text-sm text-gray-600">On Leave</div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Today's Attendance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {attendanceData.map((record, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {record.employee.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{record.employee}</div>
                    <div className="text-xs text-gray-500">{record.location}</div>
                  </div>
                </div>
                <Badge className={getStatusColor(record.status)}>
                  {record.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center text-xs">
                <div>
                  <div className="font-medium">{record.checkIn}</div>
                  <div className="text-gray-500">Check-in</div>
                </div>
                <div>
                  <div className="font-medium">{record.checkOut}</div>
                  <div className="text-gray-500">Check-out</div>
                </div>
                <div>
                  <div className="font-medium">{record.hours}</div>
                  <div className="text-gray-500">Total</div>
                </div>
              </div>

              {record.status === 'Present' && (
                <div className="mt-3 flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Location
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Manual Override
                  </Button>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Late Employees Alert */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-lg text-yellow-800">Late Check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">DC</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">David Chen</div>
              <div className="text-xs text-gray-600">Checked in 15 minutes late</div>
            </div>
            <Button size="sm" variant="outline">
              Send Reminder
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            Export Attendance Report
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Set Working Hours
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Bulk Manual Override
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAttendanceOverview;
