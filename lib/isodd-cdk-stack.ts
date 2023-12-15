import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class IsoddCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const isodd = new lambda.Function(this, 'IsOddHandler', {
      runtime: lambda.Runtime.NODEJS_LATEST,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'isodd.handler'
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: isodd
    });
  }
}
