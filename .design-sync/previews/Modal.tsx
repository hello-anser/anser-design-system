import { Button, Input, Modal } from '@anser/ui';

export const ConfirmDelete = () => (
  <Modal
    open
    title="Delete phone number?"
    width={400}
    footer={
      <>
        <Button variant="ghost">Cancel</Button>
        <Button variant="danger">Delete number</Button>
      </>
    }
  >
    Callers dialling 0161 496 0724 will no longer reach Anser, and forwarding
    from your existing line stops immediately. This does not cancel any
    bookings already made.
  </Modal>
);

export const RescheduleBooking = () => (
  <Modal
    open
    title="Reschedule booking"
    width={440}
    footer={
      <>
        <Button variant="ghost">Cancel</Button>
        <Button variant="neutral">Save changes</Button>
      </>
    }
  >
    <div style={{ display: 'grid', gap: 14 }}>
      <Input label="Customer" defaultValue="Mrs Patel — leaking radiator" />
      <Input label="New time" mono defaultValue="Tue 14 Jul, 09:30" />
      <Input
        label="Notify on"
        mono
        defaultValue="07700 900418"
        hint="We text the customer the new time straight away."
      />
    </div>
  </Modal>
);
