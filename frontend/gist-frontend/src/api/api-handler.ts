import { local_url } from "./urls";

export async function APIHandler(
  extension: string,
  method: string,
  body?: object,
  info?: string
) {
  let response = "";
  if (method === "GET") {
    await fetch(`${local_url}/${extension}`)
      .then(data => {
        return data.json();
      })
      .then(json => {
        response = json;
      })
      .catch(console.log);
    return response;
  } else if (method === "POST") {
    let data = JSON.stringify(body);
    await fetch(`${local_url}/${extension}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(data => {
        return data.json();
      })
      .then(json => {
        response = json;
      })
      .catch(console.log);
    return response;
  } else if (method === "DELETE") {
    await fetch(`${local_url}/${extension}${info}`, {
      method: "DELETE"
    })
      .then(data => {
        console.log(data);
        return data.json();
      })
      .then(json => {
        response = json;
      })
      .catch(console.log);
    return response;
  }
}
