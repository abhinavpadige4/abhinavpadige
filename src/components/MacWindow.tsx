import { cn } from '@/lib/utils';

interface MacWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

const MacWindow = ({ title, children, className, bodyClassName }: MacWindowProps) => {
  return (
    <div className={cn('mac-window', className)}>
      <div className="mac-titlebar">
        <div className="flex items-center gap-1.5">
          <span className="mac-dot bg-[#ff5f57]" />
          <span className="mac-dot bg-[#febc2e]" />
          <span className="mac-dot bg-[#28c840]" />
        </div>
        {title && (
          <div className="flex-1 text-center text-xs font-medium text-muted-foreground tracking-wide -ml-12">
            {title}
          </div>
        )}
      </div>
      <div className={cn('p-6 sm:p-8', bodyClassName)}>{children}</div>
    </div>
  );
};

export default MacWindow;