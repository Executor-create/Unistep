export async function createUser<User>(data: User) {
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

    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser<User>(data: User) {
  try {
    const response = await fetch(
      "https://c7v5sfccz6.execute-api.us-east-1.amazonaws.com/dev/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Invalid email or password");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Invalid email or password");
  }
}
