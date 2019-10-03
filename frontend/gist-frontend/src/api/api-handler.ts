import { local_url } from "./urls";

export async function APIHandler(
  extension: string,
  method: string,
  body?: object,
  info?: string
) {
  let response = "";
  let data = "";
  if (!!body) {
    data = JSON.stringify(body);
  }
  if (method === "POST") {
    await fetch(`${local_url}/${extension}`, {
      method: method,
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => {
        return data.json();
      })
      .then(json => {
        response = json;
      })
      .catch(console.log);

    console.log(response);
    return response;
  } else {
    await fetch(`${local_url}/${extension}`, {
      method: method
    })
      .then(data => {
        return data.json();
      })
      .then(json => {
        response = json;
      })
      .catch(console.log);

    console.log(response);
    return response;
  }
}
