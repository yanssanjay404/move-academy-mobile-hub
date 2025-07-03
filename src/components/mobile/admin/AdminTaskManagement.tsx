import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type AdminScreen = 'dashboard' | 'tasks' | 'attendance' | 'settings' | 'leave-approval' | 'create-sprint';

interface AdminTaskManagementProps {
  onNavigate: (screen: AdminScreen) => void;
}

const AdminTaskManagement: React.FC<AdminTaskManagementProps> = ({ onNavigate }) => {
  const sprints = [
    {
      id: 1,
      name: 'Q4 Development Sprint',
      status: 'Active',
      progress: 68,
      startDate: 'Nov 1, 2024',
      endDate: 'Dec 15, 2024',
      totalTasks: 28,
      completedTasks: 19
    },
    {
      id: 2,
      name: 'Bug Fix Sprint',
      status: 'Planning',
      progress: 0,
      startDate: 'Dec 16, 2024',
      endDate: 'Dec 30, 2024',
      totalTasks: 12,
      completedTasks: 0
    }
  ];

  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Frontend Dev', tasks: 8, completed: 6 },
    { name: 'Mike Rodriguez', role: 'Backend Dev', tasks: 10, completed: 9 },
    { name: 'Anna Lee', role: 'UI/UX Designer', tasks: 6, completed: 4 },
    { name: 'David Chen', role: 'QA Engineer', tasks: 4, completed: 2 }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Task Management</h1>
        <Button onClick={() => onNavigate('create-sprint')}>
          New Sprint
        </Button>
      </div>

      {/* Active Sprints */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Active Sprints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {sprints.map((sprint) => (
            <div key={sprint.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{sprint.name}</h3>
                  <p className="text-sm text-gray-600">
                    {sprint.startDate} - {sprint.endDate}
                  </p>
                </div>
                <Badge className={sprint.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                  {sprint.status}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{sprint.completedTasks}/{sprint.totalTasks} tasks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${sprint.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Team Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Team Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-sm">{member.name}</div>
                  <div className="text-xs text-gray-500">{member.role}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">
                  {member.completed}/{member.tasks}
                </div>
                <div className="text-xs text-gray-500">
                  {Math.round((member.completed / member.tasks) * 100)}% done
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Task Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Task Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">3</div>
              <div className="text-sm text-gray-600">High Priority</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">8</div>
              <div className="text-sm text-gray-600">Medium Priority</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-gray-600">Low Priority</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">5</div>
              <div className="text-sm text-gray-600">In Review</div>
            </div>
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
            Assign New Task
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Review Task Progress
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Generate Sprint Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTaskManagement;
