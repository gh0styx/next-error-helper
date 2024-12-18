import SideBar from '@/components/SideBar';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const page = () => {
  return (
    <>
      <SidebarProvider>
        <SideBar />
      </SidebarProvider>
    </>
  );
};

export default page;
