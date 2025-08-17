#!/bin/bash

echo "📦 Setting up Weron package..."

# Install dependencies
npm install

echo "✅ Dependencies installed!"
echo "🔨 Building package..."

# Build the package
npm run build

echo "✅ Package built successfully!"
echo ""
echo "🚀 Next steps:"
echo "1. Test locally: npm link"
echo "2. In your Next.js project: npm link weron"
echo "3. Or publish: npm publish"
