import type { Preview } from '@storybook/react';
// @ts-ignore
import '../app/globals.css'; 

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // 1. Storybook toolbar mein Theme toggle button add karna
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  // 2. Decorator jo 'dark' class HTML par apply karega aur background change karega
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return (
        <div className={theme === 'dark' ? 'dark bg-gray-900 text-white min-h-screen p-8' : 'bg-white text-black min-h-screen p-8'}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;