import { useState, useCallback } from 'react';

function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback((text) => {
    const copyTextToClipboard = (text) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand('copy');

      document.body.removeChild(textarea);
    };

    try {
      copyTextToClipboard(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset the copied state after 1.5 seconds
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  }, []);

  return { copied, copyToClipboard };
}

export default useClipboard;
