import Summary from "../Summary/page";

export default function Channels() {
  return (
    <div>
      <MessageList /> Scrollable list, each item shows: avatar, name, timestamp,
      message text.
      <Summary />
      Summary text (AI generated). Action Items List: small cards with: Task
      text Owner (e.g., “Hanif”) Due date (e.g., “Tomorrow”) Status
      (open/closed)
    </div>
  );
}
