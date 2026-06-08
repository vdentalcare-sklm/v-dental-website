const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/about',
  'src/components/gallery'
];

function replaceBackgrounds(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      replaceBackgrounds(fullPath);
    } else if (file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace section backgrounds
      content = content.replace(/<section([^>]*)bg-white([^>]*)>/g, '<section$1bg-[#FAFAF7]$2>');
      content = content.replace(/<section([^>]*)bg-[#F4FAFD]([^>]*)>/g, '<section$1bg-[#EAF5FB]$2>');
      content = content.replace(/<section([^>]*)bg-[#F2FBF7]([^>]*)>/g, '<section$1bg-[#F1F8F2]$2>');
      
      // Remove text gradients and startup glows
      content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-\[[^\]]+\] to-\[[^\]]+\]/g, 'text-[#083D5B]');
      content = content.replace(/shadow-\[0_0_.*?\]/g, 'shadow-xl');
      content = content.replace(/blur-\[[0-9]+px\]/g, 'hidden');

      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

directories.forEach(dir => replaceBackgrounds(path.join(__dirname, dir)));
