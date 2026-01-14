/**
 * Generate Blur Placeholders for Images
 * 
 * This script helps generate proper blur data URLs for your images
 * to improve perceived loading performance.
 * 
 * Usage:
 *   node scripts/generate-blur-placeholders.js
 * 
 * Requirements:
 *   npm install sharp --save-dev
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_FILE = path.join(__dirname, 'blur-data-urls.json');

async function generateBlurDataUrl(imagePath) {
  try {
    const buffer = await sharp(imagePath)
      .resize(10, 10, { fit: 'inside' })
      .blur()
      .toBuffer();
    
    const base64 = buffer.toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error.message);
    return null;
  }
}

async function processImages() {
  console.log('🖼️  Generating blur placeholders for images...\n');
  
  const imageFiles = fs.readdirSync(PUBLIC_DIR)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
  
  const results = {};
  
  for (const file of imageFiles) {
    const imagePath = path.join(PUBLIC_DIR, file);
    console.log(`Processing: ${file}`);
    
    const blurDataUrl = await generateBlurDataUrl(imagePath);
    if (blurDataUrl) {
      results[file] = blurDataUrl;
      console.log(`✓ Generated blur placeholder for ${file}`);
    }
  }
  
  // Save to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`\n✅ Blur placeholders saved to ${OUTPUT_FILE}`);
  
  // Print usage example
  console.log('\n📝 Usage Example:');
  console.log('```tsx');
  console.log('<Image');
  console.log('  src="/Gallery1.jpg"');
  console.log('  alt="..."');
  console.log('  placeholder="blur"');
  console.log(`  blurDataURL="${results['Gallery1.jpg'] || 'YOUR_BLUR_DATA_URL'}"`);
  console.log('/>');
  console.log('```\n');
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  processImages().catch(console.error);
} catch (e) {
  console.error('❌ Error: sharp is not installed.');
  console.log('\nPlease install it first:');
  console.log('  npm install sharp --save-dev\n');
  process.exit(1);
}
