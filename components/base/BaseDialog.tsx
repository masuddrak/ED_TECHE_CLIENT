import {
  Dialog,

  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
const BaseDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Welcome!</DialogTitle>
        <DialogDescription>fgf</DialogDescription>
        <div className="grid gap-4">
          {children}
        </div>
    
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
