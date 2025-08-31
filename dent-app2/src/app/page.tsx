// app/page.tsx
import Tooth3D from "./components/Tooth3D";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Tooth3D />
    </div>
  );
}
