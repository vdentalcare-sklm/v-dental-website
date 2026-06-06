from PIL import Image

def trim(p):
    try:
        i = Image.open(p)
        bbox = i.getbbox()
        if bbox:
            i.crop(bbox).save(p)
            print(f"Trimmed {p}")
        else:
            print(f"No bbox found for {p}")
    except Exception as e:
        print(f"Error processing {p}: {e}")

trim('public/images/logo-english.png')
trim('public/images/logo-telugu.png')
print('Done')
