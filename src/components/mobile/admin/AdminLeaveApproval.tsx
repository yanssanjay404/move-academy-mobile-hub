
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

interface AdminLeaveApprovalProps {
  onNavigate: (screen: string) => void;
}

const AdminLeaveApproval: React.FC<AdminLeaveApprovalProps> = ({ onNavigate }) => {
  const leaveRequests = [
    {
      id: 1,
      employee: 'Anna Lee',
      type: 'Annual Leave',
      dates: 'Dec 20 - Dec 24, 2024',
      days: 5,
      reason: 'Christmas holiday with family',
      status: 'Pending',
      submitted: '2 days ago'
    },
    {
      id: 2,
      employee: 'David Chen',
      type: 'Sick Leave',
      dates: 'Dec 10, 2024',
      days: 1,
      reason: 'Medical appointment - dental check-up',
      status: 'Pending',
      submitted: '1 day ago'
    },
    {
      id: 3,
      employee: 'Mike Rodriguez',
      type: 'Personal Leave',
      dates: 'Dec 15, 2024',
      days: 1,
      reason: 'Family emergency - need to attend to urgent matter',
      status: 'Pending',
      submitted: '3 hours ago'
    }
  ];

  const handleApprove = (requestId: number) => {
    alert(`Leave request ${requestId} approved successfully!`);
  };

  const handleReject = (requestId: number) => {
    alert(`Leave request ${requestId} rejected.`);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Annual Leave': return 'bg-blue-100 text-blue-800';
      case 'Sick Leave': return 'bg-red-100 text-red-800';
      case 'Personal Leave': return 'bg-purple-100 text-purple-800';
      case 'Emergency Leave': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={() => onNavigate('dashboard')}>
          ← Back
        </Button>
        <h1 className="text-xl font-bold text-center flex-1">Leave Requests</h1>
        <div></div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <div className="text-sm text-gray-600">Pending</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-600">Approved</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">2</div>
            <div className="text-sm text-gray-600">Rejected</div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Requests */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {leaveRequests.map((request) => (
            <div key={request.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {request.employee.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{request.employee}</div>
                    <div className="text-xs text-gray-500">Submitted {request.submitted}</div>
                  </div>
                </div>
                <Badge className={getTypeColor(request.type)}>
                  {request.type}
                </Badge>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Dates:</span>
                  <span className="font-medium">{request.dates}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{request.days} day{request.days > 1 ? 's' : ''}</span>
                </div>
                <div className="mt-2">
                  <div className="text-sm text-gray-600 mb-1">Reason:</div>
                  <div className="text-sm bg-gray-50 p-2 rounded">{request.reason}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Textarea
                  placeholder="Add notes (optional)..."
                  className="h-16 text-sm"
                />
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => handleApprove(request.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    Approve
                  </Button>
                  <Button 
                    onClick={() => handleReject(request.id)}
                    variant="destructive"
                    className="flex-1"
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm">Annual Leave</Button>
            <Button variant="outline" size="sm">Sick Leave</Button>
            <Button variant="outline" size="sm">Personal Leave</Button>
            <Button variant="outline" size="sm">Emergency Leave</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLeaveApproval;
