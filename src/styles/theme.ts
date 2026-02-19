/**
 * Design tokens — single source of truth for colours and alpha helpers.
 * All values reference Bootstrap CSS variables set in theme.scss so any
 * change to the palette only needs to happen in one place.
 */

export const colors = {
  primary: 'var(--bs-primary)',
  secondary: 'var(--bs-secondary)',
  background: 'var(--bs-indigo)',
  orange: 'var(--bs-orange)',
  white: 'var(--bs-white)',
} as const;

/** Returns an rgba() string using Bootstrap's RGB channel variables. */
export const alpha = {
  primary: (opacity: number): string => `rgba(var(--bs-primary-rgb), ${opacity})`,
  secondary: (opacity: number): string => `rgba(var(--bs-secondary-rgb), ${opacity})`,
  warning: (opacity: number): string => `rgba(var(--bs-warning-rgb), ${opacity})`,
} as const;

/** Card / panel style values shared across StyledCard and nav buttons. */
export const card = {
  borderRadius: '15px',
  borderWidth: '1.5px',
  borderColor: 'var(--bs-primary)',
  background: alpha.primary(0.3),
} as const;
