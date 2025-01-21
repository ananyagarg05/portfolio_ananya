"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils"; // Ensure `cn` exists, or replace it with "clsx" or equivalent.

const Tabs = TabsPrimitive.Root;

// TabsList Component
const TabsList = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn("inline-flex h-auto rounded-md p-1 text-primary", className)}
      {...rest}
    />
  );
});
TabsList.displayName = "TabsList";

// TabsTrigger Component
const TabsTrigger = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm",
        className
      )}
      {...rest}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

// TabsContent Component
const TabsContent = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "min-h-[480px] ring-offset-white focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        className
      )}
      {...rest}
    />
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
