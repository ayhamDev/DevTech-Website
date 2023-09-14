function ENV(): "dev" | "prod" {
  return !location.hostname.includes("devtechsl.com") ? "dev" : "prod";
}
export default ENV;
