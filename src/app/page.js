import Header from '@/components/layout/Header';
import KPICards from '@/components/dashboard/KPICards';
import VideoFeed from '@/components/dashboard/VideoFeed';
import LiveActivityLog from '@/components/dashboard/LiveActivityLog';

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
          <KPICards />
          <VideoFeed />
        </div>
        
        {/* Right Sidebar */}
        <LiveActivityLog />
      </main>
    </>
  );
}
