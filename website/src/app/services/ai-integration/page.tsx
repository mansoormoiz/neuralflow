import Link from 'next/link';

export default function AIIntegrationService() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/#services" 
          className="inline-flex items-center text-gray-600 hover:text-primary transition-colors duration-300"
        >
          {/* Removed ArrowLeftIcon */}
          <span className="w-5 h-5 mr-2 inline-block align-middle">&#8592;</span>
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Removed motion.div, replaced with regular div */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Integration</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Our AI Integration Services</h2>
            <p>
              At Neural Flow, we help businesses leverage the power of artificial intelligence to gain 
              competitive advantages, improve efficiency, and drive innovation. Our AI solutions are 
              tailored to your specific needs and integrated seamlessly with your existing systems.
            </p>

            <h3>What We Offer</h3>
            <ul>
              <li>
                <strong>Machine Learning Solutions:</strong> Custom ML models for your specific use cases
              </li>
              <li>
                <strong>Predictive Analytics:</strong> Data-driven insights and forecasting
              </li>
              <li>
                <strong>Natural Language Processing:</strong> Text analysis and understanding
              </li>
              <li>
                <strong>Computer Vision:</strong> Image and video analysis
              </li>
            </ul>

            <h3>Benefits</h3>
            <ul>
              <li>Improved decision-making</li>
              <li>Enhanced customer experience</li>
              <li>Increased operational efficiency</li>
              <li>Better resource allocation</li>
              <li>Competitive advantage</li>
              <li>Future-proof solutions</li>
            </ul>

            <h3>Our Process</h3>
            <ol>
              <li>
                <strong>Assessment:</strong> Understanding your AI needs and opportunities
              </li>
              <li>
                <strong>Strategy:</strong> Developing an AI implementation roadmap
              </li>
              <li>
                <strong>Development:</strong> Building and training AI models
              </li>
              <li>
                <strong>Integration:</strong> Seamless deployment into your systems
              </li>
              <li>
                <strong>Optimization:</strong> Continuous improvement and updates
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you leverage artificial intelligence
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 