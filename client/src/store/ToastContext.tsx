import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ToastContextType {
  showToast: (message: string) => void;
}

export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType
);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState('');
  const hideMessageTm = useRef<number>();

  const showToast = useCallback<ToastContextType['showToast']>((message) => {
    setMessage(message);
  }, []);

  const value = { showToast };

  useEffect(() => {
    clearTimeout(hideMessageTm.current);

    hideMessageTm.current = setTimeout(() => {
      setMessage('');
    }, 1000);
  }, [message]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {message.length > 0 && (
        <div className="font-bold fixed top-5 left-1/2 translate-x-[-50%] bg-white border-2 border-slate-700 rounded-2xl px-4 py-2">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
};
