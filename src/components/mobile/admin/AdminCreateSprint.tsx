
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type AdminScreen = 'dashboard' | 'tasks' | 'attendance' | 'settings' | 'leave-approval' | 'create-sprint';

interface AdminCreateSprintProps {
  onNavigate: (screen: AdminScreen) => void;
}

const AdminCreateSprint: React.FC<AdminCreateSprintProps> = ({ onNavigate }) => {
  const [sprintName, setSprintName] = useState('');
  const [sprintGoal, setSprintGoal] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const teamMembers = [
    { id: '1', name: 'Sarah Johnson', role: 'Frontend Developer' },
    { id: '2', name: 'Mike Rodriguez', role: 'Backend Developer' },
    { id: '3', name: 'Anna Lee', role: 'UI/UX Designer' },
    { id: '4', name: 'David Chen', role: 'QA Engineer' },
    { id: '5', name: 'Lisa Wang', role: 'Full Stack Developer' }
  ];

  const handleMemberToggle = (memberId: string) => {
    setSelectedMembers(prev => 
      prev.includes(memberId) 
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleCreateSprint = () => {
    if (!sprintName || !sprintGoal || !duration || !startDate) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (selectedMembers.length === 0) {
      alert('Please select at least one team member');
      return;
    }

    alert('Sprint created successfully!');
    onNavigate('tasks');
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={() => onNavigate('tasks')}>
          ← Back
        </Button>
        <h1 className="text-xl font-bold">Create New Sprint</h1>
        <div></div>
      </div>

      {/* Sprint Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sprint Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Sprint Name *</label>
            <input
              type="text"
              value={sprintName}
              onChange={(e) => setSprintName(e.target.value)}
              placeholder="e.g., Q1 Feature Development"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Sprint Goal *</label>
            <Textarea
              value={sprintGoal}
              onChange={(e) => setSprintGoal(e.target.value)}
              placeholder="Describe the main objective of this sprint..."
              className="h-20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Duration *</label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-week">1 Week</SelectItem>
                  <SelectItem value="2-weeks">2 Weeks</SelectItem>
                  <SelectItem value="3-weeks">3 Weeks</SelectItem>
                  <SelectItem value="4-weeks">4 Weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Start Date *</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Select Team Members</CardTitle>
          <p className="text-sm text-gray-600">Choose team members for this sprint</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                selectedMembers.includes(member.id) 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleMemberToggle(member.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{member.name}</div>
                    <div className="text-xs text-gray-500">{member.role}</div>
                  </div>
                </div>
                {selectedMembers.includes(member.id) && (
                  <Badge className="bg-purple-100 text-purple-800">Selected</Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Sprint Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sprint Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Sprint Name:</span>
              <span className="font-medium">{sprintName || 'Not specified'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium">{duration || 'Not specified'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Start Date:</span>
              <span className="font-medium">{startDate || 'Not specified'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Team Size:</span>
              <span className="font-medium">{selectedMembers.length} members</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          onClick={handleCreateSprint}
          className="w-full h-12 bg-purple-600 hover:bg-purple-700"
        >
          Create Sprint
        </Button>
        <Button 
          variant="outline"
          onClick={() => onNavigate('tasks')}
          className="w-full h-12"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AdminCreateSprint;
