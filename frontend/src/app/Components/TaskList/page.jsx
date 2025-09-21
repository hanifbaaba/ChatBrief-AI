import Task from "../Task/page";
export default function TaskList() {
  return (
    <div>
      <ul>
        <li>{Task.map}</li>
      </ul>
    </div>
  );
}
