
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'default',
    size = 'md',
    asChild = false,
    href,
    to,
    target,
    rel,
    children,
    ...props
  }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-500/50 disabled:pointer-events-none disabled:opacity-50',
      {
        'bg-portfolio-600 hover:bg-portfolio-700 text-white': variant === 'default',
        'bg-transparent border border-portfolio-600 text-portfolio-400 hover:bg-portfolio-600/10': variant === 'outline',
        'bg-transparent text-portfolio-400 hover:bg-portfolio-600/10': variant === 'ghost',
        'btn-gradient': variant === 'gradient',
        'text-sm px-3 py-1.5 rounded': size === 'sm',
        'text-base px-5 py-2.5 rounded-md': size === 'md',
        'text-lg px-7 py-3 rounded-lg': size === 'lg',
      },
      className
    );

    if (href) {
      return (
        <a 
          href={href} 
          className={baseStyles}
          target={target}
          rel={rel}
        >
          {children}
        </a>
      );
    }

    if (to) {
      return (
        <Link 
          to={to} 
          className={baseStyles}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={baseStyles}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
