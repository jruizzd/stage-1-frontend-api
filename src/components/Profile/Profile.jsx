export default function Profile({ user }) {
  return (
    <div className="profile">
      <h1>Welcome, {user?.name || user?.email}!</h1>
      <p>This is your protected profile page.</p>
    </div>
  );
}
