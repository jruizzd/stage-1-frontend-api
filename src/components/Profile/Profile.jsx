export default function Profile({ user }) {
  return (
    <section className="profile">
      <h1>Welcome {user?.name || user?.email}!</h1>
    </section>
  );
}
