import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type EmployeeScreen = 'home' | 'tasks' | 'attendance' | 'profile' | 'leave-request' | 'task-detail';

interface EmployeeLeaveRequestProps {
  onNavigate: (screen: EmployeeScreen) => void;
}

const EmployeeLeaveRequest: React.FC<EmployeeLeaveRequestProps> = ({ onNavigate }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const pendingRequests = [
    { 
      id: 1, 
      type: 'Annual Leave', 
      dates: 'Dec 15 - Dec 17, 2024', 
      days: 3, 
      status: 'Pending',
      reason: 'Family vacation'
    },
    { 
      id: 2, 
      type: 'Sick Leave', 
      dates: 'Nov 28, 2024', 
      days: 1, 
      status: 'Approved',
      reason: 'Medical check-up'
    },
  ];

  const handleSubmit = () => {
    if (!leaveType || !startDate || !endDate || !reason) {
      alert('Please fill in all fields');
      return;
    }
    alert('Leave request submitted successfully!');
    onNavigate('home');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={() => onNavigate('home')}>
          ← Back
        </Button>
        <h1 className="text-xl font-bold">Leave Request</h1>
        <div></div>
      </div>

      {/* New Request Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Submit New Request</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Leave Type</label>
            <Select value={leaveType} onValueChange={setLeaveType}>
              <SelectTrigger>
                <SelectValue placeholder="Select leave type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="annual">Annual Leave</SelectItem>
                <SelectItem value="sick">Sick Leave</SelectItem>
                <SelectItem value="personal">Personal Leave</SelectItem>
                <SelectItem value="emergency">Emergency Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Reason</label>
            <Textarea
              placeholder="Please provide reason for leave..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="h-20"
            />
          </div>

          <Button onClick={handleSubmit} className="w-full h-12">
            Submit Request
          </Button>
        </CardContent>
      </Card>

      {/* Leave Balance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Leave Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-xs text-gray-500">Annual</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-xs text-gray-500">Sick</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-xs text-gray-500">Personal</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Request History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Request History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {pendingRequests.map((request) => (
            <div key={request.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium text-sm">{request.type}</div>
                  <div className="text-xs text-gray-500">{request.dates}</div>
                </div>
                <Badge className={getStatusColor(request.status)}>
                  {request.status}
                </Badge>
              </div>
              <div className="text-xs text-gray-600 mb-2">{request.reason}</div>
              <div className="text-xs text-gray-500">
                Duration: {request.days} day{request.days > 1 ? 's' : ''}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeLeaveRequest;
