
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EmployeeAttendanceProps {
  onNavigate: (screen: string) => void;
}

const EmployeeAttendance: React.FC<EmployeeAttendanceProps> = ({ onNavigate }) => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const handleCheckIn = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsCheckedIn(true);
          console.log('GPS Location:', position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('GPS Error:', error);
          alert('GPS location required for check-in');
        }
      );
    }
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
  };

  const attendanceLogs = [
    { date: 'Dec 6, 2024', checkIn: '9:00 AM', checkOut: '6:00 PM', location: 'Move Academy Office', hours: '9h 0m' },
    { date: 'Dec 5, 2024', checkIn: '8:45 AM', checkOut: '5:30 PM', location: 'Move Academy Office', hours: '8h 45m' },
    { date: 'Dec 4, 2024', checkIn: '9:15 AM', checkOut: '6:15 PM', location: 'Move Academy Office', hours: '9h 0m' },
    { date: 'Dec 3, 2024', checkIn: '8:30 AM', checkOut: '5:45 PM', location: 'Remote Work', hours: '9h 15m' },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Current Status */}
      <Card className={`${isCheckedIn ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <CardContent className="p-6 text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            isCheckedIn ? 'bg-green-600' : 'bg-red-600'
          }`}>
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <h2 className="text-xl font-bold mb-2">
            {isCheckedIn ? 'Checked In' : 'Not Checked In'}
          </h2>
          <p className="text-gray-600 mb-4">
            {isCheckedIn ? 'Since 9:00 AM today' : 'Ready to start your day?'}
          </p>
          
          {!isCheckedIn ? (
            <Button 
              onClick={handleCheckIn}
              className="w-full h-12 bg-green-600 hover:bg-green-700"
            >
              GPS Check-In
            </Button>
          ) : (
            <Button 
              onClick={handleCheckOut}
              variant="destructive"
              className="w-full h-12"
            >
              Check-Out
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Location Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Current Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center text-gray-500">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <p className="text-sm">Move Academy Office</p>
              <p className="text-xs">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Distance from office:</span>
            <span className="font-medium">0.2 km</span>
          </div>
        </CardContent>
      </Card>

      {/* Today's Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Today's Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">9:00 AM</div>
              <div className="text-sm text-gray-500">Check-in</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">--:--</div>
              <div className="text-sm text-gray-500">Check-out</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attendance History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Attendance History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {attendanceLogs.map((log, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="font-medium text-sm">{log.date}</div>
                <div className="text-xs text-gray-500">{log.location}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{log.hours}</div>
                <div className="text-xs text-gray-500">
                  {log.checkIn} - {log.checkOut}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeAttendance;
