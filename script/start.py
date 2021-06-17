#!/usr/bin/pyth3
# *_* coding: utf-8 *_*
"""
    This script is for running server in test env.
"""

import os, sys
import common

# Init.
os.environ['OS']= common.currentOs
tsconfig = os.path.join(common.dashboardServerDir, 'tsconfig.json') # server tsconfig file.
entry = os.path.join(common.dashboardServerDir, 'src', 'index.ts') # server entry file.

# Print Information.
common.printProjectInfo()

# Execute
if common.currentOs == 'Windows':
    os.environ['NODE_PATH'] = '{ProjectDir};{ServerDir};{ServerDir}/src'.format(
        ProjectDir=common.projectDir,
        ServerDir=common.dashboardServerDir
    )
    os.system('npx ts-node --project {tsconfig} {entry}'.format(
        tsconfig=tsconfig,
        entry=entry))
elif common.currentOs == 'Linux':
    pass