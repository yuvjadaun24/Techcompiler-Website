import Navbar from "@/components/navbar/Navbar";
import { FooterByAnima } from "../screens/Container/sections/Footer";
import CursorFollower from "@/components/CursorFollow";
import { ReactNode } from "react";


const Container = ({ children }: { children: ReactNode }): JSX.Element => {

  return (
    <div className="flex flex-col w-full overflow-x-clip" data-model-id="79:4">
      <CursorFollower />
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content — offset for fixed navbar */}
      <main className="w-full" style={{ paddingTop: 68 }}>
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full">
        <FooterByAnima />
      </footer>
    </div>
  );
};

export default Container;