// bugSolution.js
import * as Linking from 'expo-linking';

async function handleDeepLink() {
  let initialUrl = await Linking.getInitialURL();

  if (initialUrl) {
    // Manually decode the URL
    const url = new URL(decodeURIComponent(initialUrl));
    const queryParams = Object.fromEntries(url.searchParams);

    // Process the query parameters
    console.log('Deep link parameters:', queryParams);
  } else {
    console.log('No deep link detected.');
  }
}

export default handleDeepLink;