import { useLanguageContext } from '../contexts/LanguageContext';

// Re-export the context hook under the existing name so all components
// that already call useLanguage() continue to work without modification.
export const useLanguage = useLanguageContext;