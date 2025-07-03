
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface AdminDashboardProps {
  onNavigate: (screen: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="p-4 space-y-4">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-purple-100">Monitor and manage your team</p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-white/20 text-white">
              System Administrator
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Today's Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">18</div>
            <div className="text-sm text-gray-600">Present Today</div>
            <div className="text-xs text-gray-500 mt-1">out of 20</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">2</div>
            <div className="text-sm text-gray-600">Absent</div>
            <div className="text-xs text-gray-500 mt-1">1 sick, 1 leave</div>
          </CardContent>
        </Card>
      </div>

      {/* Sprint Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Current Sprint Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Q4 Development Sprint</span>
              <span className="text-sm text-gray-600">68% Complete</span>
            </div>
            <Progress value={68} className="h-2" />
            
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div>
                <div className="font-bold text-gray-600">8</div>
                <div className="text-gray-500">Backlog</div>
              </div>
              <div>
                <div className="font-bold text-orange-600">5</div>
                <div className="text-gray-500">To Do</div>
              </div>
              <div>
                <div className="font-bold text-blue-600">3</div>
                <div className="text-gray-500">In Progress</div>
              </div>
              <div>
                <div className="font-bold text-green-600">12</div>
                <div className="text-gray-500">Done</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Completion Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SJ</span>
                </div>
                <span className="text-sm font-medium">Sarah Johnson</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <span className="text-xs text-gray-600">8/10</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MR</span>
                </div>
                <span className="text-sm font-medium">Mike Rodriguez</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <span className="text-xs text-gray-600">9/10</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AL</span>
                </div>
                <span className="text-sm font-medium">Anna Lee</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <span className="text-xs text-gray-600">6/10</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            className="w-full justify-start h-12"
            onClick={() => onNavigate('leave-approval')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div className="text-left">
                <div className="font-medium">Pending Leave Requests</div>
                <div className="text-xs opacity-70">3 requests awaiting approval</div>
              </div>
            </div>
          </Button>
          
          <Button 
            variant="outline"
            className="w-full justify-start h-12"
            onClick={() => onNavigate('create-sprint')}
          >
            <div className="text-left">
              <div className="font-medium">Create New Sprint</div>
              <div className="text-xs text-gray-500">Plan next development cycle</div>
            </div>
          </Button>
          
          <Button 
            variant="outline"
            className="w-full justify-start h-12"
            onClick={() => onNavigate('attendance')}
          >
            <div className="text-left">
              <div className="font-medium">View Attendance Report</div>
              <div className="text-xs text-gray-500">Check team attendance today</div>
            </div>
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Sarah Johnson checked in</div>
                <div className="text-xs text-gray-500">9:00 AM - Move Academy Office</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">New task completed</div>
                <div className="text-xs text-gray-500">API Integration by Mike Rodriguez</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Leave request submitted</div>
                <div className="text-xs text-gray-500">Anna Lee - Annual Leave</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
