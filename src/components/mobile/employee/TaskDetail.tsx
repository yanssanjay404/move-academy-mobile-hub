
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

interface TaskDetailProps {
  onNavigate: (screen: string) => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ onNavigate }) => {
  const [status, setStatus] = useState('In Progress');

  const task = {
    id: 3,
    title: 'API Integration - User Authentication',
    description: 'Implement OAuth 2.0 authentication system with JWT tokens for secure user login and session management.',
    assignee: 'Sarah Johnson',
    priority: 'High',
    dueDate: 'December 7, 2024',
    progress: 65,
    timeSpent: '4h 30m',
    estimatedTime: '8h',
    tags: ['Backend', 'Security', 'API']
  };

  const comments = [
    {
      id: 1,
      author: 'John Smith (PM)',
      time: '2 hours ago',
      text: 'Great progress! Please make sure to include proper error handling for expired tokens.'
    },
    {
      id: 2,
      author: 'Sarah Johnson',
      time: '1 hour ago',
      text: 'Added JWT refresh token mechanism. Testing in progress.'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={() => onNavigate('tasks')}>
          ← Back
        </Button>
        <h1 className="text-lg font-bold text-center flex-1">Task Details</h1>
        <div></div>
      </div>

      {/* Task Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex-1 mr-4">
              {task.title}
            </h2>
            <Badge className={getPriorityColor(task.priority)}>
              {task.priority}
            </Badge>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Due Date:</span>
              <span className="font-medium">{task.dueDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Assignee:</span>
              <span className="font-medium">{task.assignee}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Time Spent:</span>
              <span className="font-medium">{task.timeSpent} / {task.estimatedTime}</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-gray-600">{task.progress}%</span>
            </div>
            <Progress value={task.progress} className="h-2" />
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {task.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{task.description}</p>
        </CardContent>
      </Card>

      {/* Status Update */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Update Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Current Status</label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Backlog">Backlog</SelectItem>
                <SelectItem value="To Do">To Do</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Done">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button className="w-full">
            Update Status
          </Button>
        </CardContent>
      </Card>

      {/* Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Comments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-sm">{comment.author}</span>
                <span className="text-xs text-gray-500">{comment.time}</span>
              </div>
              <p className="text-sm text-gray-700">{comment.text}</p>
            </div>
          ))}
          
          <div className="pt-2">
            <textarea
              placeholder="Add a comment..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none"
              rows={3}
            />
            <Button className="mt-2 w-full">
              Add Comment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskDetail;
