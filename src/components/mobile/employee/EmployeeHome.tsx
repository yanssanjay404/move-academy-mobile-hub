
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface EmployeeHomeProps {
  onNavigate: (screen: string) => void;
}

const EmployeeHome: React.FC<EmployeeHomeProps> = ({ onNavigate }) => {
  return (
    <div className="p-4 space-y-4">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">Welcome, Sarah!</h1>
          <p className="text-blue-100">Ready to tackle today's challenges?</p>
          <div className="mt-4 flex items-center space-x-2">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Software Developer
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              Team Alpha
            </Badge>
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
            className="w-full h-14 bg-green-600 hover:bg-green-700"
            onClick={() => onNavigate('attendance')}
          >
            <div className="flex flex-col items-center">
              <span className="font-semibold">GPS Check-In</span>
              <span className="text-sm opacity-90">Tap to clock in</span>
            </div>
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-12"
              onClick={() => onNavigate('tasks')}
            >
              <div className="text-center">
                <div className="text-sm font-medium">View Tasks</div>
                <div className="text-xs text-gray-500">3 pending</div>
              </div>
            </Button>
            <Button 
              variant="outline" 
              className="h-12"
              onClick={() => onNavigate('leave-request')}
            >
              <div className="text-center">
                <div className="text-sm font-medium">Request Leave</div>
                <div className="text-xs text-gray-500">Apply now</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Today's Sprint Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Tasks Completed</span>
              <span className="text-sm text-gray-600">1 of 3</span>
            </div>
            <Progress value={33} className="h-2" />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-600">1</div>
                <div className="text-xs text-gray-500">Done</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">1</div>
                <div className="text-xs text-gray-500">In Progress</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">1</div>
                <div className="text-xs text-gray-500">To Do</div>
              </div>
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
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Checked in at 9:00 AM</div>
                <div className="text-xs text-gray-500">Move Academy Office</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Task completed</div>
                <div className="text-xs text-gray-500">API Integration - User Auth</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">New task assigned</div>
                <div className="text-xs text-gray-500">Database Optimization</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeHome;
