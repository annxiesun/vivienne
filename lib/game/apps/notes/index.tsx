import Sidebar from "./components/sidebar";
import Main from "./components/main";

const Notes = () => {
  return (
    <div className="notes-app flex w-full h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Notes;
