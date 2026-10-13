import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import ChatBot from "./component/chatbot/ChatBot";

function Layout() {
  return (
    <div className="flex-col min-h-screen flex relative">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default Layout;

