'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const toolIcons = [
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-600 fill-current">
        <path d="M11.96 0c-2.317 0-4.148.16-5.492.482-2.016.482-2.88 1.488-2.88 3.504V6.4h2.4v-.96c0-1.077.583-1.6 1.704-1.6H12c1.121 0 1.704.523 1.704 1.6V8.32c0 1.076-.583 1.6-1.704 1.6H7.836c-2.016 0-3.324.787-3.836 2.378-.512 1.59-.512 2.915 0 4.505.41 1.272 1.344 1.957 2.876 2.115v-2.485c0-1.077.583-1.6 1.704-1.6H12c1.121 0 1.704.523 1.704 1.6v2.88c0 1.077-.583 1.6-1.704 1.6H9.12c-1.121 0-1.704-.523-1.704-1.6v-.96H5.016v.96c0 2.016.864 3.02 2.88 3.504 1.344.322 3.175.482 5.492.482s4.148-.16 5.492-.482c2.016-.484 2.88-1.488 2.88-3.504v-2.4h-2.4v.96c0 1.077-.583 1.6-1.704 1.6H12c-1.121 0-1.704-.523-1.704-1.6v-2.88c0-1.076.583-1.6 1.704-1.6h4.164c2.016 0 3.324-.787 3.836-2.378.512-1.59.512-2.915 0-4.505-.41-1.272-1.344-1.957-2.876-2.115V6.4c0-1.077-.583-1.6-1.704-1.6H12c-1.121 0-1.704-.523-1.704-1.6V2.24c0-2.016-.864-3.02-2.88-3.504C16.108.16 14.277 0 11.96 0zM8.88 2.4c.53 0 .96.43.96.96s-.43.96-.96.96-.96-.43-.96-.96.43-.96.96-.96zm6.24 16.8c.53 0 .96.43.96.96s-.43.96-.96.96-.96-.43-.96-.96.43-.96.96-.96z" />
      </svg>
    ),
  },
  {
    name: 'PyTorch',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-600 fill-current">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.1 16.643h-2.18l-1.89-3.774h-2.16v3.774H8.69v-9.286h4.38a2.76 2.76 0 0 1 2.76 2.76c0 1.25-.83 2.3-1.97 2.63l2.24 3.896zm-4.34-5.323h1.86a1.21 1.21 0 0 0 1.21-1.21 1.21 1.21 0 0 0-1.21-1.21h-1.86v2.42z" />
      </svg>
    ),
  },
  {
    name: 'GitHub Copilot',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-indigo-600 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'OpenAI ChatGPT',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-emerald-600 fill-current">
        <path d="M21.737 9.873a5.556 5.556 0 0 0-.254-2.883 5.632 5.632 0 0 0-1.954-2.457 5.568 5.568 0 0 0-3.045-1.047 5.568 5.568 0 0 0-3.045-1.047A5.586 5.586 0 0 0 12.4 3.238a5.56 5.56 0 0 0-2.58-1 .18 5.57 5.57 0 0 0-2.885.253 5.628 5.628 0 0 0-2.457 1.954A5.563 5.563 0 0 0 3.43 7.492a5.586 5.586 0 0 0 .937 4.092A5.557 5.557 0 0 0 2.24 14.18a5.565 5.565 0 0 0 .253 2.884 5.633 5.633 0 0 0 1.954 2.458 5.566 5.566 0 0 0 3.045 1.047 5.586 5.586 0 0 0 4.092-.936 5.558 5.558 0 0 0 2.57 2.183 5.567 5.567 0 0 0 2.886-.253 5.633 5.633 0 0 0 2.457-1.954 5.566 5.566 0 0 0 1.047-3.046 5.585 5.585 0 0 0-.936-4.092 5.56 5.56 0 0 0 2.183-2.569zm-9.737 6.463a1.984 1.984 0 0 1-1.983-1.983c0-1.095.888-1.983 1.983-1.983s1.983.888 1.983 1.983c0 1.095-.888 1.983-1.983 1.983zm0-5.836a1.984 1.984 0 0 1-1.983-1.983c0-1.095.888-1.983 1.983-1.983s1.983.888 1.983 1.983c0 1.095-.888 1.983-1.983 1.983z" />
      </svg>
    ),
  },
];

