#!/usr/bin/pyth3
# *_* coding: utf-8 *_*
import os

# first?
if os.path.exists('/first.flag'):
    pass
else :
    f = open('/first.flag')
    f.write('first')
    f.close()
    #
    for filename in os.listdir('/cs-init.d'):
    os.system('python3 {filename}'.format(filename=filename))