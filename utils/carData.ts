const options = {
  method: "GET",
  next: { revalidate: 10 },
  headers: {
    "Content-Type": "application/json",
  },
};

const baseURL = process.env.NEXT_PUBLIC_SITE_URL || "";

export async function getVehicleCardProps() {
  const res = await fetch(`${baseURL}/api/cars`, options);
  const data = await res.text();
  return JSON.parse(data);
}
export async function getRecommendedCardProps() {
  const res = await fetch(`${baseURL}/api/recommended`, options);
  const data = await res.text();
  return JSON.parse(data);
}

export async function getMyCarsProps() {
  const res = await fetch(`${baseURL}/api/mycars`, options);
  const data = await res.text();
  return JSON.parse(data);
}

export async function getRentedCarProps() {
  const res = await fetch(`${baseURL}/api/rented`, options);
  const data = await res.text();
  return JSON.parse(data);
}

export async function SearchCar(
  Location: string | string[] | undefined,
  carType: string | string[] | undefined,
  capacity: string | string[] | undefined,
  price: string | string[] | undefined,
  pickUp: string | string[] | undefined,
  search: string | string[] | undefined
) {
  let url = `/api/cars?`;
  if (carType) url += `&type=${carType}`;
  if (capacity) url += `&capacity=${capacity}`;
  if (Location) url += `&location=${Location}`;
  if (price) url += `&price=${price}`;
  if (pickUp) url += `&pickUp=${pickUp}`;
  if (search) url += `&search=${search}`;
  const res = await fetch(`${baseURL}${url}`, options);
  const data = await res.text();
  return JSON.parse(data);
}
