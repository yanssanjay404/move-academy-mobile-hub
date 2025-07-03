import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type EmployeeScreen = 'home' | 'tasks' | 'attendance' | 'profile' | 'leave-request' | 'task-detail';

interface EmployeeTaskProps {
  onNavigate: (screen: EmployeeScreen) => void;
}

const EmployeeTask: React.FC<EmployeeTaskProps> = ({ onNavigate }) => {
  const taskColumns = [
    {
      title: 'Backlog',
      color: 'bg-gray-100',
      tasks: [
        { id: 1, title: 'Code Review Process', due: 'Dec 10', priority: 'Low' }
      ]
    },
    {
      title: 'To Do',
      color: 'bg-orange-100',
      tasks: [
        { id: 2, title: 'Database Optimization', due: 'Dec 8', priority: 'High' }
      ]
    },
    {
      title: 'In Progress',
      color: 'bg-blue-100',
      tasks: [
        { id: 3, title: 'API Integration', due: 'Dec 7', priority: 'Medium' }
      ]
    },
    {
      title: 'Done',
      color: 'bg-green-100',
      tasks: [
        { id: 4, title: 'User Authentication', due: 'Dec 5', priority: 'High' }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Sprint Board</h1>
        <p className="text-gray-600">Current Sprint: Q4 Development</p>
      </div>

      <div className="space-y-6">
        {taskColumns.map((column) => (
          <Card key={column.title} className={column.color}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{column.title}</CardTitle>
                <Badge variant="secondary">{column.tasks.length}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {column.tasks.map((task) => (
                <Card 
                  key={task.id} 
                  className="bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => onNavigate('task-detail')}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-800">{task.title}</h3>
                      <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`}></div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Due: {task.due}</span>
                      <Badge variant="outline" className="text-xs">
                        {task.priority}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4">
        <Button className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg">
          <span className="text-2xl">+</span>
        </Button>
      </div>
    </div>
  );
};

export default EmployeeTask;
