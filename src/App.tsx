import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RepairProvider } from './context/RepairContext';
import { Welcome } from './pages/Welcome';
import { Upload } from './pages/Upload';
import { Repair } from './pages/Repair';
import { Results } from './pages/Results';

const App: React.FC = () => {
  return (
    <RepairProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </RepairProvider>
  );
};

export default App;
