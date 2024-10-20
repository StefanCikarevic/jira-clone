import {Button} from "@/components/ui/button";
import Test from "@/features/test";

export default function Home() {
  return (
    <div className='flex gap-4'>
      <Button variant='default'>Default</Button>
       <Button variant='secondary'>Secondary</Button>
          <Test></Test>
    </div>
  );
}
