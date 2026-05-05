import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

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
        title="Data Engineer Job Support India | Python, SQL, Spark, Snowflake"
        description="Struggling with data pipelines, ETL jobs, or Spark tasks at work? Get real-time data engineering job support from senior engineers. Python, SQL, Spark, Snowflake, dbt & Airflow."
        canonical="/data-engineer-job-support"
        keywords="data engineer job support india, python data engineer online job support, spark job support, snowflake support india, data engineering help, etl pipeline support"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Data Engineer Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Need help with Spark jobs, ETL pipelines, Snowflake queries, or Airflow DAGs? Our senior data engineers provide real-time support to help you deliver complex data projects confidently.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Technologies We Support</h2>
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
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Common Tasks We Help With</h2>
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

        <QuoteForm />
      </section>
    </>
  );
};

export default DataEngineerJobSupportPage;
