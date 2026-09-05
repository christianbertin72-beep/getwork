export const designTokens = {
  colors: {
    cream: '#FAF7F2',
    sage: '#8DA399',
    coral: '#E07A5F',
    charcoal: '#121417',
    darkBg: '#060709',
    surfaceCard: '#111316',
    surfaceBorder: 'rgba(255, 255, 255, 0.08)',
    brandGreen: '#34D77F',
    brandGreenGlow: '#22C55E',
    brandGreenLight: '#7AE89D',
    brandGreenDark: '#0C2214',
    textPrimary: '#FFFFFF',
    textSecondary: '#9CA3AF',
    textMuted: '#6B7280',
  },
  fonts: {
    heading: 'Fraunces, Georgia, serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  },
} as const;

export type DesignTokens = typeof designTokens;
