// export default function RegisterPage() {
//   const registerUser = () => {
//     fetch("https://chatbrief-ai.onrender.com/api/register/", {
//       method: "POST",
//     })
//       .then((res) => res.json())
//       .then((data) => setTask(data))
//       .catch((error) => console.error("Error:", Error));
//   };

//   return (
//     <div>
//       <form action="" onSubmit={registerUser}>
//         <input type="name" name="name" placeholder="Enter your full name" />
//         {/* <input type="email" name="email" placeholder="Email" required /> */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }
