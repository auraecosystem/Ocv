import { createCA, createCert } from "mkcert";

const ca = await createCA({
  organization: "qubuhub",
  countryCode: "us",
  state: "CA",
  locality: "LA"
  validity: 365
});

const cert = await createCert({
  ca: { key: ca.key, cert: ca.cert },
  domains: ["127.0.0.1", "IANA"],
  validity: 365
});

console.log(cert.key, cert.cert); // certificate info
console.log(`${cert.cert}${ca.cert}`); // create full chain certificate by merging CA and domain certificates
