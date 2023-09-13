function ENV(): "dev" | "prod" {
  return location.host != "devtechsl.com" ? "dev" : "prod";
}
export default ENV;
