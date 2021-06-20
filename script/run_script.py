#!/usr/bin/pyth3
# *_* coding: utf-8 *_*
"""
    This script is for running server in test env.
"""

import os
import common
import argparse

# Init.
os.environ['OS']= common.currentOs
tsconfig = os.path.join(common.dashboardServerDir, 'tsconfig.json') # server tsconfig file.

# Print Information.
common.printProjectInfo()
print('tsconfig file:\t{tsconfig}\n'.format(tsconfig=tsconfig))

# args
parser = argparse.ArgumentParser()
parser.add_argument("file", help="script for executing")
args = parser.parse_args()
script_file = os.path.join(common.dashboardServerDir, "src", args.file) # script_file


# Execute
if common.currentOs == 'Windows':
    os.environ['NODE_PATH'] = '{ProjectDir};{ServerDir}'.format(
        ProjectDir=common.projectDir,
        ServerDir=common.dashboardServerDir
    )
    
    os.system('npx ts-node --project {tsconfig} {script_file}'.format(
        tsconfig=tsconfig,
        script_file=script_file))

elif common.currentOs == 'Linux':
    pass