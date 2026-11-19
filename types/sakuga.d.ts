// JSX typings for the Sakuga VFX web components loaded from /public/sakuga-vfx.
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type SakugaAttrs = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  label?: string;
  name?: string;
  value?: string | number;
  variant?: "primary" | "secondary";
  type?: string;
  placeholder?: string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  unit?: string;
  selected?: string | number;
  text?: string;
  duration?: string | number;
  message?: string;
  "done-label"?: string;
};

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "sakuga-button": SakugaAttrs;
      "sakuga-toggle": SakugaAttrs;
      "sakuga-slider": SakugaAttrs;
      "sakuga-checkbox": SakugaAttrs;
      "sakuga-radio": SakugaAttrs;
      "sakuga-input": SakugaAttrs;
      "sakuga-tabs": SakugaAttrs;
      "sakuga-progress": SakugaAttrs;
      "sakuga-rating": SakugaAttrs;
      "sakuga-toast": SakugaAttrs;
      "sakuga-tooltip": SakugaAttrs;
    }
  }
}