const clientLogos = [
  { name: 'NextRoll', svg: (
    <span className="flex items-center space-x-1 font-bold text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-lg select-none">
      <span>NextRoll</span>
      <span className="text-orange-500 text-sm font-black">▶</span>
    </span>
  )},
  { name: 'A-LIGN', svg: (
    <span className="flex items-center space-x-1 font-bold text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-lg tracking-wider select-none">
      <span>A-LIGN</span>
      <span className="text-orange-500 text-sm font-black">▶</span>
    </span>
  )},
  { name: 'KEYSTONE', svg: (
    <span className="flex items-center space-x-1 font-extrabold text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-tighter select-none">
      <span>KEYSTONE</span>
      <span className="text-orange-500 text-xs font-black">▶</span>
    </span>
  )},
  { name: 'Google', svg: (
    <span className="font-semibold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer text-2xl tracking-tight select-none">Google</span>
  )},
  { name: 'Pinterest', svg: (
    <span className="font-extrabold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer text-xl tracking-tight italic select-none">Pinterest</span>
  )},
  { name: 'Microsoft', svg: (
    <span className="font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer text-xl tracking-tight select-none">Microsoft</span>
  )},
];

const accordions = [
  {
    title: 'Agentic AI Systems and Custom LLM Projects',
    p1: 'We build advanced agentic AI systems and custom LLM applications that move beyond simple chatbots, enabling dynamic interactions and intelligent task execution.',
    p2: 'Many companies struggle to move from simple LLM integrations to robust, production-grade agentic systems. We help clients overcome these challenges. Our engineers design reliable architectures with memory, tool use, and safety layers, ensuring production-ready solutions that align with your business goals and technical requirements.',
  },
  {
    title: 'Machine Learning Models',
    p1: 'We create machine learning models tailored to your data and business goals. Our AI development services cover everything from data collection and feature engineering to model training and deployment.',
    p2: 'Many clients come to us after struggling with brittle models or hard-to-maintain code. We build pipelines that adapt to shifting data inputs and evolving business needs. Our approach includes clear modeling standards, built-in observability, and engineering patterns designed for long-term viability, not just MVP delivery.',
  },
  {
    title: 'AI-Powered Predictive Analytics',
    p1: 'Leverage historical data to forecast future trends, user behaviors, and operational bottlenecks. Our predictive models allow organizations to shift from reactive decision-making to proactive, data-driven planning.',
    p2: 'We integrate state-of-the-art time series forecasting, regression analysis, and risk modeling engines into your existing software. This enables automatic anomaly detection, customer churn forecasting, and financial risk mitigation, all in real time with high reliability.',
  },
  {
    title: 'Natural Language Processing (NLP)',
    p1: 'Process, interpret, and generate human language at scale. We develop advanced NLP solutions to analyze sentiment, automate document understanding, and facilitate seamless voice or text communication.',
    p2: 'Whether you need to parse legal contracts, extract entity data from unstructured financial documents, or build multi-lingual conversational systems, our NLP pipelines leverage modern Transformer models to deliver unmatched semantic accuracy.',
  },
  {
    title: 'Custom AI for Business Process Automation',
    p1: 'We build AI solutions that streamline business operations, ranging from ticketing and predictive customer support to claims processing and fraud detection. We integrate multiple AI tools, robotic process automation (RPA), and streamline backend workflows to increase operational efficiency and reduce manual effort.',
    p2: "Practical AI solutions don't start with technology. They start with well-mapped workflows, thoughtful exceptions, and effective handoffs. We integrate with your operations and engineering teams to identify what can and should be automated, structure input/output pipelines, and create fallback logic. Our AI solutions are designed to be adaptable and evolve with shifting business needs.",
  },
  {
    title: 'Generative AI Product Development',
    p1: 'We integrate generative AI features into enterprise platforms to enable personalized marketing, automated content creation, and virtual assistants. Our enterprise AI solutions rely on secure prompt engineering, output validation, and granular LLM tuning to align outputs with your brand voice and compliance requirements.',
    p2: 'Generative AI introduces unique challenges and risks. We help businesses navigate them by enforcing data boundaries, configuring content filters to prevent off-brand or non-compliant outputs, and integrating human-in-the-loop (HITL) controls.',
  },
  {
    title: 'Data Analysis and Business Intelligence Platforms',
    p1: 'Turn massive raw data stores into dynamic, actionable dashboards and automated insights. We build custom data intelligence pipelines that process, clean, and enrich your corporate data stores automatically.',
    p2: 'Our platforms integrate AI-driven summarization and semantic query interfaces, allowing your team to query databases using natural language. We build secure data lakes and high-performance ingestion layers that scale seamlessly to match high-volume transactions.',
  },
  {
    title: 'AI-Powered Inventory and Supply Chain Optimization',
    p1: 'Minimize carrying costs and eliminate stockouts with intelligent demand planning and automated supply chain routing. We build custom algorithms that model market shifts and seasonal trends.',
    p2: 'Our AI systems analyze transport logs, real-time demand signals, and vendor lead times to recommend optimal reorder intervals and automated routing, driving down costs and enhancing operational agility.',
  },
];

