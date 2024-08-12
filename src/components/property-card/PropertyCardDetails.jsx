import ListingCardNewTo from "./PropertyCardNewTo";
import { formatCurrency, formatDate } from "../../utils/formatters";
import { StarIcon } from "../../assets";

const ListingCardDetails = ({ property, trip }) => {
  console.log("trip", trip);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold truncate">{`${property?.city}, ${property?.state}`}</p>
          {property?.rating === null ||
          property?.rating === 0 ||
          !property?.rating ? (
            <ListingCardNewTo />
          ) : (
            <div className="flex items-center gap-1">
              <StarIcon className="size-3" />
              <p className="rating-value">{property?.rating}</p>
            </div>
          )}
        </div>

        <h4 className="truncate">{property?.title}</h4>
        {trip && (
          <p className="truncate text-sm">{`${formatDate({
            date: trip?.startDate,
          })} - ${formatDate({
            date: trip?.endDate,
          })}`}</p>
        )}

        <p>
          <span className="font-semibold text-base">
            {formatCurrency({
              amount: trip ? trip?.totalPrice : property?.price,
            })}
          </span>
          &nbsp;
          {!trip && <span className="text-sm text-gray-600">per night</span>}
        </p>
      </div>
    </div>
  );
};

export default ListingCardDetails;
