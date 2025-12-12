import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { useAuth } from "../../auth/context/AuthContext";
import { useBookings } from "../../bookings/hooks/useBookings";
import { Button } from "../../../components/ui/Button";

export const DashboardPage = () => {
  const { user } = useAuth();
  const { data: bookings, isLoading, isError } = useBookings();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Hello, {user?.name} 👋
          </h1>
          <p className="text-text-secondary">
            Here is the status of your bookings.
          </p>
        </div>
      </div>

      {isLoading && (
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-32 bg-bg-muted rounded-xl animate-pulse"
            />
          ))}
        </div>
      )}

      {!isLoading && !isError && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4 text-text-primary">
            Booking History
          </h2>

          {bookings?.length === 0 ? (
            <div className="text-center py-12 bg-bg-muted rounded-xl">
              <p className="text-text-secondary mb-4">
                You have no active bookings.
              </p>
              <Link to="/parkings">
                <Button variant="primary">Find a Parking Spot</Button>
              </Link>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                          booking.status === "CONFIRMED" || booking.status === "ACTIVE"
                            ? "bg-(--color-success-bg) text-(--color-success-text)"
                            : "bg-bg-muted text-text-secondary"
                        }`}
                      >
                        {booking.status === "CONFIRMED" || booking.status === "ACTIVE" ? "Active" : "Completed"}
                      </span>
                      <span className="text-xs text-text-secondary">
                        ID: {booking.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {booking.parkingTitle}
                    </h3>
                    <div className="flex items-center text-text-secondary text-sm mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(booking.startTime).toLocaleDateString()} -{" "}
                      {new Date(booking.startTime).toLocaleTimeString()}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-text-secondary">Total paid</p>
                    <p className="text-2xl font-bold text-text-primary">
                      ${booking.totalPrice || booking.price}
                    </p>
                    {(booking.status === "ACTIVE" || booking.status === "CONFIRMED") && (
                      <Button variant="outline" className="mt-2 text-sm h-8">
                        View QR Ticket
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
