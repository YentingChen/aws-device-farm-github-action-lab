#!/bin/bash

#
# Copyright 2023 Amazon.com, Inc. or its affiliates. All Rights Reserved.


#title           attach_device_farm_policy.sh
#summary         This script is for creating GitHub OIDC and IAM role that will be used to run Automated Tests on AWS Device Farm using the AWS Device Farm Automated Test for GitHub Actions
#description     This script is for creating GitHub OIDC and IAM role that will be used to run Automated Tests on AWS Device Farm using the AWS Device Farm Automated Test for GitHub Actions
#date            2023-09-05
#version         1.0
#usage           sh create_github_action_credentials.sh
#==============================================================================

echo 'Starting GitHubActionCredentials CloudFormation stack'
aws cloudformation create-stack \
  --stack-name GitHubActionCredentials \
  --template-body file://configure-github-action-credentials.yml \
  --parameters \
      ParameterKey=GitHubOrg,ParameterValue='YentingChen' \
      ParameterKey=RepositoryName,ParameterValue='aws-device-farm-github-action-lab' \
      ParameterKey=OIDCProviderArn,ParameterValue='' \
  --capabilities CAPABILITY_NAMED_IAM


echo 'Waiting for GitHubActionCredentials CloudFormation stack to complete'

aws cloudformation wait stack-create-complete --stack-name GitHubActionCredentials

aws cloudformation describe-stacks --stack-name GitHubActionCredentials --query Stacks[].Outputs[]

echo 'GitHub Action Credentials stack complete'

echo -e '\n\n Completed the GitHub Action Credentials Script \n\n'
