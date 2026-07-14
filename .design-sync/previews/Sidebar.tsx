import type { CSSProperties, ReactNode } from 'react';
import { Badge, Sidebar, SidebarItem, SidebarSection } from '@anser/ui';

/* 16px stroke glyphs on currentColor, as in the product shell. */
const Icon = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    {children}
  </svg>
);
const HomeIcon = () => (
  <Icon>
    <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </Icon>
);
const SparkIcon = () => (
  <Icon>
    <path d="M5 3l1.5 4L11 8.5 6.5 10 5 14l-1.5-4L-1 8.5 3.5 7z" transform="translate(4 1)" />
    <path d="M17 13l.9 2.4L20 16l-2.1.8L17 19l-.9-2.2L14 16l2.1-.6z" />
  </Icon>
);
const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
  </Icon>
);
const PersonIcon = () => (
  <Icon>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icon>
);
const BookIcon = () => (
  <Icon>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </Icon>
);
const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);
const CalendarIcon = () => (
  <Icon>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Icon>
);
const CardIcon = () => (
  <Icon>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </Icon>
);

const frame: CSSProperties = {
  height: 520,
  display: 'flex',
  border: '1px solid var(--anser-line)',
  borderRadius: 'var(--anser-radius-lg)',
  overflow: 'hidden',
  background: 'var(--anser-bg)',
};

const label: CSSProperties = {
  fontFamily: 'var(--anser-font-mono)',
  fontSize: 10,
  letterSpacing: 1.4,
  textTransform: 'uppercase',
  color: 'var(--anser-sidebar-faint)',
};

const CompanySwitcher = () => (
  <div
    style={{
      background: 'var(--anser-sidebar-card)',
      border: '1px solid var(--anser-sidebar-line)',
      borderRadius: 12,
      padding: 14,
    }}
  >
    <div style={{ ...label, marginBottom: 9 }}>Current company</div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        background: 'var(--anser-sidebar-input)',
        border: '1px solid var(--anser-sidebar-line)',
        borderRadius: 8,
        padding: '9px 11px',
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--anser-sidebar-strong)',
        cursor: 'pointer',
      }}
    >
      Halloway Plumbing &amp; Heating
      <span style={{ color: 'var(--anser-sidebar-faint)', fontSize: 10 }}>▼</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
      <Badge tone="amber">Demo</Badge>
      <Badge tone="green" dot>Voice live</Badge>
    </div>
  </div>
);

export const AppNavigation = () => (
  <div style={frame}>
    <Sidebar footer={<CompanySwitcher />}>
      <SidebarSection label="Main">
        <SidebarItem icon={<HomeIcon />}>Home</SidebarItem>
        <SidebarItem icon={<SparkIcon />} active>Demo Room</SidebarItem>
        <SidebarItem icon={<PhoneIcon />}>Call Log</SidebarItem>
      </SidebarSection>
      <SidebarSection label="Build">
        <SidebarItem icon={<PersonIcon />}>Assistant</SidebarItem>
        <SidebarItem icon={<BookIcon />}>Knowledge Base</SidebarItem>
        <SidebarItem icon={<ClockIcon />}>Answering Rules</SidebarItem>
        <SidebarItem icon={<PhoneIcon />}>Phone Numbers</SidebarItem>
      </SidebarSection>
      <SidebarSection label="Operate">
        <SidebarItem icon={<CalendarIcon />}>Scheduler</SidebarItem>
        <SidebarItem icon={<CardIcon />}>Billing</SidebarItem>
      </SidebarSection>
    </Sidebar>
    <div style={{ flex: 1, minWidth: 96 }} />
  </div>
);

export const WithBadges = () => (
  <div style={{ ...frame, height: 380 }}>
    <Sidebar footer={<CompanySwitcher />}>
      <SidebarSection label="Main">
        <SidebarItem icon={<HomeIcon />} href="#home">Home</SidebarItem>
        <SidebarItem
          icon={<PhoneIcon />}
          href="#call-log"
          active
          badge={<Badge tone="amber">4 new</Badge>}
        >
          Call Log
        </SidebarItem>
        <SidebarItem
          icon={<CalendarIcon />}
          href="#scheduler"
          badge={<Badge tone="green" dot>2</Badge>}
        >
          Scheduler
        </SidebarItem>
        <SidebarItem icon={<CardIcon />} href="#billing">Billing</SidebarItem>
      </SidebarSection>
    </Sidebar>
    <div style={{ flex: 1, minWidth: 96 }} />
  </div>
);

export const CustomHeader = () => (
  <div style={{ ...frame, height: 320 }}>
    <Sidebar
      width={210}
      header={
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--anser-sidebar-strong)' }}>
            Halloway Plumbing
          </div>
          <div style={{ ...label, marginTop: 5 }}>Berkshire · 2 lines</div>
        </div>
      }
    >
      <SidebarSection label="Operate">
        <SidebarItem icon={<CalendarIcon />} active>Scheduler</SidebarItem>
        <SidebarItem icon={<PhoneIcon />}>Call Log</SidebarItem>
        <SidebarItem icon={<CardIcon />}>Billing</SidebarItem>
      </SidebarSection>
    </Sidebar>
    <div style={{ flex: 1, minWidth: 96 }} />
  </div>
);
