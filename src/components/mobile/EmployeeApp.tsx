
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EmployeeHome from './employee/EmployeeHome';
import EmployeeTask from './employee/EmployeeTask';
import EmployeeAttendance from './employee/EmployeeAttendance';
import EmployeeProfile from './employee/EmployeeProfile';
import EmployeeLeaveRequest from './employee/EmployeeLeaveRequest';
import TaskDetail from './employee/TaskDetail';
import AddTask from './employee/AddTask';

type EmployeeScreen = 'home' | 'tasks' | 'attendance' | 'profile' | 'leave-request' | 'task-detail' | 'add-task';

interface EmployeeAppProps {
  onLogout: () => void;
}

const EmployeeApp: React.FC<EmployeeAppProps> = ({ onLogout }) => {
  const [currentScreen, setCurrentScreen] = useState<EmployeeScreen>('home');

  const handleNavigate = (screen: EmployeeScreen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <EmployeeHome onNavigate={handleNavigate} />;
      case 'tasks':
        return <EmployeeTask onNavigate={handleNavigate} />;
      case 'attendance':
        return <EmployeeAttendance onNavigate={handleNavigate} />;
      case 'profile':
        return <EmployeeProfile onNavigate={handleNavigate} />;
      case 'leave-request':
        return <EmployeeLeaveRequest onNavigate={handleNavigate} />;
      case 'task-detail':
        return <TaskDetail onNavigate={handleNavigate} />;
      case 'add-task':
        return <AddTask onNavigate={handleNavigate} />;
      default:
        return <EmployeeHome onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">MA</span>
          </div>
          <span className="font-semibold text-gray-800">Move Academy</span>
        </div>
        <Button variant="ghost" size="sm" onClick={onLogout} className="text-red-600">
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      {!['leave-request', 'task-detail', 'add-task'].includes(currentScreen) && (
        <Card className="m-0 rounded-none border-t bg-white">
          <div className="flex justify-around py-2">
            <Button
              variant={currentScreen === 'home' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('home')}
              className="flex-1 flex flex-col items-center py-3 h-auto"
            >
              <div className="w-6 h-6 mb-1 bg-current rounded opacity-60"></div>
              <span className="text-xs">Home</span>
            </Button>
            <Button
              variant={currentScreen === 'tasks' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('tasks')}
              className="flex-1 flex flex-col items-center py-3 h-auto"
            >
              <div className="w-6 h-6 mb-1 bg-current rounded opacity-60"></div>
              <span className="text-xs">Tasks</span>
            </Button>
            <Button
              variant={currentScreen === 'attendance' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('attendance')}
              className="flex-1 flex flex-col items-center py-3 h-auto"
            >
              <div className="w-6 h-6 mb-1 bg-current rounded opacity-60"></div>
              <span className="text-xs">Attendance</span>
            </Button>
            <Button
              variant={currentScreen === 'profile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('profile')}
              className="flex-1 flex flex-col items-center py-3 h-auto"
            >
              <div className="w-6 h-6 mb-1 bg-current rounded opacity-60"></div>
              <span className="text-xs">Profile</span>
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default EmployeeApp;
