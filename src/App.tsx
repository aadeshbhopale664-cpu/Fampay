import { useState } from 'react';
import './App.css';
import ScanPayCard from './components/ScanPayCard';
import SearchBar from './components/SearchBar';
import SecurityBanner from './components/SecurityBanner';
import QuickActions from './components/QuickActions';
import BankLinkBanner from './components/BankLinkBanner';
import BottomNav from './components/BottomNav';
import Header from './components/Header';

function App() {
  const [activeTab, setActiveTab] = useState('pay');

  return (
    <div className="app">
      <Header />

      <div className="main-content">
        <ScanPayCard />
        <SearchBar />
        <SecurityBanner />
        <QuickActions />
        <BankLinkBanner />
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
