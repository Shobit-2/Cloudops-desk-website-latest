import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI/ML Engineer Job Support India",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "AI ML Job Support",
  "description": "Real-time job support for AI/ML Engineers working with Python, TensorFlow, PyTorch, LangChain, MLOps and Generative AI in India.",
  "areaServed": { "@type": "Country", "name": "India" }
};

const AIMLJobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI/ML Engineer Job Support India | Python, TensorFlow, LangChain"
        description="Struggling with ML model building, MLOps pipelines, or LLM tasks at work? Get real-time AI/ML job support from senior engineers. Python, TensorFlow, PyTorch, LangChain & more."
        canonical="/ai-ml-job-support"
        keywords="ai engineer job support, machine learning job support india, mlops job support, llm engineer support, ai ml job support india, generative ai support, tensorflow help india"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          AI/ML Engineer Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Need help with ML model training, LLM integration, MLOps pipelines, or GenAI applications? Our senior AI/ML engineers provide real-time support for the hottest domain in tech.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Technologies We Support</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>🐍 Python, Jupyter, NumPy, Pandas, Scikit-learn</li>
              <li>🧠 TensorFlow, Keras, PyTorch</li>
              <li>🔗 LangChain, LlamaIndex, OpenAI APIs</li>
              <li>🚀 MLflow, Kubeflow, SageMaker</li>
              <li>📊 Feature engineering & data preprocessing</li>
              <li>🤖 Generative AI, RAG, Prompt Engineering</li>
              <li>☁️ AWS SageMaker, Azure ML, Vertex AI</li>
              <li>🐳 MLOps, model deployment, monitoring</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Common Tasks We Help With</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• ML model development & training</li>
              <li>• LLM fine-tuning & RAG implementation</li>
              <li>• MLOps pipeline setup & automation</li>
              <li>• Model deployment to production</li>
              <li>• Data preprocessing & feature engineering</li>
              <li>• Model evaluation & hyperparameter tuning</li>
              <li>• GenAI application development</li>
              <li>• A/B testing & model monitoring</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">🔥 Hottest Market — Very Low Competition</h2>
          <p className="text-slate-600 dark:text-slate-300">AI/ML is the fastest growing field with very few job support providers. If you're an AI/ML engineer in a new role, we're one of the few services that can actually help you with cutting-edge tasks like LLM integration, RAG pipelines, and MLOps.</p>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default AIMLJobSupportPage;
