
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface AdminCreateSprintProps {
  onNavigate: (screen: string) => void;
}

const AdminCreateSprint: React.FC<AdminCreateSprintProps> = ({ onNavigate }) => {
  const [sprintName, setSprintName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  const teamMembers = [
    { id: 'sarah', name: 'Sarah Johnson', role: 'Frontend Developer' },
    { id: 'mike', name: 'Mike Rodriguez', role: 'Backend Developer' },
    { id: 'anna', name: 'Anna Lee', role: 'UI/UX Designer' },
    { id: 'david', name: 'David Chen', role: 'QA Engineer' }
  ];

  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const handleMemberSelect = (memberId: string, checked: boolean) => {
    if (checked) {
      setSelectedMembers([...selectedMembers, memberId]);
    } else {
      setSelectedMembers(selectedMembers.filter(id => id !== memberId));
    }
  };

  const handleCreateSprint = () => {
    if (!sprintName || !startDate || !endDate || selectedMembers.length === 0) {
      alert('Please fill in all required fields');
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
        <h1 className="text-xl font-bold text-center flex-1">Create Sprint</h1>
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
            <Input
              placeholder="e.g., Q1 Development Sprint"
              value={sprintName}
              onChange={(e) => setSprintName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Textarea
              placeholder="Brief description of sprint goals..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Start Date *</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">End Date *</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Assign Team Members</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Checkbox
                id={member.id}
                checked={selectedMembers.includes(member.id)}
                onCheckedChange={(checked) => handleMemberSelect(member.id, checked as boolean)}
              />
              <div className="flex items-center space-x-3 flex-1">
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
            </div>
          ))}
          
          <div className="text-sm text-gray-600 mt-2">
            Selected: {selectedMembers.length} member{selectedMembers.length !== 1 ? 's' : ''}
          </div>
        </CardContent>
      </Card>

      {/* Sprint Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sprint Template</CardTitle>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose a template (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="development">Development Sprint</SelectItem>
              <SelectItem value="bugfix">Bug Fix Sprint</SelectItem>
              <SelectItem value="feature">Feature Sprint</SelectItem>
              <SelectItem value="maintenance">Maintenance Sprint</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-gray-500 mt-2">
            Templates provide pre-configured task structures
          </div>
        </CardContent>
      </Card>

      {/* Sprint Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sprint Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="goal1" />
              <label htmlFor="goal1" className="text-sm">Complete API integration</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="goal2" />
              <label htmlFor="goal2" className="text-sm">Fix critical bugs</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="goal3" />
              <label htmlFor="goal3" className="text-sm">Improve code coverage</label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-2">
        <Button onClick={handleCreateSprint} className="w-full h-12">
          Create Sprint
        </Button>
        <Button variant="outline" className="w-full" onClick={() => onNavigate('tasks')}>
          Save as Draft
        </Button>
      </div>
    </div>
  );
};

export default AdminCreateSprint;
