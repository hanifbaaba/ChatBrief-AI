import Sidebar from "@/app/Components/Sidebar/page";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <h1>Welcome {user}</h1>
      <p>Please select a channel to view messages</p>
    </div>
  );
}
