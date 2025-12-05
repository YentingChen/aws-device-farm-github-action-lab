#!/bin/bash

#
# Copyright 2023 Amazon.com, Inc. or its affiliates. All Rights Reserved.


#title           attach_device_farm_policy.sh
#summary         Create and attach an IAM policy to give restricted permission to GitHub Action to be able to access AWS Device Farm
#description     Create and attach an IAM policy to give restricted permission to GitHub Action to be able to access AWS Device Farm
#date            2023-09-05
#version         1.0
#usage           sh attach_device_farm_policy.sh
#==============================================================================

echo 'Starting role updates to give restricted permission to AWS Device Farm'

AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

aws iam create-policy --policy-name device_farm_iam_policy --policy-document file://device_farm_iam_policy.json

aws iam attach-role-policy --role-name DeviceFarm-GitHubActionRole --policy-arn arn:aws:iam::$AWS_ACCOUNT_ID:policy/device_farm_iam_policy

echo -e '\n\n Completed the GitHub IAM Role Update \n\n'