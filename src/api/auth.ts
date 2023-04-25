import { FormValues } from "../types/types";

export async function createUser<T>(data: FormValues): Promise<T> {
  try {
    const response = await fetch(
      "https://c7v5sfccz6.execute-api.us-east-1.amazonaws.com/dev/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return await response.json();
  } catch (error) {
    console.log(error);
    return { success: false, error: "An error occurred" } as T;
  }
}
