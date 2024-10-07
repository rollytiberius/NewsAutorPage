# Resize all images in a directory to half the size.
#
# Save on a new file with the same name but with "small_" prefix
# on high quality jpeg format.
#
# If the script is in /images/ and the files are in /images/2012-1-1-pics
# call with: python resize.py 2012-1-1-pics

from PIL import Image
import os
import sys

directory = "./picture"

for file_name in os.listdir(directory):
    print("Processing %s" % file_name)
image = Image.open(os.path.join(directory, file_name))

x,y = image.size
new_dimensions = (x/2, y/2) #dimension set here
output = image.resize(new_dimensions, Image.Resampling.LANCZOS)

output_file_name = os.path.join(directory, "small_" + file_name)
output.save(output_file_name, "JPEG", quality = 95)

print("All done")