import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import MainContent from "./components/MainContent";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Welcome to products</h1>
        <MainContent />
      </QueryClientProvider>
    </>
  );
}

export default App;
