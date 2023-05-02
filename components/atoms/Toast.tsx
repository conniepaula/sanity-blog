import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { motion, AnimatePresence } from "framer-motion";
interface ToastProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  action?: React.ReactNode;
  isOpen: boolean;
}

const ToastDemo = (props: ToastProps) => {
  const { children, action, isOpen, title, description } = props;
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <Toast.Root open={true}>
        <AnimatePresence mode="wait">
          {isOpen && (<motion.div
            key="toast"
            className={`transitions-all relative rounded-md cursor-pointer bg-zinc-100 p-2 ${
              isOpen ? "" : "opacity-0"
            }`}
            initial={{ opacity: 0, right: -10 }}
            animate={{ opacity: 1, right: 0 }}
            exit={{ opacity: 0, transition: {duration: 0.1}}}
            // transition={{
            //   type: "spring",
            //   stiffness: 200,
            //   damping: 30,
            //   ease: "easeInOut",
            // }}
          >
            <Toast.Title className=" text-zinc-800">{title}</Toast.Title>
            {description && (
              <Toast.Description asChild>{description}</Toast.Description>
            )}
            {action && (
              <Toast.Action
                className="ToastAction"
                asChild
                altText="Goto schedule to undo"
              >
                {action}
              </Toast.Action>
            )}
          </motion.div>)}
        </AnimatePresence>
      </Toast.Root>
      <Toast.Viewport className="absolute bottom-1 right-1 z-50 max-w-md p-2 transition-opacity" />
    </Toast.Provider>
  );
};

export default ToastDemo;
