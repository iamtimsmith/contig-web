import type { Route } from "../+types/root";

export const meta = ({}: Route.MetaArgs) => [
  { title: "Settings | Contig" },
  { name: "description", content: "Welcome to React Router!" },
];

export const SettingsPage = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p>Settings page content goes here.</p>
    </div>
  );
};

export default SettingsPage;