const caseStudies = [
  {
    category: 'LEGAL',
    title: 'Developed AI Tool to Summarize 10,000 Legal Transcripts Daily',
    description: 'Our client needed to automate the time-consuming task of summarizing lengthy legal transcripts. We built an AI tool capable of summarizing 200–300 pages in under 4 seconds. The tool anonymizes sensitive data, returns editable Word and PDF files, and includes hyperlinks to retain source visibility. It automatically segments text and feeds it into an NLP engine, significantly accelerating turnaround time.',
    tech: ['OpenAI', 'Azure', 'C#', '.NET', 'SQL', 'React Native'],
    image: '/case_legal.png',
  },
  {
    category: 'AUDIO AND VIDEO MEDIA',
    title: 'Automated GenAI Video Integration for HubSpot Campaigns',
    description: 'Our client uses AI-driven video technology to create personalized, localized videos at scale. They needed to connect their platform to HubSpot to automate video delivery in email campaigns. We developed a custom solution using Workflow Extensions and CRM Cards, enabling asynchronous video generation linked to individual contacts. A webhook system stores each video URL in a HubSpot field, streamlining distribution and eliminating manual steps.',
    tech: ['Generative AI', 'AI-Driven Video', 'HubSpot', 'Webhooks'],
    image: '/case_media.png',
  },
  {
    category: 'TECHNOLOGY',
    title: 'Built an IDE That Simplifies AI Pipeline Prototyping',
    description: 'This client is creating a development environment for building and testing AI pipelines with LLMs. We provided full-stack engineering support to improve performance, scale, and user experience. Our team worked on intuitive front-end components and scalable back-end services designed to handle experimentation and monitoring. These improvements helped simplify LLM pipeline prototyping and speed up iteration cycles.',
    tech: ['LLMs', 'Node.js', 'React', 'IDE Prototyping'],
    image: '/case_technology.png',
  },
  {
    category: 'MANUFACTURING',
    title: 'Improved Robotic Arm Automation and Object Segmentation with AI',
    description: 'Our client builds humanoid robots powered by AI for navigation, manipulation, and voice interaction. They needed to advance their robotic arm automation and improve how systems interpret and replicate human actions. We developed ROS2 simulations for precision control, integrated CAN bus protocols for robotic towing, and improved video-based segmentation to support pose detection and tool tracking. These upgrades made it easier for robots to learn from human demonstrations and operate across different systems.',
    tech: ['AI', 'Computer Vision', 'NLP', 'ML', 'ROS2'],
    image: '/case_manufacturing.png',
  },
  {
    category: 'SOFTWARE DEVELOPMENT',
    title: 'Reduced GCP Costs by 80% with Smarter AI Processing',
    description: 'This logistics company uses AI/ML to streamline catalog classification and manage cloud spending. We built a hierarchical classification model using Amazon labels and Gemini, cutting costs from $30,000 to $300 per million classifications and reducing latency from 40 seconds to 1.5 seconds. Our team improved tax classification accuracy to 95% with RAGFusion and semantic chunking. We also migrated models to GCP and automated MLOps workflows, reducing overall cloud costs by 80%.',
    tech: ['GenAI', 'LLMs', 'RAG', 'OpenAI', 'GCP', 'MLOps'],
    image: '/case_logistics.png',
  },
  {
    category: 'SOFTWARE DEVELOPMENT',
    title: 'Enabled AI-Powered Water Pipeline Maintenance with Predictive Diagnostics',
    description: 'Our client needed to automate predictive diagnostics across municipal water pipelines. We built an AI-driven predictive maintenance suite that uses real-time flow data, acoustic sensor inputs, and historical stress records to predict pipeline leaks before they occur, triggering automated field service dispatches and cutting maintenance response times by 75%.',
    tech: ['Predictive Diagnostics', 'Sensors', 'Real-Time Ingestion', 'Field Automation'],
    image: '/case_pipeline.png',
  },
];

