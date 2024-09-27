import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-4">
      <div className="mr-4">
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </div>
  );
}
