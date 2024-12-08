import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      home page
      <Input className=" border-2" style={{backgroundColor:'#666',borderRadius:'.4rem'}} type="search" />
    </div>
  );
}
