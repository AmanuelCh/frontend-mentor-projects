import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocalStorage } from './hooks/useLocalStorage';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Input from './components/Input';
import CTA from './components/CTA';
import Footer from './components/Footer';

const tempLinks = [
  {
    id: 1,
    originalLink: 'htts://www.linkedin.com/company/non-of-your-business',
    shortenedLink: 'htts://rel.ink/k342wdfs',
    isCopied: false,
  },
  {
    id: 2,
    originalLink: 'htts://www.linkedin.com/company/non-of-your-business',
    shortenedLink: 'htts://rel.ink/k342wdfs',
    isCopied: true,
  },
];

const App = () => {
  const [links, setLinks] = useLocalStorage([], 'links');
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const notifyError = (message) => {
    toast.error(message, {
      autoClose: 2000,
    });
  };

  const notifyInfo = () => toast.info('Make sure to insert a valid link');

  const shortenUrl = async () => {
    try {
      setIsLoading(true);
      setIsDuplicate(false);

      // check if link already exists
      const checkDuplicateLink = () => {
        links.map((lnk) => {
          if (lnk.originalLink === link) {
            setIsDuplicate(true);
            notifyError('Link already exists');
            setLink('');
          }
        });

        return;
      };

      checkDuplicateLink();
      if (isDuplicate) return;

      const response = await fetch(
        `https://api.tinyurl.com/create?api_token=${
          import.meta.env.VITE_TINY_URL
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: `${link}`,
            domain: 'tinyurl.com',
            description: 'string',
          }),
        }
      );

      if (!response.ok) {
        notifyError('Invalid Input!');
        setTimeout(() => {
          notifyInfo();
        }, 2500);
        return;
      }

      const data = await response.json();

      const { tiny_url: shortenedLink, url: originalLink } = data.data;

      if (shortenedLink) {
        const newAddedLink = {
          id: Date.now(),
          originalLink,
          shortenedLink,
          isCopied: false,
        };

        setLinks((links) => [...links, newAddedLink]);
        setLink('');
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Error occurred:', error);
    } finally {
      setIsDuplicate(false);
    }
  };

  return (
    <div>
      <Navbar />

      <Hero />

      <Section>
        <Input
          link={link}
          setLink={setLink}
          onShortenURL={shortenUrl}
        />
        <Statistics
          links={links}
          setLinks={setLinks}
        />
      </Section>

      <CTA />

      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
