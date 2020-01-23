export default async endpoint => {
  try {
    const response = await fetch(endpoint || 'http://meuip.com/api/meuip.php');
    const ip = response.text();
    return ip;
  } catch (e) {
    throw 'Unable to get IP address.';
  }
};
