import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Import CSS file

interface Notification {
  message: string;
  type: 'log' | 'notification';
}

const App: React.FC = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [intervalDuration, setIntervalDuration] = useState(1000);
  const [logs, setLogs] = useState<Notification[]>([]);
  const [notifications, setNotifications] = useState<string>('');
  const monitoringRef = useRef<NodeJS.Timeout | null>(null);

  const addLog = (message: string, type: 'log' | 'notification' = 'log') => {
    setLogs((prevLogs) => [...prevLogs, { message, type }]);
    if (type === 'notification') {
      setNotifications(message);
    }
  };

  const simulateMailbox = () => {
    const lightLevel = Math.floor(Math.random() * 100);
    const isOpen = lightLevel > 50;

    addLog(`Light level: ${lightLevel}, Door is ${isOpen ? 'open' : 'closed'}`);

    if (isOpen) {
      addLog('The mailbox door is open!', 'notification');
      new Audio('/door-open.mp3').play();
    }
  };

  const startMonitoring = () => {
    if (!isMonitoring) {
      setIsMonitoring(true);
      addLog('Started monitoring.');
      monitoringRef.current = setInterval(simulateMailbox, intervalDuration);
    }
  };

  const stopMonitoring = () => {
    if (isMonitoring) {
      setIsMonitoring(false);
      addLog('Stopped monitoring.');
      if (monitoringRef.current) {
        clearInterval(monitoringRef.current as unknown as number);
      }
    }
  };

  const resetMonitoring = () => {
    stopMonitoring();
    setLogs([]);
    setNotifications('');
    addLog('Monitoring reset.');
  };

  useEffect(() => {
    return () => {
      if (monitoringRef.current) {
        clearInterval(monitoringRef.current as unknown as number);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <h1>IOT Mailbox Simulator</h1>
      <div>
        <div className="control-panel">
          <label htmlFor="intervalDuration">Monitoring Interval (ms): </label>
          <input
            type="number"
            id="intervalDuration"
            value={intervalDuration}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIntervalDuration(Number(e.target.value))
            }
            disabled={isMonitoring}
          />
        </div>
        <div className="buttons">
          <button onClick={startMonitoring} disabled={isMonitoring}>
            Start Monitoring
          </button>
          <button onClick={stopMonitoring} disabled={!isMonitoring}>
            Stop Monitoring
          </button>
          <button onClick={resetMonitoring}>Reset</button>
        </div>
      </div>

      <div className="output-section">
        <h2>Notifications</h2>
        <div className="notifications">
          {notifications || 'No notifications yet.'}
        </div>

        <h2>Logs</h2>
        <div className="logs">
          {logs.map((log, index) => (
            <div
              key={index}
              className={
                log.type === 'notification' ? 'log-notification' : 'log-message'
              }
            >
              {log.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
