import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

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
        title="AWS Job Support India | Cloud Support — CloudOpsDesk"
        description="Expert AWS job support — 24/7 help with EC2, Lambda, EKS, S3, CloudFormation & all AWS services. Trusted by 500+ engineers across India."
        canonical="/aws-job-support"
        keywords="aws job support, aws job support india, aws cloud support, ec2 support, eks support, lambda help, cloudformation support"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          AWS Job Support
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Need help with AWS at your job? Our certified AWS architects provide real-time support for all AWS services — from basic EC2 management to complex multi-account architectures.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">AWS Services We Support</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• AWS certified solution architects</li>
              <li>• 24/7 availability for urgent issues</li>
              <li>• Screen-share based real-time support</li>
              <li>• Affordable monthly plans</li>
            </ul>
          </div>
        </div>

        {/* AWS Expertise */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">AWS: The Leading Cloud Platform for Enterprises</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Amazon Web Services dominates the cloud market with over 200 services spanning compute, storage, databases, networking, security, AI/ML, and more. AWS professionals are among the highest-paid IT roles globally, but the breadth and depth of the platform means there is always something new to learn. From EC2 and S3 fundamentals to advanced services like EKS, Step Functions, and Lake Formation, mastering AWS requires hands-on production experience.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our AWS job support provides that production experience through real-time mentoring. Our experts hold multiple AWS certifications and have designed and managed AWS infrastructure for companies processing millions of requests daily. Whether you are setting up your first VPC or optimizing a complex multi-account architecture, we help you deliver with confidence.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'Which AWS services do you cover?', answer: 'We cover all major AWS services including EC2, S3, RDS, Lambda, EKS, ECS, CloudFormation, Terraform for AWS, IAM, VPC, Route 53, CloudFront, SQS, SNS, DynamoDB, Aurora, Redshift, Glue, Step Functions, API Gateway, and more. Our experts have production experience with 50+ AWS services.' },
          { question: 'Can you help with AWS infrastructure design and architecture?', answer: 'Yes, architecture design is one of our strengths. We help with VPC design, multi-account strategy, landing zone setup, high availability architectures, disaster recovery planning, and AWS Well-Architected Framework reviews. We also help prepare architecture documentation for stakeholder review.' },
          { question: 'Do you help with AWS certifications?', answer: 'While we offer a separate certification guidance service, many AWS job support clients also prepare for certifications alongside their work. We cover concepts at a depth that prepares you for both production work and certification exams like AWS SAA, SAP, DVA, and DevOps Professional.' },
          { question: 'Can you help with AWS cost optimization?', answer: 'Yes, AWS cost optimization is a critical skill. We help with right-sizing instances, implementing Savings Plans and Reserved Instances, spot instance strategies, S3 lifecycle policies, unused resource identification, and setting up AWS Cost Explorer and Budgets for ongoing cost management.' },
          { question: 'Do you support serverless and container workloads on AWS?', answer: 'Absolutely. We cover Lambda functions, API Gateway, Step Functions, Fargate, ECS, EKS, ECR, and serverless frameworks like SAM and Serverless Framework. We help you design event-driven architectures and container orchestration solutions on AWS.' },
          { question: 'Is support available for AWS security and compliance?', answer: 'Yes, we provide comprehensive AWS security support including IAM policies, Security Groups, NACLs, KMS encryption, Secrets Manager, GuardDuty, Security Hub, AWS Config, and compliance frameworks. We help you implement security best practices and pass security audits.' },
        ]} />

        {/* Related Services — Internal Linking */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/cloud-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Cloud Support</Link>
            <Link to="/devops-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">DevOps Support</Link>
            <Link to="/certification-guidance" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Certification Guidance</Link>
            <Link to="/corporate-training" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Corporate Training</Link>
            <Link to="/interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Interview Prep</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default AWSJobSupportPage;
