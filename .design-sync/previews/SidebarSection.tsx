import { Sidebar, SidebarSection, SidebarItem } from '@anser/ui';

export const Groups = () => (
  <div style={{ height: 320 }}>
    <Sidebar header={null}>
      <SidebarSection label="Main">
        <SidebarItem active>Home</SidebarItem>
        <SidebarItem>Call Log</SidebarItem>
      </SidebarSection>
      <SidebarSection label="Build the agent">
        <SidebarItem>Assistant</SidebarItem>
        <SidebarItem>Knowledge Base</SidebarItem>
        <SidebarItem>Answering Rules</SidebarItem>
      </SidebarSection>
    </Sidebar>
  </div>
);
