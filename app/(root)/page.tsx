import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mr-4">
      <UserButton afterSwitchSessionUrl="/" />
      </div>
      <h1 className="text-4xl font-bold">Hello, World!</h1>
    </div>
  );
}
