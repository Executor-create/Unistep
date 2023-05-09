import { getTokenData } from "../services/authService";

export async function fetchUser() {
  const tokenData = getTokenData();

  if (!tokenData) {
    throw new Error("User token data not available");
  }

  const { user_id } = tokenData;

  try {
    const response = await fetch(
      `https://c7v5sfccz6.execute-api.us-east-1.amazonaws.com/dev/users/${user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
}
