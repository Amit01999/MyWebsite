import { cn } from '@/lib/utils';

export default function RetroGrid({ className, angle = 55 }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]',
        className
      )}
      style={{
        '--grid-angle': `${angle}deg`,
      }}
    >
      {/* Grid */}
      <div
        className={cn(
          'absolute inset-0 [transform:rotateX(var(--grid-angle))]'
        )}
      >
        <div
          className={cn(
            'animate-grid',
            '[background-repeat:repeat]',
            '[background-size:60px_60px]',
            '[height:400vh]',
            '[inset:0%_0px]',
            '[margin-left:-50%]',
            '[transform-origin:100%_0_0]',
            '[width:400vw]',
            // Light Mode Styles
            '[background-image:linear-gradient(to_right,rgba(169,85,245,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(169,85,245,0.2)_1px,transparent_0)]',
            // Dark Mode Styles with `dark:` prefix
            'dark:[background-image:linear-gradient(to_right,rgba(169,85,245,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(169,85,245,0.5)_1px,transparent_0)]'
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0" />
    </div>
  );
}
