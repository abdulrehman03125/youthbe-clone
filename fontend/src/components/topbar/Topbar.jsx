import { Search, Mic, Plus, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex bg-white items-center justify-between md:justify-end gap-2 md:gap-4 p-2">
      {/* Mobile Search button */}
      <button className="block md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Search className="w-5 h-5" />
      </button>

      {/* Search bar for desktop */}
      <div className="hidden md:flex items-center border rounded-full overflow-hidden w-48 lg:w-64">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 w-full outline-none text-sm"
        />
        <button className="p-2">
          <Search className="w-4 h-4" />
        </button>
      </div>

      {/* Mic button */}
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Mic className="w-4 h-4" />
      </button>

      {/* Create button hidden on small screens */}
      <button className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium">
        <Plus className="w-4 h-4" />
        Create
      </button>

      {/* Notification bell */}
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Bell className="w-5 h-5" />
      </button>

      {/* Profile picture */}
      <img
        src="https://via.placeholder.com/32"
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover"
      />
    </div>
  );
}
