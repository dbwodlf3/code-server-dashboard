#!/usr/bin/pyth3
# *_* coding: utf-8 *_*
"""
    This script is for installing nested packages
"""
import os, sys
import common

# print('install project packages')
# os.system("cd {PROJECT_DIR} && npm i".format(PROJECT_DIR=common.projectDir))
print('install client packages')
os.system("cd {CLIENT_DIR} && npm i --ignore-scripts".format(CLIENT_DIR=common.dashboardClientDir))
print('install server packages')
os.system("cd {SERVER_DIR} && npm i --ignore-scripts".format(SERVER_DIR=common.dashboardServerDir))

exit()