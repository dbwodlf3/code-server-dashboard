#!/usr/bin/pyth3
# *_* coding: utf-8 *_*
"""
    This file is for python scripts.
    Common Values, Common Functions and etc...
"""

import platform
import os

# Common Values
currentOs = platform.system()

projectDir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
destDir = os.path.join(projectDir, 'dest') # directory for transpiled files.
dashboardServerDir = os.path.join(projectDir, 'src', 'dashboard-server')
dashboardClientDir = os.path.join(projectDir, 'src', 'dashboard-client')

# Common Functions
def printProjectInfo() :
    print('=======================================================')
    print("""running in test env. don't execute in production.""")
    print('=======================================================')
    print('- ProjectDirectory: ', projectDir)
    print('- ServerDirectory: ', dashboardServerDir)
    print('- ClientDirectory: ', dashboardClientDir)
    print('-------------------------------------------------------')
    print('')