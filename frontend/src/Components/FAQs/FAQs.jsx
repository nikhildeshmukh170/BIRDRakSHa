import React, { useState } from "react";

const faqs = [
  {
    question: "What is BirdRaksha?",
    answer:
      "BirdRaksha is an initiative to help identify and protect bird species by allowing users to upload images of birds, classify them, and view related information and conservation resources.",
  },
  {
    question: "How does the bird classification work?",
    answer:
      "Our classification system uses machine learning algorithms to analyze the uploaded bird image, identifying its species and providing detailed information from our dataset.",
  },
  {
    question: "What data does BirdRaksha provide?",
    answer:
      "BirdRaksha offers information on bird species, population trends, habitat distribution, and conservation status, as well as analytical graphs and predictions to support awareness and conservation efforts.",
  },
  {
    question: "How can I get involved with BirdRaksha?",
    answer:
      "You can support BirdRaksha by contributing bird images, spreading awareness about bird conservation, and following us on social media for updates and educational content.",
  },
  {
    question: "Is BirdRaksha free to use?",
    answer:
      "Yes, BirdRaksha is free to use. Our mission is to promote awareness about endangered bird species and provide resources for conservation without any cost.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="text-white py-12 px-6 md:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-4 cursor-pointer hover:bg-gradient-to-r from-green-800 to-gray-900 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="flex justify-between items-center text-lg font-semibold">
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </h3>
              {activeIndex === index && (
                <p className="mt-2 text-sm text-gray-200">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
