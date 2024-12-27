import IconCloud from '../ui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'firebase',
  'vercel',
  'testinglibrary',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
];

export function MyTech() {
  return (
    <div className="relative mx-auto flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
