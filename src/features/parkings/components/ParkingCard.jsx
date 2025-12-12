import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

export const ParkingCard = ({ parking }) => {
  return (
    <Link
      to={`/parkings/${parking.id}`}
      className="group block bg-bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-border"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={parking.image}
          alt={parking.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-bg-surface/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center shadow-sm">
          <Star className="w-4 h-4 text-(--color-primary) fill-(--color-primary) mr-1" />
          <span className="text-xs font-bold text-text-primary">
            {parking.rating}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-text-primary text-lg truncate">
          {parking.title}
        </h3>

        <div className="flex items-center text-text-secondary text-sm mt-1 mb-3">
          <MapPin className="w-4 h-4 mr-1 shrink-0" />
          <span className="truncate">{parking.address}</span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
          <div>
            <span className="text-text-secondary text-xs uppercase font-semibold">
              Price
            </span>
            <p className="font-bold text-text-primary text-lg">
              ${parking.pricePerHour}{" "}
              <span className="text-sm text-text-secondary font-normal">
                / hour
              </span>
            </p>
          </div>
          <div className="text-right">
            <span className="bg-bg-muted text-text-primary text-xs px-2 py-1 rounded font-medium">
              {parking.totalSpaces} spots
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