const toolCategories = [
  {
    title: 'Deep Learning Frameworks',
    p: 'We use high-performance frameworks to build, train, and optimize deep learning models across different use cases. Our engineers follow proven internal playbooks for model architecture, training workflows, and performance optimization.',
    tags: ['PyTorch', 'TensorFlow', 'Keras'],
  },
  {
    title: 'Machine Learning Libraries',
    p: 'Our engineers leverage robust machine learning libraries for predictive modeling, classification, and regression. We follow well-documented internal processes to standardize feature engineering, model evaluation, and hyperparameter tuning. We select the right tools based on performance, accuracy, and interpretability requirements.',
    tags: ['Scikit-Learn', 'XGBoost', 'LightGBM'],
  },
  {
    title: 'Data Engineering Tools',
    p: 'We design and implement high-throughput data pipelines to support real-time decision-making. Our data engineers build workflows that transform raw inputs into feature-rich datasets using scalable orchestration and ETL tools designed for integration with existing systems.',
    tags: ['Apache Airflow/Kafka/Spark', 'Snowflake', 'BigQuery'],
  },
  {
    title: 'Data Manipulation and Analysis Tools',
    p: 'Efficient data preparation and transformation are essential for reliable model outputs. Our teams apply proven, structured workflows to streamline data validation, anomaly detection, and exploratory analysis. We use industry-standard data tools built for scale, speed, and readability.',
    tags: ['Pandas', 'NumPy', 'Dask'],
  },
  {
    title: 'Cloud-Based Machine Learning Platforms',
    p: 'We leverage enterprise-grade cloud ML platforms to scale training and streamline model deployment. Our team has deep experience configuring secure pipelines and optimizing cloud resource consumption to manage costs effectively.',
    tags: ['Google Vertex AI', 'AWS SageMaker', 'Azure ML'],
  },
  {
    title: 'Integrated Development Environments',
    p: 'Our development teams use high-productivity environments and interactive tools to prototype models and collaborate in real-time. We configure robust developer stacks to maintain consistency across local and cloud environments.',
    tags: ['Jupyter Notebooks', 'VS Code', 'Google Colab'],
  },
  {
    title: 'AI-Assisted Coding Tools',
    p: 'We integrate leading AI assistants into our software engineering lifecycle to accelerate code generation, automate testing, and streamline documentation. Our developers follow strict guidelines to ensure output security and compliance.',
    tags: ['GitHub Copilot', 'ChatGPT', 'Claude'],
  },
  {
    title: 'Model Deployment and Serving',
    p: 'We package models into highly scalable containers and expose them via performant microservices. Our engineers ensure low-latency response times and configure high-concurrency routing to handle enterprise search and request loads.',
    tags: ['Docker', 'Kubernetes', 'FastAPI', 'Triton'],
  },
  {
    title: 'Model Monitoring and Lifecycle Management',
    p: 'Long-term model viability requires constant oversight and tracking. We integrate comprehensive MLOps platforms to monitor model performance, detect feature drift, and manage versioned artifacts automatically.',
    tags: ['MLflow', 'Weights & Biases', 'Prometheus', 'Grafana'],
  },
];

