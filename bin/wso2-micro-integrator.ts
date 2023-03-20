#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Wso2MicroIntegratorStack } from '../lib/wso2-micro-integrator-stack';

const app = new cdk.App();
new Wso2MicroIntegratorStack(app, 'Wso2MicroIntegratorStack', {
	env: { account: '858735049384', region: 'us-east-1' },
    stackName: 'wso2-micro-integrator',
    description: 'Micro integrator is an open-source, lightweight, fast, scalable, and distributed microservice integration layer'
});