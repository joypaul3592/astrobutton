# 🌟 AstroButton

Beautiful animated React buttons with star effects and dynamic features. Perfect for modern web applications that need eye-catching, interactive buttons.

![npm version](https://img.shields.io/npm/v/astrobutton)
![license](https://img.shields.io/npm/l/astrobutton)
![downloads](https://img.shields.io/npm/dm/astrobutton)

## ✨ Features

- 🌟 **Animated star background effects**
- 🎨 **Multiple variants and sizes**
- 💫 **Ripple click effects**
- ⏳ **Loading states with spinner**
- 🎯 **TypeScript support**
- 📱 **Responsive design**
- 🔧 **Highly customizable**
- ⚡ **Lightweight and performant**

## 📦 Installation

\`\`\`bash
npm install astrobutton
\`\`\`

## 🚀 Quick Start

\`\`\`jsx
import { AstroButton } from 'astrobutton';

function App() {
return (
<AstroButton
variant="primary"
size="default"
onClick={() => alert('Hello from space! 🚀')} >
Click me!
</AstroButton>
);
}
\`\`\`

## 📖 API Reference

### AstroButton Props

| Prop          | Type                                               | Default     | Description               |
| ------------- | -------------------------------------------------- | ----------- | ------------------------- |
| `children`    | `React.ReactNode`                                  | -           | Button content            |
| `variant`     | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant      |
| `size`        | `'sm' \| 'default' \| 'lg'`                        | `'default'` | Button size               |
| `loading`     | `boolean`                                          | `false`     | Show loading state        |
| `loadingText` | `string`                                           | -           | Text to show when loading |
| `startIcon`   | `React.ReactNode`                                  | -           | Icon before text          |
| `endIcon`     | `React.ReactNode`                                  | -           | Icon after text           |
| `fullWidth`   | `boolean`                                          | `false`     | Make button full width    |
| `ripple`      | `boolean`                                          | `true`      | Enable ripple effect      |
| `disabled`    | `boolean`                                          | `false`     | Disable button            |
| `onClick`     | `(e: MouseEvent) => void`                          | -           | Click handler             |

### Variants

- **`primary`**: Gradient background with animated colors
- **`secondary`**: Alternative gradient color scheme
- **`outline`**: Transparent background with border
- **`ghost`**: Subtle background with transparency

### Sizes

- **`sm`**: Small button (10rem × 2.5rem)
- **`default`**: Standard button (13rem × 3rem)
- **`lg`**: Large button (16rem × 3.5rem)

## 🎨 Examples

### Basic Usage

jsx
<AstroButton onClick={() => console.log('Clicked!')}>
Basic Button
</AstroButton>

### With Loading State

jsx
<AstroButton
loading={isLoading}
loadingText="Processing..."
onClick={handleSubmit}

> Submit Form
> </AstroButton> >

### With Icons

jsx
<AstroButton
startIcon={<StarIcon />}
endIcon={<ArrowIcon />}
variant="secondary"

> Get Started
> </AstroButton> >

### Different Variants

jsx

<div className="space-x-4">
  <AstroButton variant="primary">Primary</AstroButton>
  <AstroButton variant="secondary">Secondary</AstroButton>
  <AstroButton variant="outline">Outline</AstroButton>
  <AstroButton variant="ghost">Ghost</AstroButton>
</div>

### Different Sizes

jsx

<div className="space-y-4">
  <AstroButton size="sm">Small</AstroButton>
  <AstroButton size="default">Default</AstroButton>
  <AstroButton size="lg">Large</AstroButton>
</div>

## 🎭 Styling

The AstroButton component uses inline styles for the star animations and comes with built-in CSS animations. No additional CSS imports are required.

### Custom Styling

You can pass additional className props for custom styling:

jsx
<AstroButton
className="my-custom-class"
style={{ margin: '10px' }}

> Custom Styled
> </AstroButton> >

## 🌟 Animation Details

- **Star Background**: Animated star field with rotating and moving effects
- **Gradient Animation**: Smooth color transitions across the button surface
- **Ripple Effect**: Click-triggered ripple animation from the click point
- **Loading Animation**: Rotating spinner during loading states

## 🔧 TypeScript Support

AstroButton is built with TypeScript and includes full type definitions:

tsx
import { AstroButton, AstroButtonProps } from 'astrobutton';

const MyButton: React.FC<AstroButtonProps> = (props) => {
return <AstroButton {...props} />;
};

## 📱 Responsive Design

AstroButton works great on all screen sizes and supports touch interactions on mobile devices.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Joy](https://github.com/yourusername)

## 🔗 Links

- [GitHub Repository](https://github.com/yourusername/astrobutton)
- [npm Package](https://www.npmjs.com/package/astrobutton)
- [Issues](https://github.com/yourusername/astrobutton/issues)

---

Made with ❤️ and ✨ for the React community
