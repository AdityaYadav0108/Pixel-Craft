import Sidebar from "@/app/components/shared/sidebar";
import MobileNav from "../components/shared/mobilenav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav/>  
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
