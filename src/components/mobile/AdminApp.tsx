
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminDashboard from './admin/AdminDashboard';
import AdminTaskManagement from './admin/AdminTaskManagement';
import AdminAttendanceOverview from './admin/AdminAttendanceOverview';
import AdminSettings from './admin/AdminSettings';
import AdminLeaveApproval from './admin/AdminLeaveApproval';
import AdminCreateSprint from './admin/AdminCreateSprint';
import AddEmployee from './admin/AddEmployee';

type AdminScreen = 'dashboard' | 'tasks' | 'attendance' | 'settings' | 'leave-approval' | 'create-sprint' | 'add-employee';

interface AdminAppProps {
  onLogout: () => void;
}

const AdminApp: React.FC<AdminAppProps> = ({ onLogout }) => {
  const [currentScreen, setCurrentScreen] = useState<AdminScreen>('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <AdminDashboard onNavigate={setCurrentScreen} />;
      case 'tasks':
        return <AdminTaskManagement onNavigate={setCurrentScreen} />;
      case 'attendance':
        return <AdminAttendanceOverview onNavigate={setCurrentScreen} />;
      case 'settings':
        return <AdminSettings onNavigate={setCurrentScreen} />;
      case 'leave-approval':
        return <AdminLeaveApproval onNavigate={setCurrentScreen} />;
      case 'create-sprint':
        return <AdminCreateSprint onNavigate={setCurrentScreen} />;
      case 'add-employee':
        return <AddEmployee onNavigate={setCurrentScreen} />;
      default:
        return <AdminDashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">MA</span>
          </div>
          <span className="font-semibold text-gray-800">Admin Portal</span>
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
      {!['leave-approval', 'create-sprint', 'add-employee'].includes(currentScreen) && (
        <Card className="m-0 rounded-none border-t bg-white">
          <div className="flex justify-around py-2">
            <Button
              variant={currentScreen === 'dashboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('dashboard')}
              className="flex-1 flex flex-col items-center py-3 h-auto"
            >
              <div className="w-6 h-6 mb-1 bg-current rounded opacity-60"></div>
              <span className="text-xs">Dashboard</span>
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
              variant={currentScreen === 'settings' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('settings')}
              className="flex-1 flex flex-col items-center py-3 h-auto"
            >
              <div className="w-6 h-6 mb-1 bg-current rounded opacity-60"></div>
              <span className="text-xs">Settings</span>
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AdminApp;
