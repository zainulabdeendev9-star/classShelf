import Logo from "../Logo";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
    return (
        <aside className="w-64 bg-white border-r border-r-gray-300 h-screen sticky top-0 p-6">
            <div className="mb-8 flex items-center">
            <Logo/>
                <span className="ml-3 text-xl font-bold text-gray-900">ClassShelf</span>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
                
                <SidebarItem to="/admin" >Dashboard</SidebarItem>
                <SidebarItem to="/admin/notes" >Manage Notes</SidebarItem>
                <SidebarItem to="/admin/create" >Create Note</SidebarItem>
                
            </nav>
        </aside>
    );
};

export default Sidebar;