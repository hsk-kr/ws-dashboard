import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ToastContextType {
  showToast: (toast: Toast) => void;
}

type Toast = {
  type: 'default' | 'error';
  message: string;
  duration?: number;
};

export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType
);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<Toast>();
  const hideMessageTm = useRef<number>();

  const showToast = useCallback<ToastContextType['showToast']>((toast) => {
    setToast(toast);
  }, []);

  const value = { showToast };

  useEffect(() => {
    if (!toast) return;

    clearTimeout(hideMessageTm.current);

    hideMessageTm.current = setTimeout(() => {
      setToast(undefined);
    }, toast.duration ?? 1000);
  }, [toast]);

  const additionalStyle =
    toast?.type === 'default'
      ? 'bg-white text-black border-slate-700'
      : 'bg-red-500 text-white border-red-500';

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast && (
        <div
          className={`font-bold fixed top-5 left-1/2 translate-x-[-50%] border-2 rounded-2xl px-4 py-2 ${additionalStyle}`}
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
};
