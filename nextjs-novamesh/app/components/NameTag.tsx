export default function NameTag() {
  const user = {
    username: "Zayman2045",
    id: 1,
  };

  return (
    <>
      <h2>Hello {user.username}</h2>
      <h3>Member ID: {user.id}</h3>
    </>
  );
}
