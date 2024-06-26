const END_POINT = process.env.NEXT_PUBLIC_API_URL;

export const postData = async (url = '', data = {}) => {
  const response = await fetch(`${END_POINT}/${url}`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const patchData = async (url = '', data = {}) => {
  const response = await fetch(`${END_POINT}/${url}`, {
    method: 'PATCH',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
