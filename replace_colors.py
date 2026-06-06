import os
import re

target_dir = r"c:\Projects\v_dental_website\src"

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # Specific gradients
    content = content.replace('from-violet-400 to-indigo-300', 'from-brand-300 to-brand-600')
    content = content.replace('from-violet-500 to-indigo-400', 'from-brand-300 to-brand-600')
    
    # General replacements
    content = content.replace('bg-[#0A0A0F]', 'bg-background')
    content = content.replace('bg-[#12121A]', 'bg-surface')
    content = content.replace('bg-[#1A1A24]', 'bg-surface-hover')
    
    # Text colors
    content = content.replace('text-[#ededed]', 'text-[#B8B8C2]')
    
    # Other violet/indigo generic replacements
    content = content.replace('violet-', 'brand-')
    content = content.replace('indigo-', 'brand-')
    
    # Direct hex codes
    content = content.replace('#0A0A0F', '#07070A')
    content = content.replace('#12121A', '#0E0E14')
    content = content.replace('#1A1A24', '#111119')

    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(target_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            replace_in_file(os.path.join(root, file))

print("Color migration complete!")
