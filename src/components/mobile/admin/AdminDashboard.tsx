import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type AdminScreen = 'dashboard' | 'tasks' | 'attendance' | 'settings' | 'leave-approval' | 'create-sprint';

interface AdminDashboardProps {
  onNavigate: (screen: AdminScreen) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const stats = [
    { title: 'Total Employees', value: '24', change: '+2 this month', color: 'bg-blue-50 text-blue-700' },
    { title: 'Active Tasks', value: '48', change: '+8 this week', color: 'bg-green-50 text-green-700' },
    { title: 'Pending Leaves', value: '3', change: '2 need approval', color: 'bg-yellow-50 text-yellow-700' },
    { title: 'Sprint Progress', value: '68%', change: 'On track', color: 'bg-purple-50 text-purple-700' }
  ];

  const recentActivities = [
    { user: 'Sarah Johnson', action: 'Completed task: API Integration', time: '2 hours ago' },
    { user: 'Mike Rodriguez', action: 'Submitted leave request', time: '4 hours ago' },
    { user: 'Anna Lee', action: 'Checked in at office', time: '1 day ago' },
    { user: 'David Chen', action: 'Updated project status', time: '1 day ago' }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Welcome Header */}
      <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-purple-100">Welcome back! Here's your team overview.</p>
        </CardContent>
      </Card>

      {/* Key Statistics */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className={`inline-flex px-2 py-1 rounded text-xs font-medium mb-2 ${stat.color}`}>
                {stat.title}
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700"
            onClick={() => onNavigate('create-sprint')}
          >
            <div className="text-center">
              <div className="font-semibold">Create New Sprint</div>
              <div className="text-sm opacity-90">Plan team tasks</div>
            </div>
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-12"
              onClick={() => onNavigate('leave-approval')}
            >
              <div className="text-center">
                <div className="text-sm font-medium">Approve Leaves</div>
                <div className="text-xs text-gray-500">3 pending</div>
              </div>
            </Button>
            <Button 
              variant="outline" 
              className="h-12"
              onClick={() => onNavigate('tasks')}
            >
              <div className="text-center">
                <div className="text-sm font-medium">Manage Tasks</div>
                <div className="text-xs text-gray-500">48 active</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Team Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Team Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">18</div>
              <div className="text-xs text-gray-500">Present</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">4</div>
              <div className="text-xs text-gray-500">Remote</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">2</div>
              <div className="text-xs text-gray-500">On Leave</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{activity.user}</div>
                  <div className="text-xs text-gray-500">{activity.action}</div>
                </div>
                <div className="text-xs text-gray-400">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Employee Database</span>
              <Badge className="bg-green-100 text-green-800">Online</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Task Management</span>
              <Badge className="bg-green-100 text-green-800">Online</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Attendance System</span>
              <Badge className="bg-green-100 text-green-800">Online</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
