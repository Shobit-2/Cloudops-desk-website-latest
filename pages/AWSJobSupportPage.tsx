import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AWS Job Support",
  "description": "Expert AWS job support for professionals. Get real-time help with EC2, S3, Lambda, EKS, CloudFormation, and all AWS services.",
  "provider": {
    "@type": "Organization",
    "name": "CloudOps Desk"
  }
};

const AWSJobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AWS Job Support India | Real-Time Cloud Support — CloudOps Desk"
        description="Expert AWS job support for professionals. Get 24/7 real-time help with EC2, S3, Lambda, EKS, CloudFormation & all AWS services. Trusted by 500+ engineers across India."
        canonical="/aws-job-support"
        keywords="aws job support, aws job support india, aws cloud support, ec2 support, eks support, lambda help, cloudformation support"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          AWS Job Support
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Need help with AWS at your job? Our certified AWS architects provide real-time support for all AWS services — from basic EC2 management to complex multi-account architectures.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">AWS Services We Support</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• EC2, ECS, EKS & Lambda</li>
              <li>• S3, RDS, DynamoDB & ElastiCache</li>
              <li>• CloudFormation & CDK</li>
              <li>• VPC, Route53 & CloudFront</li>
              <li>• IAM, KMS & Security Hub</li>
              <li>• CloudWatch, X-Ray & Cost Optimization</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• AWS certified solution architects</li>
              <li>• 24/7 availability for urgent issues</li>
              <li>• Screen-share based real-time support</li>
              <li>• Affordable monthly plans</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default AWSJobSupportPage;
