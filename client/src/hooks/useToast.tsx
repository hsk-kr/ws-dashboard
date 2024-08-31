import { useContext } from 'react';
import { ToastContext } from '../store/ToastContext';

export default function useToast() {
  return useContext(ToastContext);
}
