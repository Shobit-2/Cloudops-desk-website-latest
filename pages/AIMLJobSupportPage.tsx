import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

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
        title="AI/ML Job Support India | TensorFlow & LangChain"
        description="Real-time AI/ML job support for engineers. Get help with ML models, MLOps, LLMs, Python, TensorFlow, PyTorch & LangChain from senior experts."
        canonical="/ai-ml-job-support"
        keywords="ai engineer job support, machine learning job support india, mlops job support, llm engineer support, ai ml job support india, generative ai support, tensorflow help india"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          AI/ML Engineer Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Need help with ML model training, LLM integration, MLOps pipelines, or GenAI applications? Our senior AI/ML engineers provide real-time support for the hottest domain in tech.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Technologies We Support</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Common Tasks We Help With</h2>
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
          <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3">🔥 Hottest Market — Very Low Competition</h2>
          <p className="text-slate-600 dark:text-slate-300">AI/ML is the fastest growing field with very few job support providers. If you're an AI/ML engineer in a new role, we're one of the few services that can actually help you with cutting-edge tasks like LLM integration, RAG pipelines, and MLOps.</p>
        </div>

        {/* AI/ML Industry Context */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">AI/ML Engineering: The Fastest Growing Tech Role</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            The explosion of generative AI, large language models, and enterprise AI adoption has created unprecedented demand for ML engineers who can build production AI systems. Companies are racing to integrate LLMs, build RAG pipelines, deploy ML models at scale, and implement responsible AI practices. This has created a massive skills gap, with many professionals entering AI/ML roles without prior production experience.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our AI/ML job support bridges this gap by providing expert guidance on real-world AI engineering tasks — from fine-tuning foundation models and building vector databases to implementing MLOps pipelines and deploying models on cloud platforms. Whether you are working with TensorFlow, PyTorch, LangChain, Hugging Face, or custom ML frameworks, our experts have you covered.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'What AI/ML technologies do you support?', answer: 'We provide support for TensorFlow, PyTorch, scikit-learn, Hugging Face Transformers, LangChain, LlamaIndex, OpenAI API, vector databases (Pinecone, Weaviate, ChromaDB), MLflow, Kubeflow, SageMaker, Vertex AI, and Azure ML. We cover both traditional ML and modern generative AI workflows.' },
          { question: 'Can you help with LLM integration and RAG pipelines?', answer: 'Yes, this is one of our most requested services. We help with building RAG (Retrieval Augmented Generation) pipelines, fine-tuning LLMs, prompt engineering, embedding generation, vector store setup, and integrating LLMs into production applications using LangChain, LlamaIndex, or custom frameworks.' },
          { question: 'Do you support MLOps and model deployment?', answer: 'Absolutely. We cover the full MLOps lifecycle including model training pipelines, experiment tracking (MLflow, W&B), model serving (TorchServe, TF Serving, FastAPI), containerization, CI/CD for ML, monitoring for data drift, and deployment on AWS SageMaker, GCP Vertex AI, and Azure ML.' },
          { question: 'Is support available for data science tasks like EDA and feature engineering?', answer: 'Yes, we help with exploratory data analysis, feature engineering, data preprocessing, statistical analysis, A/B testing, and building ML pipelines from data to prediction. Our experts use pandas, NumPy, Spark ML, and cloud-native data tools.' },
          { question: 'Can I get help with deep learning and computer vision projects?', answer: 'Yes, we support deep learning projects including CNNs for image classification, object detection (YOLO, Faster R-CNN), NLP models, transformer architectures, GANs, and reinforcement learning. Our experts have published research and shipped production DL systems.' },
          { question: 'How is AI/ML job support different from online courses?', answer: 'Online courses teach theory with toy datasets. Our support helps you with your actual work tasks — real data, production constraints, and company-specific requirements. You learn by solving real problems with an expert guiding you, which builds genuine competence much faster than passive learning.' },
        ]} />

        {/* Related Services — Internal Linking */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/data-engineer-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Data Engineer Support</Link>
            <Link to="/full-stack-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Full Stack Support</Link>
            <Link to="/cloud-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Cloud Support</Link>
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview</Link>
            <Link to="/corporate-training" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Corporate Training</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default AIMLJobSupportPage;
