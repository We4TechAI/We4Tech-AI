import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import process from 'process';

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Fetch environment variables correctly
  // Fetch environment variables correctly
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS public key is missing.");
    }
  }, [publicKey]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;

    try {
      if (!serviceId || !templateId) {
        throw new Error("EmailJS Service ID or Template ID is missing.");
      }

      await emailjs.send(serviceId, templateId, {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      });

      toast({
        title: 'Message Sent!',
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary mr-4" aria-hidden="true" />,
      title: "Email",
      value: "we4tech10@gmail.com",
      link: "mailto:we4tech10@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary mr-4" aria-hidden="true" />,
      title: "Phone",
      value: "+91 8921385707",
      link: "tel:+91 8921385707"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary mr-4" aria-hidden="true" />,
      title: "Address",
      value: "Trivandrum, Kerala, India",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334">
        <div className="min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-t from-background/80 to-transparent">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in">
              Get in touch with our team of AI experts
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gradient">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions about our AI solutions? We'd love to hear from you. Send us a message
              and we'll respond within 24 hours.
            </p>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 rounded-xl border border-muted/20 hover:border-primary/30 transition-colors duration-300"
                >
                  {method.icon}
                  <div>
                    <h3 className="font-semibold">{method.title}</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-muted/20 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px]"
              />
              <Button type="submit" className="w-full hover:scale-105 transition-transform" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative isolate py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Stay Connected
          </h2>
          <p className="text-xl text-muted-foreground">
            Follow us for the latest updates in AI technology
          </p>
          <Button size="lg" className="text-lg hover:scale-105 transition-transform" onClick={() => navigate('/blog')}>
            Explore Our Blog
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .text-gradient {
          background: linear-gradient(45deg, #4F46E5 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default Contact;
