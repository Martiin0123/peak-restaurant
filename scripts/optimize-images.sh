#!/bin/bash

# Image Optimization Script for Peak Restaurant
# This script optimizes all images in the public directory
#
# Requirements:
#   - ImageMagick or sharp-cli
#
# Usage:
#   chmod +x scripts/optimize-images.sh
#   ./scripts/optimize-images.sh

set -e

PUBLIC_DIR="./public"
BACKUP_DIR="./public-backup"

echo "🖼️  Peak Restaurant - Image Optimization Script"
echo "================================================"
echo ""

# Check if public directory exists
if [ ! -d "$PUBLIC_DIR" ]; then
  echo "❌ Error: $PUBLIC_DIR directory not found"
  exit 1
fi

# Check if backup already exists
if [ -d "$BACKUP_DIR" ]; then
  echo "⚠️  Backup directory already exists!"
  echo "This means images may have already been optimized."
  echo ""
  read -p "Do you want to delete the old backup and re-optimize? (y/n) " -n 1 -r
  echo ""
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗑️  Removing old backup..."
    rm -rf "$BACKUP_DIR"
  else
    echo "ℹ️  Skipping optimization. Your images are likely already optimized."
    echo "   Current size: $(du -sh "$PUBLIC_DIR" | cut -f1)"
    exit 0
  fi
fi

# Create backup
echo "📦 Creating backup of original images..."
cp -r "$PUBLIC_DIR" "$BACKUP_DIR"
echo "✓ Backup created at $BACKUP_DIR ($(du -sh "$BACKUP_DIR" | cut -f1))"

echo ""
echo "🔧 Optimizing images..."
echo ""

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
  echo "Using ImageMagick for optimization..."
  
  for file in "$PUBLIC_DIR"/*.jpg "$PUBLIC_DIR"/*.jpeg "$PUBLIC_DIR"/*.png; do
    if [ -f "$file" ]; then
      filename=$(basename "$file")
      echo "  → Optimizing $filename"
      
      # For JPG/JPEG: Reduce quality to 80%, progressive, strip metadata
      if [[ "$file" =~ \.(jpg|jpeg)$ ]]; then
        convert "$file" -strip -interlace Plane -quality 80 "$file.tmp"
        mv "$file.tmp" "$file"
      fi
      
      # For PNG: Reduce colors, compress
      if [[ "$file" =~ \.png$ ]]; then
        convert "$file" -strip -colors 256 "$file.tmp"
        mv "$file.tmp" "$file"
      fi
    fi
  done
  
elif command -v npx &> /dev/null; then
  echo "Using sharp-cli for optimization..."
  echo "Installing sharp-cli temporarily..."
  
  for file in "$PUBLIC_DIR"/*.{jpg,jpeg,png}; do
    if [ -f "$file" ]; then
      filename=$(basename "$file")
      echo "  → Optimizing $filename"
      npx sharp-cli --input "$file" --output "$file" --quality 80 --progressive
    fi
  done
  
else
  echo "❌ Error: Neither ImageMagick nor Node.js/npx found"
  echo ""
  echo "Please install one of the following:"
  echo "  - ImageMagick: brew install imagemagick (macOS) or apt-get install imagemagick (Linux)"
  echo "  - Node.js: https://nodejs.org/"
  exit 1
fi

echo ""
echo "✅ Image optimization complete!"
echo ""
echo "📊 Size comparison:"
BEFORE_SIZE=$(du -sh "$BACKUP_DIR" 2>/dev/null | cut -f1)
AFTER_SIZE=$(du -sh "$PUBLIC_DIR" | cut -f1)
echo "Before optimization: $BEFORE_SIZE"
echo "After optimization:  $AFTER_SIZE"
echo ""

# Calculate savings (rough estimate)
BEFORE_KB=$(du -sk "$BACKUP_DIR" 2>/dev/null | cut -f1)
AFTER_KB=$(du -sk "$PUBLIC_DIR" | cut -f1)
if [ "$BEFORE_KB" -gt "$AFTER_KB" ]; then
  SAVED_KB=$((BEFORE_KB - AFTER_KB))
  SAVED_MB=$((SAVED_KB / 1024))
  PERCENT=$(( (SAVED_KB * 100) / BEFORE_KB ))
  echo "💾 Saved: ${SAVED_MB}MB (${PERCENT}% reduction)"
else
  INCREASE_KB=$((AFTER_KB - BEFORE_KB))
  echo "⚠️  Warning: Files appear larger after optimization."
  echo "   This might mean images were already optimized in the backup."
fi

echo ""
echo "💡 Tip: Test your site to ensure images look good, then delete the backup:"
echo "   rm -rf $BACKUP_DIR"
echo ""
