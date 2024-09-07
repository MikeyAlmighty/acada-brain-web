const fetchData = async (
  url: string,
  options = {},
  returnData: boolean = true,
) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    if (returnData) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

export { fetchData };
