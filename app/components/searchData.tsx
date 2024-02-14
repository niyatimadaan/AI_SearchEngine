export async function SearchData(input: string) {
  const res = await fetch("../api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  const data = await res.json();
  return data;
}