export default function AIDevelopmentPage() {
  const [formData, setFormData] = useState({ name: '', email: '', needs: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [progress, setProgress] = useState(0);

  // Progressive Show More state
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Tools tabs state
  const [activeToolTab, setActiveToolTab] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
    }
  };

  const handleShowMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setIsLoadingMore(false);
      setShowAllCaseStudies(true);
    }, 600);
  };

  const scrollToContact = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Autoplay story indicator line effect
  useEffect(() => {
    if (activeAccordion === -1) return;

    setProgress(0);
    const duration = 6500; // 6.5 seconds for complete drawing
    const intervalTime = 30; // ~33 FPS updates
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min((currentStep / totalSteps) * 100, 100);
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
        // Progress complete: Transition to next section
        setActiveAccordion((prev) => (prev + 1) % accordions.length);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [activeAccordion]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-gray-900 font-sans selection:bg-[#0078d4] selection:text-white">
      
      {/* Breadcrumb & Hero Combined Section */}
      <section className="pt-28 pb-16 md:py-20 border-b border-gray-200/60 bg-gradient-to-b from-[#f3f4f6] to-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-[13px] font-semibold text-gray-500 mb-8 select-none">
            <Link href="/" className="hover:text-[#0078d4] transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">Technologies</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800">AI</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                AI Development Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Work with <span className="text-orange-600">AI</span> experts trusted by the world&apos;s top tech teams.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                As a leading AI development company, we deliver AI-powered solutions that go beyond experimentation. Our AI engineers help organizations integrate agentic AI, custom large language models (LLMs), and generative AI into their products.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10 border-b border-gray-200/70 pb-10">
                {/* Clutch Rating Box */}
                <div className="flex items-center space-x-3 bg-white p-3 px-4 rounded-xl border border-gray-150 shadow-sm select-none">
                  <span className="text-gray-900 font-black text-lg">Clutch</span>
                  <div className="border-l border-gray-200 pl-3 flex flex-col">
                    <span className="text-gray-950 font-black text-[15px] leading-tight">4.9/5</span>
                    <div className="flex items-center space-x-0.5 my-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-orange-500 text-xs">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">60 client reviews</span>
                  </div>
                </div>

                {/* AI Blue Badge */}
                <div className="bg-blue-50 text-[#0078d4] font-black text-[12.5px] tracking-wide uppercase px-5 py-3.5 rounded-xl border border-blue-100 flex items-center space-x-2 select-none shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0078d4] animate-ping"></span>
                  <span>Artificial Intelligence</span>
                </div>
              </div>

              {/* Coding tools showcase */}
              <div>
                <span className="text-[10.5px] font-black text-gray-400 uppercase tracking-widest block mb-4 select-none">
                  AI Coding Tools We Use
                </span>
                <div className="flex items-center gap-6">
                  {toolIcons.map((tool) => (
                    <div
                      key={tool.name}
                      title={tool.name}
                      className="w-13 h-13 bg-white border border-gray-150 shadow-sm rounded-xl flex items-center justify-center hover:scale-105 hover:border-gray-300 transition-all duration-200 cursor-pointer"
                    >
                      {tool.svg}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form Box */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/30">
                <h3 className="text-[20px] font-extrabold text-gray-950 mb-6">
                  Get expert help for your AI project.
                </h3>
                
                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl text-center py-10">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                      ✓
                    </div>
                    <h4 className="text-emerald-950 font-black text-lg mb-2">Thank you!</h4>
                    <p className="text-sm text-emerald-800 font-medium">
                      Our elite AI development specialists will contact you at <strong>{formData.email}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-[13px] font-bold text-gray-600 block mb-2" htmlFor="name">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="text-[13px] font-bold text-gray-600 block mb-2" htmlFor="email">
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="text-[13px] font-bold text-gray-600 block mb-2" htmlFor="needs">
                        What can we do for you?
                      </label>
                      <textarea
                        id="needs"
                        required
                        rows={4}
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                        placeholder="Tell us about your needs."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-md shadow-orange-500/10 hover:bg-orange-700 hover:shadow-orange-500/20 active:scale-[0.98] transition-all duration-200 select-none cursor-pointer mt-2"
                    >
                      Jump-start Your Project
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trusted Logos Carousel Bar */}
      <section className="bg-white border-b border-gray-200/50 py-10 overflow-hidden select-none">
        <div className="container mx-auto px-6 max-w-7xl">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block text-center mb-6">
            TRUSTED BY CTOS AT 1500+ COMPANIES:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-16 opacity-75">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200">
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom AI Development Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side info & Custom Image */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                Custom AI Development Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight mb-5 tracking-tight">
                You&apos;ve probably used products built by our AI engineers.
              </h2>
              <p className="text-sm.5 leading-relaxed text-gray-500 font-medium mb-8">
                We&apos;ve developed custom AI solutions across industries. Whether you&apos;re building AI-powered platforms to enhance operational efficiency or using AI to supercharge data analysis, we can help.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 shadow-gray-200/40 select-none">
                <Image
                  src="/ai-developers.png"
                  alt="Elite software engineers developing AI solutions"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[320px] filter saturate-105 hover:scale-101 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right side interactive accordions */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {accordions.map((item, idx) => {
                const isActive = activeAccordion === idx;
                return (
                  <div
                    key={item.title}
                    className="relative pl-6 border-b border-gray-150/70 pb-5 transition-all duration-300"
                  >
                    
                    {/* Absolute Left Indicator Background Track */}
                    <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-gray-200/40 rounded-full" />

                    {/* Active Progressive Indicator Line drawing from top to bottom */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-3 bottom-3 w-[3px] bg-emerald-500 rounded-full origin-top transition-transform duration-75 ease-linear"
                        style={{
                          transform: `scaleY(${progress / 100})`,
                        }}
                      />
                    )}

                    <button
                      onClick={() => setActiveAccordion(idx)}
                      className="w-full flex items-center text-left py-1 cursor-pointer select-none group"
                    >
                      <span
                        className={`text-[17px] font-extrabold transition-colors duration-200 ${
                          isActive ? 'text-gray-950' : 'text-gray-500 hover:text-gray-800'
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                    
                    {/* Collapsible Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-[14.5px] leading-relaxed text-gray-800 font-semibold mb-3">
                        {item.p1}
                      </p>
                      <p className="text-[14px] leading-relaxed text-gray-500 font-medium">
                        {item.p2}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* AI Case Studies Section */}
      <section className="py-24 border-t border-gray-200/50 bg-gradient-to-b from-gray-50 via-white to-gray-50/30">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="mb-14 max-w-3xl">
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
              AI Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight mb-5 tracking-tight">
              Dozens of AI development projects delivered.
            </h2>
            <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium">
              We&apos;ve provided AI development services across industries, ranging from predictive analytics enterprise platforms to consumer-oriented mobile apps with AI features. Our clients consider us a leading AI development company because we repeatedly deliver scalable, robust solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .slice(0, showAllCaseStudies ? caseStudies.length : 3)
              .map((cs) => (
                <div
                  key={cs.title}
                  className="group relative h-[420px] rounded-2xl overflow-hidden border border-gray-200/60 shadow-md hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 bg-gray-950 flex flex-col justify-end p-8"
                >
                  
                  {/* Background Image */}
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-45 group-hover:opacity-15 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Dark Radial Overlay for premium visual contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent pointer-events-none z-0" />

                  {/* Subtle Tech Grid/Wave Pattern Overlay for Premium Aesthetic */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0"></div>
                  
                  {/* Card category badge */}
                  <span className="absolute left-8 top-8 px-3.5 py-1.5 bg-white/10 border border-white/10 text-white backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest select-none z-10">
                    {cs.category}
                  </span>

                  {/* Non-hover layout: Displays Title */}
                  <div className="transform translate-y-0 group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-300 ease-out flex flex-col justify-end h-full relative z-10 pointer-events-none">
                    <h3 className="text-[20px] font-extrabold text-white leading-tight mb-2 tracking-tight">
                      {cs.title}
                    </h3>
                  </div>

                  {/* Hover layout: Fades and slides in the description details */}
                  <div className="absolute inset-x-8 top-[85px] bottom-24 opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto overflow-y-auto pr-1 z-10">
                    {/* Title repeated inside hover card for continuous context */}
                    <h4 className="text-[17px] font-extrabold text-white leading-tight mb-3 tracking-tight">
                      {cs.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-gray-200 font-medium">
                      {cs.description}
                    </p>
                  </div>

                  {/* Tech stack pills at the bottom */}
                  <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75 flex flex-wrap gap-1.5 z-10">
                    {cs.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/10 border border-white/5 rounded-md text-[10px] font-bold text-gray-150 uppercase select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
          </div>

          {/* Show More Actions */}
          {!showAllCaseStudies && (
            <div className="mt-14 flex justify-center">
              <button
                onClick={handleShowMore}
                disabled={isLoadingMore}
                className="flex items-center space-x-2 text-[14px] font-black text-gray-900 hover:text-[#0078d4] disabled:text-gray-400 transition-colors select-none cursor-pointer border border-gray-300 bg-white hover:bg-gray-50 px-8 py-3.5 rounded-xl shadow-sm hover:shadow active:scale-[0.98] transition-all duration-200"
              >
                {isLoadingMore ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-gray-900 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Loading Projects...</span>
                  </>
                ) : (
                  <span>Show More Case Studies +</span>
                )}
              </button>
            </div>
          )}

          {/* Horizontal Call-to-Action Banner */}
          <div className="mt-20 bg-blue-50/60 border border-blue-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-sm select-none">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl md:text-[22px] font-extrabold text-blue-950 mb-1 leading-tight tracking-tight">
                Looking for a team with this kind of track record?
              </h3>
              <p className="text-[14.5px] text-gray-500 font-semibold">
                Tell us more about your AI needs.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="py-3.5 px-7 bg-[#0078d4] text-white font-extrabold text-sm rounded-xl shadow-md shadow-blue-500/10 hover:bg-[#006cc0] active:scale-[0.97] transition-all duration-200 cursor-pointer"
            >
              Talk to an expert
            </button>
          </div>

        </div>
      </section>

      {/* Tools and Technologies Section */}
      <section className="py-24 bg-white border-t border-gray-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="mb-14 max-w-3xl">
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
              Tools for AI Development
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight mb-5 tracking-tight">
              Tools and technologies used in our AI development projects:
            </h2>
            <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium">
              We combine industry-standard frameworks with modern tooling and proven internal processes to accelerate delivery and maintain custom AI solutions over time. Our engineers bring deep familiarity with the tools required for AI model development and tuning, data engineering, and secure deployment.
            </p>
          </div>

          {/* Interactive Split Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Tabs List Column */}
            <div className="lg:col-span-5 flex flex-col space-y-2 justify-start">
              {toolCategories.map((cat, idx) => {
                const isActive = activeToolTab === idx;
                return (
                  <button
                    key={cat.title}
                    onClick={() => setActiveToolTab(idx)}
                    className={`w-full flex items-center text-left py-2.5 px-4.5 rounded-xl border text-[13.5px] font-extrabold cursor-pointer select-none transition-all duration-200 ${
                      isActive
                        ? 'border-orange-500 bg-[#fff8f6]/30 shadow-md shadow-orange-500/5 text-gray-950 ring-2 ring-orange-100'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/70 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {/* Orange bullet checkmark icon */}
                    <svg className="w-5 h-5 mr-3 flex-shrink-0 fill-none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" className="stroke-orange-200 fill-orange-50" strokeWidth="2" />
                      <path
                        d="M8 12l3 3 5-5"
                        className="stroke-orange-500"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Details Card Column */}
            <div className="lg:col-span-7 relative">
              <style dangerouslySetInnerHTML={{__html: `
                @media (min-width: 1024px) {
                  .sliding-details-card {
                    position: absolute !important;
                    left: 0 !important;
                    width: 100% !important;
                    top: calc(${activeToolTab} * 54px + 23px) !important;
                    transform: translateY(-50%) !important;
                  }
                }
              `}} />
              
              <div className="sliding-details-card border border-orange-400 rounded-xl bg-white shadow-sm p-6.5 transition-all duration-300 ease-in-out relative">
                
                {/* Visual horizontal connection line segment matching the image */}
                <div 
                  className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 h-[1px] bg-orange-400 pointer-events-none" 
                  style={{ width: '32px' }} 
                />

                <p className="text-[14.5px] leading-relaxed text-gray-800 font-medium mb-5">
                  {toolCategories[activeToolTab].p}
                </p>

                <div className="flex flex-wrap gap-2">
                  {toolCategories[activeToolTab].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-[#eef1f6] text-gray-800 font-semibold rounded-lg text-xs hover:bg-[#e2e7f0] transition-colors duration-200 select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Flexible Engagement Models Section */}
      <section className="pt-24 pb-64 bg-[#f3f4f6] border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-4 select-none">
              Flexible Engagement Models
            </span>
            <h2 className="text-4xl md:text-[42px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              Need extra AI expertise?<br />
              Plug us in where you need us most.
            </h2>
            <p className="text-[14.5px] text-gray-500 font-medium max-w-md mx-auto">
              We customize every engagement to fit your workflow, priorities, and delivery needs.
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — Co-Development */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-[320px] hover:border-gray-800 cursor-pointer">
              {/* Animated dark background overlay */}
              <div className="absolute inset-0 bg-gray-950 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-2xl z-0" />

              {/* Content */}
              <div className="relative z-10 p-7 flex flex-col flex-1">
                <span className="text-[9.5px] font-black text-teal-500 uppercase tracking-[0.18em] block mb-4 select-none transition-colors duration-300">
                  Co-Development
                </span>
                <h3 className="text-[20px] font-extrabold text-gray-950 group-hover:text-white leading-snug tracking-tight mb-4 max-w-[240px] transition-colors duration-300">
                  Want to embed elite software engineering experts into your active cycles?
                </h3>
                {/* Description — hidden by default, fades in on hover */}
                <p className="text-[13.5px] leading-relaxed text-gray-300 font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 delay-100">
                  Partner with senior, in-house KompasIT engineers who integrate directly into your daily workflows. They align with your time zone, join your standups, and collaborate seamlessly on complex features under your shared repository—delivering high-velocity code alongside your core team.
                </p>
              </div>

              {/* Illustration area — slides out on hover */}
              <div className="relative z-10 h-[130px] bg-gray-50/80 border-t border-gray-100 group-hover:h-0 group-hover:opacity-0 overflow-hidden flex items-end justify-between px-6 pb-5 transition-all duration-400 ease-out">
                <svg className="w-14 h-14 text-gray-200 opacity-80" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <svg className="w-10 h-10 text-gray-200 opacity-60 mb-2" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <button className="absolute bottom-5 right-6 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 — Dedicated Units */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-[320px] hover:border-gray-800 cursor-pointer">
              <div className="absolute inset-0 bg-gray-950 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-2xl z-0" />

              <div className="relative z-10 p-7 flex flex-col flex-1">
                <span className="text-[9.5px] font-black text-teal-500 uppercase tracking-[0.18em] block mb-4 select-none transition-colors duration-300">
                  Dedicated Units
                </span>
                <h3 className="text-[20px] font-extrabold text-gray-950 group-hover:text-white leading-snug tracking-tight mb-4 max-w-[240px] transition-colors duration-300">
                  Need fully independent engineering units to scale product streams?
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-300 font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 delay-100">
                  We build self-contained, cross-functional squads tailored to your system architecture. Operating with full in-house operational ownership, these pods deliver your product roadmaps on time while we manage internal engineering execution and delivery quality.
                </p>
              </div>

              <div className="relative z-10 h-[130px] bg-gray-50/80 border-t border-gray-100 group-hover:h-0 group-hover:opacity-0 overflow-hidden flex items-end justify-between px-6 pb-5 transition-all duration-400 ease-out">
                <svg className="w-14 h-14 text-gray-200 opacity-80" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="10" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="38" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M24 20v6M24 26l-9 5M24 26l9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="w-8 h-8 text-gray-200 opacity-50 mb-3" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="10" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="38" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M24 20v6M24 26l-9 5M24 26l9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <button className="absolute bottom-5 right-6 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3 — Product Engineering */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-[320px] hover:border-gray-800 cursor-pointer">
              <div className="absolute inset-0 bg-gray-950 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-2xl z-0" />

              <div className="relative z-10 p-7 flex flex-col flex-1">
                <span className="text-[9.5px] font-black text-teal-500 uppercase tracking-[0.18em] block mb-4 select-none transition-colors duration-300">
                  Product Engineering
                </span>
                <h3 className="text-[20px] font-extrabold text-gray-950 group-hover:text-white leading-snug tracking-tight mb-4 max-w-[240px] transition-colors duration-300">
                  Want to deliver a complete product lifecycle from discovery to launch?
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-300 font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 delay-100">
                  We take complete architectural and engineering responsibility for your digital product. Our in-house specialists manage everything from scoping and user experience design to robust coding, test automation, and secure deployment.
                </p>
              </div>

              <div className="relative z-10 h-[130px] bg-gray-50/80 border-t border-gray-100 group-hover:h-0 group-hover:opacity-0 overflow-hidden flex items-end justify-between px-6 pb-5 transition-all duration-400 ease-out">
                <svg className="w-14 h-14 text-gray-200 opacity-80" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M13.5 13.5l2.8 2.8M31.7 31.7l2.8 2.8M13.5 34.5l2.8-2.8M31.7 16.3l2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <svg className="w-8 h-8 text-gray-200 opacity-50 mb-3" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <button className="absolute bottom-5 right-6 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Kick Off Section — overlaps upward into the engagement cards */}
      <section className="relative -mt-48 pb-24 bg-[#f3f4f6]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xl shadow-gray-400/20 px-10 py-16">

            {/* Heading */}
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 text-center leading-tight tracking-tight mb-14">
              Kick off AI projects in 2–4 weeks.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* Left — Team Rep block */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                {/* Overlapping avatars */}
                <div className="flex -space-x-4 mb-5">
                  <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md bg-orange-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md bg-teal-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-[15px] font-extrabold text-gray-950 mb-2 leading-snug">
                  We have reps<br />across the US.
                </p>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                  Speak with a client engagement{' '}
                  <span className="text-orange-500 font-semibold">specialist</span>{' '}
                  near you.
                </p>
              </div>

              {/* Right — 3 Steps with dashed timeline */}
              <div className="lg:col-span-8 relative">
                {/* Dashed vertical connector */}
                <div className="absolute left-[22px] top-[44px] bottom-[44px] w-[1px] border-l-2 border-dashed border-gray-300 z-0" />

                <div className="flex flex-col space-y-10">

                  {/* Step 1 */}
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-11 h-11 rounded-full border-2 border-orange-400 bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.59A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16.5px] font-extrabold text-gray-950 mb-1 leading-snug">
                        Discuss solutions and decide team structure.
                      </h4>
                      <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed max-w-[480px]">
                        Tell us more about your needs. We'll discuss the best-fit solutions and team structure based on your success metrics, timeline, budget, and required skill sets.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-11 h-11 rounded-full border-2 border-orange-400 bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16.5px] font-extrabold text-gray-950 mb-1 leading-snug">
                        Onboard your team and get to work.
                      </h4>
                      <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed max-w-[480px]">
                        With project specifications finalized, we select your team. We're able to onboard developers and assemble dedicated teams in 2–4 weeks after signature.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-11 h-11 rounded-full border-2 border-orange-400 bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                        <polyline points="17 6 23 6 23 12"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16.5px] font-extrabold text-gray-950 mb-1 leading-snug">
                        We track performance on an ongoing basis.
                      </h4>
                      <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed max-w-[480px]">
                        We continually monitor our teams' work to make sure they're meeting your quantity and quality of work standards at all times.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="relative z-10 pt-2">
                    <button className="py-3.5 px-8 bg-orange-500 text-white font-extrabold text-[14px] rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 shadow-md shadow-orange-500/20 cursor-pointer select-none">
                      Schedule a Call with Our Team
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
