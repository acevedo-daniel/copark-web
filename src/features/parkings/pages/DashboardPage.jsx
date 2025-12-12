import { Calendar, Clock, MapPin, CreditCard } from "lucide-react";
import { useAuth } from "../../auth/context/AuthContext";
import { useBookings } from "../../bookings/hooks/useBookings";
import { Button } from "../../../components/ui/Button";

export const DashboardPage = () => {
  const { user, logout } = useAuth();
  const { data: bookings, isLoading, isError } = useBookings();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
            Hello, {user?.name} 👋
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Here is the status of your bookings.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={logout}
          className="text-[var(--color-text-danger)] border-[var(--color-danger-bg)] hover:bg-[var(--color-bg-danger)]"
        >
          Sign Out
        </Button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-32 bg-[var(--color-bg-muted)] rounded-xl animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Bookings List */}
      {!isLoading && !isError && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">Booking History</h2>

          {bookings?.length === 0 ? (
            <div className="text-center py-12 bg-[var(--color-bg-muted)] rounded-xl">
              <p className="text-[var(--color-text-secondary)]">You have no active bookings.</p>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  {/* Main Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                          booking.status === "ACTIVE"
                            ? "bg-[var(--color-success-bg)] text-[var(--color-success-text)]"
                            : "bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)]"
                        }`}
                      >
                        {booking.status === "ACTIVE" ? "Active" : "Completed"}
                      </span>
                      <span className="text-xs text-[var(--color-text-secondary)]">
                        ID: {booking.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                      {booking.parkingTitle}
                    </h3>
                    <div className="flex items-center text-[var(--color-text-secondary)] text-sm mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(booking.startTime).toLocaleDateString()} -{" "}
                      {new Date(booking.startTime).toLocaleTimeString()}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="text-right">
                    <p className="text-sm text-[var(--color-text-secondary)]">Total paid</p>
                    <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                      ${booking.totalPrice || booking.price}
                    </p>
                    {booking.status === "ACTIVE" && (
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
