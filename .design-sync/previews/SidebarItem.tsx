import { Sidebar, SidebarItem } from '@anser/ui';

export const States = () => (
  <div style={{ height: 240 }}>
    <Sidebar header={null}>
      <SidebarItem icon={<span aria-hidden>◧</span>}>Home</SidebarItem>
      <SidebarItem icon={<span aria-hidden>◎</span>} active>
        Demo Room
      </SidebarItem>
      <SidebarItem icon={<span aria-hidden>☰</span>} badge="14">
        Call Log
      </SidebarItem>
      <SidebarItem icon={<span aria-hidden>✆</span>} href="#numbers">
        Phone Numbers
      </SidebarItem>
    </Sidebar>
  </div>
);
