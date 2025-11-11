import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center space-y-6 px-6">
          <h1 className="text-8xl font-light text-foreground">404</h1>
          <p className="text-xl text-muted-foreground">Oops! Page not found</p>
          <Link to="/">
            <Button className="mt-4">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
