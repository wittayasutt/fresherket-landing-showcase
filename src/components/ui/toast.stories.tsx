import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { useToast } from './use-toast';
import { Toaster } from './toaster';

const meta: Meta = {
  title: 'UI/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <>
      <div className="space-y-2">
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            });
          }}
        >
          Show Error Toast
        </Button>
      </div>
      <Toaster />
    </>
  );
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToastDemo />,
};