import { clamp } from '@/utils';

function setProperty(property: string, value: string) {
  document.documentElement.style.setProperty(property, value);
}

function removeProperty(property: string) {
  document.documentElement.style.removeProperty(property);
}

type UpdateHeaderStylesProps = {
  headerRect: DOMRect | undefined;
  downDelay: number;
  upDelay: number;
};
export function updateHeaderStyles({
  headerRect,
  downDelay,
  upDelay,
}: UpdateHeaderStylesProps) {
  let { top, height } = headerRect || { top: 0, height: 0 };
  let scrollY = clamp(
    window.scrollY,
    0,
    document.body.scrollHeight - window.innerHeight
  );

  setProperty('--content-offset', `${downDelay}px`);

  if (scrollY < downDelay) {
    setProperty('--header-height', `${downDelay + height}px`);
    setProperty('--header-mb', `${-downDelay}px`);
  } else if (top + height < -upDelay) {
    let offset = Math.max(height, scrollY - upDelay);
    setProperty('--header-height', `${offset}px`);
    setProperty('--header-mb', `${height - offset}px`);
  } else if (top === 0) {
    setProperty('--header-height', `${scrollY + height}px`);
    setProperty('--header-mb', `${-scrollY}px`);
  }

  if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
    setProperty('--header-inner-position', 'fixed');
    removeProperty('--header-top');
    removeProperty('--avatar-top');
  } else {
    removeProperty('--header-inner-position');
    setProperty('--header-top', '0px');
    setProperty('--avatar-top', '0px');
  }
}

type UpdateAvatarStylesProps = {
  downDelay: number;
};
export function updateAvatarStyles({ downDelay = 0 }: UpdateAvatarStylesProps) {
  let fromScale = 1;
  let toScale = 36 / 64;
  let fromX = 0;
  let toX = 2 / 16;

  let scrollY = downDelay - window.scrollY;

  let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
  scale = clamp(scale, fromScale, toScale);

  let x = (scrollY * (fromX - toX)) / downDelay + toX;
  x = clamp(x, fromX, toX);

  setProperty(
    '--avatar-image-transform',
    `translate3d(${x}rem, 0, 0) scale(${scale})`
  );

  let borderScale = 1 / (toScale / scale);
  let borderX = (-toX + x) * borderScale;
  let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

  setProperty('--avatar-border-transform', borderTransform);
  setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0');
}
