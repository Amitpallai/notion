declare module 'simplebar-react' {
  import { ComponentType, ReactNode } from 'react';
  
  interface SimpleBarProps {
    children?: ReactNode;
    className?: string;
    autoHide?: boolean;
    [key: string]: any;
  }
  
  const SimpleBar: ComponentType<SimpleBarProps>;
  export default SimpleBar;
} 