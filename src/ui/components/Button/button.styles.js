// ui/components/Button/button.styles.js

export const baseClasses = 'inline-flex items-center justify-center rounded-xl font-semibold transition duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm';

export const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'border-2 border-blue-600 bg text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  outline: 'border border-gray-500 bg-transparent backdrop-blur-md text-gray-500 hover:bg-gray-100 focus:ring-gray-500',
};

export const sizes = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-5 py-2.5 text-base',
  large: 'px-6 py-3 text-lg',
  square: 'px-1 py-1 text-sm'
};