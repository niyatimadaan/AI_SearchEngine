export async function SearchData(input: string) {
  console.log(`input : ${input}`);
  const res = await fetch("../api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({input: input}),
  });
  const data = await res.json();
  return data;
}
