import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Engineer Job Support India",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Data Engineer Job Support",
  "description": "Real-time job support for Data Engineers working with Python, SQL, Spark, Snowflake, dbt, Airflow and other data tools in India.",
  "areaServed": { "@type": "Country", "name": "India" }
};

const DataEngineerJobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Data Engineer Job Support | Python, SQL & Spark"
        description="Real-time data engineering job support. Get help with ETL pipelines, Spark, Snowflake, dbt, Airflow & SQL from senior data engineers in India."
        canonical="/data-engineer-job-support"
        keywords="data engineer job support india, python data engineer online job support, spark job support, snowflake support india, data engineering help, etl pipeline support"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Data Engineer Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Need help with Spark jobs, ETL pipelines, Snowflake queries, or Airflow DAGs? Our senior data engineers provide real-time support to help you deliver complex data projects confidently.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Technologies We Support</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>🐍 Python (PySpark, Pandas, NumPy)</li>
              <li>🔥 Apache Spark, Databricks</li>
              <li>❄️ Snowflake, BigQuery, Redshift</li>
              <li>🔄 Apache Airflow, dbt, Prefect</li>
              <li>📡 Apache Kafka, Kinesis, Pub/Sub</li>
              <li>🗄️ SQL (PostgreSQL, MySQL, SQL Server)</li>
              <li>☁️ AWS Glue, Azure Data Factory, GCP Dataflow</li>
              <li>📊 Power BI, Tableau, Looker integration</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Common Tasks We Help With</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• ETL/ELT pipeline development & debugging</li>
              <li>• Spark job optimization & memory tuning</li>
              <li>• Data warehouse design & modeling</li>
              <li>• Real-time streaming data pipelines</li>
              <li>• Airflow DAG creation & troubleshooting</li>
              <li>• SQL query optimization & performance</li>
              <li>• Data quality checks & testing</li>
              <li>• Cloud data platform migration</li>
            </ul>
          </div>
        </div>

        {/* Data Engineering Landscape */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">The Growing Demand for Data Engineers in India</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Data engineering is one of the fastest-growing IT roles globally, with companies investing heavily in building modern data platforms. From batch ETL pipelines to real-time streaming architectures, data engineers are expected to manage increasingly complex data ecosystems spanning Spark, Kafka, Snowflake, dbt, Airflow, and cloud-native data services.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our data engineering job support helps professionals navigate this complexity with confidence. Whether you are building your first Spark pipeline, optimizing Snowflake queries, or troubleshooting Airflow DAG failures, our experts provide real-time, hands-on guidance tailored to your specific work environment.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'What data engineering tools do you support?', answer: 'We provide support for all major data engineering tools including Apache Spark, Apache Kafka, Apache Airflow, Snowflake, dbt, AWS Glue, Azure Data Factory, Google BigQuery, Databricks, Delta Lake, Apache Flink, and traditional SQL databases. Our experts have production experience with modern lakehouse architectures and real-time data platforms.' },
          { question: 'Can you help with data pipeline debugging and optimization?', answer: 'Yes, pipeline debugging and performance optimization are our core strengths. We help with Spark job tuning, Airflow DAG troubleshooting, query optimization in Snowflake and BigQuery, handling data skew, memory management, and partition strategies that can improve pipeline performance by 2-10x.' },
          { question: 'Do you support data engineers working with cloud platforms?', answer: 'Absolutely. We cover data engineering on all three major cloud platforms — AWS (Glue, Redshift, EMR, S3, Kinesis), Azure (Data Factory, Synapse, ADLS, Event Hubs), and GCP (BigQuery, Dataflow, Dataproc, Pub/Sub). Many of our clients work in multi-cloud environments.' },
          { question: 'Is support available for SQL and database design?', answer: 'Yes, we provide comprehensive SQL support including query writing, optimization, database schema design, indexing strategies, stored procedures, and migration between database systems. We cover PostgreSQL, MySQL, SQL Server, Oracle, and NoSQL databases like MongoDB and Cassandra.' },
          { question: 'Can I get support for data quality and testing?', answer: 'Yes, we help implement data quality frameworks using tools like Great Expectations, dbt tests, and custom validation logic. We also help with data lineage tracking, data catalog setup, and building robust testing strategies for your data pipelines.' },
          { question: 'How quickly can I get connected to a data engineering expert?', answer: 'Most clients are connected with an expert within 30 minutes of their first request. For scheduled support, you can book regular sessions at your preferred time. We match you with an expert who has experience with your specific tools and cloud platform.' },
        ]} />

        {/* Related Services — Internal Linking */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/ai-ml-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">AI/ML Support</Link>
            <Link to="/cloud-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Cloud Support</Link>
            <Link to="/full-stack-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Full Stack Support</Link>
            <Link to="/certification-guidance" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Certification Guidance</Link>
            <Link to="/interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Interview Prep</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default DataEngineerJobSupportPage;
