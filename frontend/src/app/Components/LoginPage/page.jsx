export default function LoginPage() {
  const userLogin = () => {
    fetch("https://chatbrief-ai.onrender.com/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((error) => console.error("Error:", Error));
  };
  return (
    <div>
      <form action="" onSubmit={userLogin}>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
