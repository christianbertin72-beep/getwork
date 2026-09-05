// Unit test suite for design tokens and landing page requirements
export function runTests() {
  import('../src/lib/tokens').then(({ designTokens }) => {
    console.assert(designTokens.colors.cream === '#FAF7F2', 'cream token matches');
    console.assert(designTokens.colors.sage === '#8DA399', 'sage token matches');
    console.assert(designTokens.colors.coral === '#E07A5F', 'coral token matches');
    console.assert(designTokens.colors.charcoal === '#121417', 'charcoal token matches');
    console.assert(designTokens.colors.brandGreen === '#34D77F', 'brandGreen matches');
  });
}

