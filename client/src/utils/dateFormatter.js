//converting timestamp to required date ---->fix commas and endings
export const dateFormatterWhole = (timestamp) => {
  const date = new Date(timestamp);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
};
