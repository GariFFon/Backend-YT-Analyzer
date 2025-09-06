#!/usr/bin/env node
/**
 * Setup validation script for YouTube Comment Analyzer Backend
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔍 Validating YouTube Comment Analyzer Backend Setup...\n');

// Check if required files exist
const requiredFiles = [
  'package.json',
  '.env',
  'server/index.ts',
  'server/routes.ts',
  'shared/schema.ts'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ Missing: ${file}`);
    allFilesExist = false;
  }
}

// Check .env configuration
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  console.log('\n📋 Environment Configuration:');
  
  if (envContent.includes('YOUTUBE_API_KEY=your_youtube_api_key_here')) {
    console.log('⚠️  YouTube API key needs to be configured in .env file');
  } else if (envContent.includes('YOUTUBE_API_KEY=') && !envContent.includes('your_youtube_api_key_here')) {
    console.log('✅ YouTube API key configured');
  }
  
  if (envContent.includes('OPENROUTER_API_KEY=your_openrouter_api_key_here')) {
    console.log('ℹ️  OpenRouter API key not configured (optional for enhanced AI analysis)');
  } else if (envContent.includes('OPENROUTER_API_KEY=') && !envContent.includes('your_openrouter_api_key_here')) {
    console.log('✅ OpenRouter API key configured');
  }
}

// Check node_modules
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('✅ Dependencies installed');
} else {
  console.log('❌ Dependencies not installed. Run: npm install');
  allFilesExist = false;
}

console.log('\n🚀 Next Steps:');
console.log('1. Configure your YouTube API key in .env file');
console.log('2. (Optional) Configure OpenRouter API key for enhanced AI analysis');
console.log('3. Run: npm run dev');
console.log('4. Open http://localhost:8000 in your browser');

if (allFilesExist) {
  console.log('\n✅ Setup validation completed successfully!');
  process.exit(0);
} else {
  console.log('\n❌ Setup validation failed. Please fix the issues above.');
  process.exit(1);
}
