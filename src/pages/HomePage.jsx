import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl font-bold mb-4 text-text-primary">CoPark</h1>
      <p className="text-2xl mb-8 text-text-secondary">Parking made easy.</p>
      <div className="space-x-4">
        <Link to="/parkings">
          <Button type="submit" className="w-full">
            View parking
          </Button>
        </Link>
      </div>
    </div>
  );
};
