import { Navbar } from './_component/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {children}
      <Navbar />
    </div>
  );
};
export default DashboardLayout;
