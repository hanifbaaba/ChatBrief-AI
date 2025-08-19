export default function Sidebar() {
  return (
    <div>
      <h1>ChatBrief AI</h1>
      <ul>
        <li>Dashboard</li>
        <li>Summaries</li>
        <li>Action Items</li>
        <li>Integrations</li>
        {/* add user avatar later */}
        <li>Profile</li>
        <select name="" id="">
          <option value="">Notion</option>
          <option value="">Slack</option>
          <option value="">Trello</option>
        </select>
        <li>Channels</li>
      </ul>
    </div>
  );
}
