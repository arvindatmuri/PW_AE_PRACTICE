import { test, expect } from '@playwright/test';


test('API 1: Get All Books List', async ({ request }) => {
    const resp = await request.fetch('https://fakerestapi.azurewebsites.net/api/v1/Books', {
        method: 'GET',
    });
    console.log(resp.statusText());
    console.log(resp.status());
    expect(resp.status()).toBe(200);
    expect(resp.ok()).toBeTruthy();

});

test('API 2: POST To All Products List', async ({ request }) => {
    const resp = await request.fetch('https://fakerestapi.azurewebsites.net/api/v1/Books', {
        method: 'POST',
        data: {
            "id": 201,
            "title": "New Book",
            "description": "string",
            "pageCount": 200,
            "excerpt": "string",
            "publishDate": "2024-07-02T11:46:40.466Z"
        }
    });
    console.log(resp.statusText());
    console.log(resp.status());
    expect(resp.status()).toBe(200);
});


test('API 3: Get Book with ID', async ({ request }) => {
    const bookid = 22
    const resp = await request.fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${bookid}`, {
        method: 'GET',
    });
    console.log(resp.statusText());
    console.log(resp.status());
    console.log(await resp.text())
    expect(resp.status()).toBe(200);
});

test('API 4: PUT To All Brands List', async ({ request }) => {
    const bookid = 22
    const resp = await request.fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${bookid}`, {
        method: 'PUT',
        data:{
            "id": 22,
            "title": "New Book Name 22",
            "description": "Some Random Text 22",
            "pageCount": 155,
            "excerpt": "Some Random Text 22",
            "publishDate": "2024-07-02T12:06:32.140Z"
          }
    });
    console.log(resp.statusText());
    console.log(resp.status());
    //   console.log(resp)
    expect(resp.status()).toBe(200);
});

test('API 5: POST To Search Product', async ({ request }) => {
    const product = "Blue Top";
    const resp = await request.fetch(`/searchProduct`, {
        method: 'POST',
        body: JSON.stringify({ search_product: product }),
    });
    console.log(resp.statusText());
    console.log(resp.status());
    //   expect(resp.status()).toBe(200);
});

test('API 6: POST To Search Product without search_product parameter', async ({ request }) => {
    const resp = await request.fetch(`/searchProduct`, {
        method: 'POST',
    });
    console.log(resp.statusText());
    console.log(resp.status());
    expect(resp.status()).toBe(200);
});
