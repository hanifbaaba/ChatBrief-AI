export default function LoginPage() {
  //   const userLogin = () => {
  //     fetch("", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("access")}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setTask(data))
  //       .catch((error) => console.error("Error:", Error));
  //   };
  return (
    <div>
      <form action="" onSubmit={userLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
