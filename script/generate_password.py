#!/usr/bin/env python3

import argparse
import hmac, hashlib
parser = argparse.ArgumentParser()
# parser.add_argument("SHA_KEY", help="SHA_KEY for make password")
parser.add_argument("PASSWORD", help="PASSWORD for input")

args = parser.parse_args()

def applySHA(inputString):
    source = inputString.encode('utf-8')
    hash_value = hmac.new('flying cat'.encode('utf-8'), msg=source, 
        digestmod=hashlib.sha256)

    result = hash_value.hexdigest()

    return result

def printPassword(inputPassword):
    print("PASSWORD: ", inputPassword)

def main():
    hash_password = applySHA(args.PASSWORD)
    printPassword(hash_password)

if __name__ == '__main__':
    main()