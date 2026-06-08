import os
import re

target_dir = r"c:\Projects\v_dental_website\src"

def replace_in_file(filepath):
    # Skip files we already customized perfectly
    if "HeroSection.tsx" in filepath or "WhyChooseUs.tsx" in filepath or "Navbar.tsx" in filepath or "Footer.tsx" in filepath or "TreatmentShowcase.tsx" in filepath or "TestimonialCarousel.tsx" in filepath or "CTASection.tsx" in filepath:
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # Text colors
    content = content.replace('text-white', 'text-text-primary')
    content = content.replace('text-white/', 'text-text-primary/')
    content = content.replace('text-foreground', 'text-text-primary')
    content = content.replace('text-gray-400', 'text-text-secondary')
    content = content.replace('text-gray-300', 'text-text-secondary')
    content = content.replace('text-brand-400', 'text-[#005C96]')
    content = content.replace('text-brand-300', 'text-[#5AA647]')
    content = content.replace('text-brand-500', 'text-[#005C96]')
    
    # Backgrounds and borders
    content = content.replace('bg-surface', 'bg-white')
    content = content.replace('bg-background', 'bg-[#F2FBF7]')
    content = content.replace('border-white/10', 'border-[#E5E7EB]')
    content = content.replace('border-white/5', 'border-[#E5E7EB]')
    content = content.replace('bg-white/5', 'bg-[#005C96]/5')
    content = content.replace('bg-white/10', 'bg-[#005C96]/10')
    content = content.replace('bg-brand-500', 'bg-[#005C96]')
    content = content.replace('bg-brand-600', 'bg-[#005C96]')
    content = content.replace('bg-brand-900', 'bg-[#005C96]')
    
    # Gradients
    content = content.replace('from-brand-300 to-brand-600', 'from-[#005C96] to-[#5AA647]')
    content = content.replace('from-brand-500 to-brand-700', 'from-[#005C96] to-[#0077B6]')
    content = content.replace('from-brand-600/20', 'from-[#005C96]/10')
    content = content.replace('from-background', 'from-[#F2FBF7]')
    
    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(target_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            replace_in_file(os.path.join(root, file))

print("Light theme migration complete!")
