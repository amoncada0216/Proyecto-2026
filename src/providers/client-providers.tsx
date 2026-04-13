import { AppThemeProvider } from "@/providers/theme-provider";

type ClientProvidersProps = {
  children: React.ReactNode;
};

export function ClientProviders({ children }: ClientProvidersProps) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}
