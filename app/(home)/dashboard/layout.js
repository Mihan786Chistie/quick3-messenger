import AddDialog from "@/components/layout/dialog/addDialog";
import { LoginDialog } from "@/components/layout/dialog/loginDialog";

export const metadata = {
  title: "3Chat | Dashboard",
  description: "3Chat Messenger",
};

export default function RootLayout({ children }) {
  return (
    <div className="h-screen w-screen flex justify-center">
      {children}
      <LoginDialog />
      <AddDialog />
    </div>
  );
}
